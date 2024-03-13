import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });
  }, []);

  console.log(todos);
  return (
    <div>
      {loading ? (
        "loading"
      ) : (
        <div>
          {todos.map((item) => (
            <h1 key={item.title}>Item: {item.title}</h1>
          ))}{" "}
        </div>
      )}
    </div>
  );
}

export default App;
