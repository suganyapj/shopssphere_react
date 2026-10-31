
import useFetch from "../hooks/useFetch";

function UseFetchDemo() {
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_API_URL}/users`
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>useFetch Demo</h1>

      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseFetchDemo;
