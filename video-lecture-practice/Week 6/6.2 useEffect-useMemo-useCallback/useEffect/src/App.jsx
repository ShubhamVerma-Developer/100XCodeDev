import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(function(response){
      setTodos(response.data.todos);
    })
  }, []);

  console.log(todos);
  return (
    <>
    {todos.map((todo)=>{
      return (
        <>
        <h1>{todo.id}</h1>
        <h3>{todo.title}</h3>
        <h4>{todo.description}</h4>
        </>
      )
    })}
    </>
  )
}

export default App;