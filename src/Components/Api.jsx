import { useFetch } from "../../src/useFetch";
function Api() {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <div className="App">
      <h1>Aqui se muestra la Api</h1>
      <ul className="card">
        {data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Api;
