import { useParams, useNavigate } from "react-router-dom";
const developers = [
  {
    id: 1,
    name: "Suganya",
    role: "full stack developer",
    experience: "2 years",
  },
  {
    id: 2,
    name: "Yamini",
    role: ".NET stack developer",
    experience: "5 years",
  },
  {
    id: 3,
    name: "John",
    role: "Backend developer",
    experience: "4 years",
  },
  {
    id: 4,
    name: "Jayaselvan",
    role: "Devops engineer",
    experience: "5 years",
  },
];

function DeveloperDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const developer = developers.find((developer) => developer.id === Number(id));

  if (!developer) {
    return (
      <div>
        <h2>Developer not found</h2>
        <button onClick={() => navigate("/developers")}>
          ← Back to Developers
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>{developer.name}</h1>
      <p>Role: {developer.role}</p>
      <p>Experience: {developer.experience}</p>
      <button onClick={() => navigate("/developers")}>
        ← Back to Developers
      </button>
    </div>
  );
}

export default DeveloperDetails;
