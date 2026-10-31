import { useContext } from "react";
import UserContext from "../UserContext";

function Developer({ name, role, experience }) {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Hello {name}</h1>

      <p>Role: {role}</p>

      <p>Experience: {experience}</p>

      <p>Logged in user: {user.name}</p>
    </div>
  );
}

export default Developer;