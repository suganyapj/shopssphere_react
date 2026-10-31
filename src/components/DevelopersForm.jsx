import { useState } from "react";
function DeveloperForm({ onSubmit } ) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Experience:", experience);
    console.log("Form submitted");
    onSubmit(name, role, experience);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Add Developer</h3>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        ></input>
        <input
          placeholder="Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        ></input>
        <p>Your name: {name}</p>
        <p>Your role: {role}</p>
        <p>Your experience: {experience}</p>
        <button type="submit">Add Developer</button>
        <button
          type="button"
          onClick={() => {
            setName("");
            setRole("");
            setExperience("");
          }}
        >
          Clear
        </button>
      </form>
    </>
  );
}
export default DeveloperForm;
