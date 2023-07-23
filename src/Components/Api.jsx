import { useFetch } from "../../src/useFetch";
function Api() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return (
    <div className="App">
      <h1>Aqui se muestra la Api</h1>
      <div className="card">
        <ul>
          {error && <li>Error: {error}</li>}
          {loading && <li>Loading....</li>}
          {data?.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Api;
