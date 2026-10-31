
import { useAuth } from "../useAuth";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome! You are viewing the dashboard.</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
