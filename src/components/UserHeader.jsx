import { useContext } from "react";
import UserContext from "../UserContext";

function UserHeader() {
  const user = useContext(UserContext);

  return (
    <header>
      <h2>Welcome, {user.name}</h2>
    </header>
  );
}

export default UserHeader;