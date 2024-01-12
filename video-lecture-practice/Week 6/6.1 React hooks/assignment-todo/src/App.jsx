import { useState } from 'react'
import './App.css'

let counter = 4;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "title1",
      description: "description1"
    },
    {
      id: 2,
      title: "title2",
      description: "description2"
    },
    {
      id: 3,
      title: "title3",
      description: "description3"
    }
  ]);
  console.log(todos);

  function addTodo() {
    setTodos([...todos, {
      id: counter++,
      title: "title" + Math.floor(Math.random()*100),
      description: "description" + Math.floor(Math.random()*100)
  }])

  }
  return (
  <div>
    <button onClick={addTodo}>Add a todo</button>
    <h1 style={{color: "red"}}>id          title       description</h1>
    {todos.map(todo => <Todo key={todo.id} id = {todo.id} title={todo.title} description={todo.description} />)}
  </div>
  )
}


function Todo({title, description, id}){
  return <div>
    <h3>{id}   {title}  {description}</h3>
  </div>
}
export default App
