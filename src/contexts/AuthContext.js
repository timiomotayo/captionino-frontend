import { createContext, useContext, useEffect, useState, useRef} from "react";
import { supabase } from "../services/supabase";

// Create AuthContext
const AuthContext = createContext();

// Create AuthProvider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const isUserSaved = useRef(false); // to prevent multiple API calls

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error getting session:", error);
        return;
      }
      if (data?.session) {
        setUser(data.session.user);
    // to ensure saveUserToBackend is only called once
        if (!isUserSaved.current) {
            isUserSaved.current = true; // set to true
            await saveUserToBackend(data.session.access_token);
        }
      }
    };
    // call when component mounts...
    getSession();
  }, []); // ...but empty dependency array ensures this runs only once

  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.error("Error signing in:", error.message);
    }

    return data;
  };

  // function to save user to backend (runs only once)
  async function saveUserToBackend(accessToken) {
    try {
      const response = await fetch("http://127.0.0.1:8000/auth/save_user", {
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
      isUserSaved.current = false; // set to false when user logs out
      console.log("User logged out!");
    }
  };
  // Provide user and auth functions to the entire app
    return (
        <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
        {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use AuthContext
export function useAuth() {
    return useContext(AuthContext);
  }