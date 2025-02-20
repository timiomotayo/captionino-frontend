import { useAuth } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";

function App() {
  const { user } = useAuth();

  return (
      <div>{user ? <Dashboard /> : <Auth />}</div>
  );
}

export default App;