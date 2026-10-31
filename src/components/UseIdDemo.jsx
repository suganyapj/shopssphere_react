import { useId } from "react";

function UseIdDemo() {
  const nameId = useId();
  const emailId = useId();
 function handleSubmit(event) {
  event.preventDefault();

  const name = event.target.querySelector(`#${nameId}`).value;
  const email = event.target.querySelector(`#${emailId}`).value;

  alert(`Name: ${name}\nEmail: ${email}`);
}

  return (
    <div>
      <h1>useId Demo</h1>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={nameId}>Name:</label>
          <input id={nameId} type="text" />
        </div>

        <div>
          <label htmlFor={emailId}>Email:</label>
          <input id={emailId} type="email" />
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UseIdDemo;
