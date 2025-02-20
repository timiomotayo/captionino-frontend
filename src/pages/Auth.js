import { useAuth } from "../contexts/AuthContext";

export default function Auth() {
  const { signInWithGoogle } = useAuth();
  
  return (
    <div className="auth-container">
      <button onClick={signInWithGoogle} className="google-btn">
        Continue with Google
      </button>
    </div>
  )
}
