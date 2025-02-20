import { useAuth } from "../contexts/AuthContext";
import { Avatar } from "../components/Avatar";

export default function Dashboard() {
    const { user, signOut } = useAuth();

    return (
      <div className="dashboard">
        <h1>Welcome to CAPTIONINO!</h1>
        <h2 className="user-info">{user.email}</h2>
        <Avatar src={user.user_metadata.avatar_url} alt="User Avatar" />
        <button onClick={signOut} className="logout-btn">Logout</button>
      </div>
    );
  }