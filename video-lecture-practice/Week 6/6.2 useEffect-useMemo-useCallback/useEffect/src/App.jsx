import { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todos")
      .then(function (response) {
        setTodos(response.data.todos);
      });
  }, []);

  console.log(todos);
  return (
    <>
    {todos.map((todo)=> <Todo key={todo.id} id = {todo.id} title={todo.title} description={todo.description} />)}
    </>
  );
}

function Todo({id, title, description}){
  return <div>
    {id} :  
     {title} : 
     {description}
  </div>
}

export default App;
