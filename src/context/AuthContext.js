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
  const isUserSaved = useRef(false); 
  const router = useRouter();
  const [token, setToken] = useState(null);
  const { toast } = useToast();

  // useEffect(() => {
  //   const getSession = async () => {
  //     const { data, error } = await supabase.auth.getSession();
  //     if (error) {
  //       console.error("Error getting session:", error);
  //       return;
  //     }
  //     if (data?.session) {
  //       setUser(data.session.user);
  //       setToken(data.session.access_token);
  //   // to ensure saveUserToBackend is only called once
  //       if (!isUserSaved.current) {
  //           isUserSaved.current = true; // set to true
  //           await saveUserToBackend(data.session.access_token);
  //       }
  //     }
  //   };
  //   // call when component mounts...
  //   getSession();



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
  // }, []);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error getting session:", error);
        return;
      }
      if (data?.session) {
        setUser(data.session.user);
        setToken(data.session.access_token);

        // Welcome Toast
        if (data.session.user && sessionStorage.getItem("hasLoggedIn") !== "true") {
          toast({
            title: "Successfully signed in!",
            description: "Welcome to Captionino.",
            variant: "success",
          });
          sessionStorage.setItem("hasLoggedIn", "true");
        }


        // Attempt to save the user to the backend first
        if (!isUserSaved.current) {
          try {
            await saveUserToBackend(data.session.access_token, data.session.user);
            isUserSaved.current = true;
          } catch (err) {
            // console.error("Backend save failed, logging out...");
            // If saving to backend fails, sign out the user
            toast({
              title: "Error!",
              description: "There was a server issue. Please try logging in again later",
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
    };
  
    getSession();
  }, []);
  



  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/dashboard` },
    });

    if (error) {
      console.error("Error signing in:", error.message);
    }
    
    return data;
  };

  // function to save user to backend (runs only once)
  // async function saveUserToBackend(accessToken) {
  //   try {
  //     const response = await fetch("https://dev-captionino-api.onrender.com/auth/save_user", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });

  //     const result = await response.json();
  //     console.log("User saved:", result);
  //   } catch (error) {
  //     console.error("Error saving user:", error);
  //   }
  // }

  async function saveUserToBackend(accessToken, user) {
      const response = await fetch("https://dev-captionino-api.onrender.com/auth/save_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    if (!response.ok) {
      const errorDetails = await response.text();
      console.log(`Save user failed: ${errorDetails}`);
    }
  
    const result = await response.json();
    console.log("User saved:", result);
  }
  

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
    } else {
      setUser(null);
      setToken(null);
      sessionStorage.setItem("hasLoggedIn", "false");
      router.push("/");
      isUserSaved.current = false;
      console.log("User logged out!");
    }
  };
  // Provide user and auth functions to the entire app
    return (
        <AuthContext.Provider value={{ user, token, signInWithGoogle, signOut }}>
        {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use AuthContext
export function useAuth() {
    return useContext(AuthContext);
  }
  