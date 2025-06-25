"use client";
import { createContext, useContext, useEffect, useState, useRef} from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

// Create AuthContext
const AuthContext = createContext();

// Create AuthProvider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true) // Add loading state for navbar skeleton 
  const isUserSaved = useRef(false); 
  const router = useRouter();
  const [token, setToken] = useState(null);
  const { toast } = useToast();
  const [backendUser, setBackendUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      setIsLoading(true) // Set loading to true when starting to fetch

      const { data, error } = await supabase.auth.getSession();
      if (error) {
        // console.error("Error getting session:", error);
        setIsLoading(false) // Set loading to false on error
        return;
      }
      if (data?.session) {
        const sessionUser = data.session.user;
        const accessToken = data.session.access_token;

        setUser(sessionUser);
        setToken(accessToken);

        // Welcome Toast
        if (sessionUser && sessionStorage.getItem("hasLoggedIn") !== "true") {
          toast({
            title: "Signin Successfull",
            description: "Welcome to Captionino!",
            variant: "success",
          });
          sessionStorage.setItem("hasLoggedIn", "true");
        }

        // // Now fetch full user data from backend
        const backendUserData = await getUserFromBackend(accessToken);
        // console.log(backendUserData)
        if (backendUserData) {
          setBackendUser(backendUserData.user);
        } else {
          // console.log("Backend user data is null");
        }

        // Attempt to save the user to the backend first, then fetch user data from backend
        if (!isUserSaved.current) {
          try {
            await saveUserToBackend(accessToken, sessionUser);
            isUserSaved.current = true;
          } catch (err) {
            // If saving to backend fails, sign out the user

            toast({
              title: "Error",
              description: "Something went wrong. Please try logging in again later.",
              variant: "destructive",
            })

            setTimeout(async () => {
              await signOut();
              setUser(null);
              setToken(null);
              isUserSaved.current = false;
            }, 2000)       
          }
        }
      }
      setIsLoading(false) // Set loading to false when done fetching
    };

  //   // // Listen for auth state changes
  //   // const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
  //   //   if (session?.user) {
  //   //     setUser(session.user);
  //   //     setToken(session.access_token);
  //   //   } else {
  //   //     setUser(null);
  //   //     setToken(null);
  //   //   }
  //   // });

  //   // return () => {
  //   //   authListener.subscription.unsubscribe();
  //   // };
    getSession();
  }, []);
  

  const signInWithGoogle = async () => {
    setIsLoading(true) // Set loading to true when starting sign-in
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/dashboard` },
    });

    // To remove the hash (#) appended to the url after auth. 
    // if (window.location.hash) {
    //   history.replaceState(null, null, window.location.pathname);
    // }

    if (error) {
      // console.error("Error signing in:", error.message);
      setIsLoading(false) // Set loading to false on error
    }
    
    return data;
  };


  async function saveUserToBackend(accessToken, user) {
    // Get user's timezone from browser
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const payload = {
        timezone: timeZone,
      };

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/save_user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });
  
    if (!response.ok) {
      const errorDetails = await response.text();
      // console.log(`Save user failed: ${errorDetails}`);
    }
  
    const result = await response.json();
    // console.log("User saved:", result);
  }
  

  async function getUserFromBackend(accessToken) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/get_user/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        const errorDetails = await response.text();
        // console.log(`Get user failed: ${response.status} - ${errorDetails}`);
        return null;
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      // console.error("Error fetching user:", error);
      return null;
    }
  }

  const signOut = async () => {
    setIsLoading(true) // Set loading to true when starting sign-out

    const { error } = await supabase.auth.signOut();
    if (error) {
      // console.error("Error logging out:", error.message);
    } else {
      setUser(null);
      setToken(null);
      sessionStorage.setItem("hasLoggedIn", "false");
      router.push("/");
      isUserSaved.current = false;
      // console.log("User logged out!");
    }
    setIsLoading(false) // Set loading to false when done signing out
  };
  // Provide user and auth functions to the entire app
    return (
        <AuthContext.Provider value={{ user, token, signInWithGoogle, signOut, backendUser, isLoading }}>
        {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use AuthContext
export function useAuth() {
    return useContext(AuthContext);
  }
  