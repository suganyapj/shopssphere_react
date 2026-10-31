import { useState } from "react";

function ApiCrudDemo() {
  const [message, setMessage] = useState("");

async function createUser() {
    try{
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Yamini",
        email: "yamini@example.com",
      }),
    }
  );
if (!response.ok) {
    throw new Error("Failed to create user");
  }
  const data = await response.json();

  setMessage(`Created user: ${data.name}`);
}
catch (error) {
    setMessage(`Error: ${error.message}`);
  }
}
async function updateUser() {
    try{
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Updated Yamini",
        email: "updated@example.com",
      }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to update user");
  }

  const data = await response.json();

  setMessage(`Updated user: ${data.name}`);
}   
catch (error) {
    setMessage(`Error: ${error.message}`);
  }
}
async function deleteUser() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1",
    {
      method: "DELETE",
    }
  );

  if (response.ok) {
    setMessage("User deleted successfully");
  }
}
  return (
    <div>
      <h1>API CRUD Demo</h1>
            <p>{message}</p>

<button onClick={createUser}>
  Create User
</button>
<button onClick={updateUser}>
  Update User
</button>
<button onClick={deleteUser}>
  Delete User
</button>
    </div>
  );
}
export default ApiCrudDemo;