"use client";
import { createContext, useContext, useEffect, useState, useRef} from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

// Create AuthContext
const AuthContext = createContext();

// Create AuthProvider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const isUserSaved = useRef(false); // to prevent multiple API calls
  const router = useRouter(); // Next.js router for navigation
  // const [token, setToken] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error getting session:", error);
        return;
      }
      if (data?.session) {
        setUser(data.session.user);
        // setToken(data.session.access_token);
    // to ensure saveUserToBackend is only called once
        if (!isUserSaved.current) {
            isUserSaved.current = true; // set to true
            await saveUserToBackend(data.session.access_token);
        }
      }
    };
    // call when component mounts...
    getSession();



    // // Listen for auth state changes
    // const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
    //   if (session?.user) {
    //     setUser(session.user);
    //     setToken(session.access_token);
    //   } else {
    //     setUser(null);
    //     setToken(null);
    //   }
    // });

    // return () => {
    //   authListener.subscription.unsubscribe();
    // };
  }, []); // ...but empty dependency array ensures this runs only once

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
  async function saveUserToBackend(accessToken) {
    try {
      const response = await fetch("https://dev-captionino-api.onrender.com/auth/save_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const result = await response.json();
      console.log("User saved:", result);
    } catch (error) {
      console.error("Error saving user:", error);
    }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
    } else {
      setUser(null); // remove user state on logout
      // setToken(null);
      router.push("/auth"); // Redirect to login page
      isUserSaved.current = false; // set to false when user logs out
      console.log("User logged out!");
    }
  };
  // Provide user and auth functions to the entire app
    return (
        // <AuthContext.Provider value={{ user, token, signInWithGoogle, signOut }}>
        <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
        {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use AuthContext
export function useAuth() {
    return useContext(AuthContext);
  }