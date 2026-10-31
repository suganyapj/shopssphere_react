import { Link } from "react-router-dom";

const developers = [
  {
    id: 1,
    name: "Suganya",
    role: "full stack developer",
  },
  {
    id: 2,
    name: "Yamini",
    role: ".NET stack developer",
  },
  {
    id: 3,
    name: "John",
    role: "Backend developer",
  },
  {
    id: 4,
    name: "Jayaselvan",
    role: "Devops engineer",
  }
];

function Developers() {
  return (
    <div>
      <h1>Developers</h1>

      {developers.map((developer) => (
        <div key={developer.id}>
          <h2>
            <Link to={`/developers/${developer.id}`}>
              {developer.name}
            </Link>
          </h2>
          <p>{developer.role}</p>

          <Link to={`/developers/${developer.id}`}>
            View Details
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Developers;