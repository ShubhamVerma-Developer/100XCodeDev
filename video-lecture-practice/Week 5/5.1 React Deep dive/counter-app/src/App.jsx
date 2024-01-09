import { useState } from 'react'
import './App.css'

// any time a parent re-render, its child re-render as well
// 

let state = {
  todos: [{

  }]
}

function NotificationComponent(props){
  // 99+, 98, 97
  // 100, 1000, 10000
  return <div>
    {props.notificationCount > 99 ? "99+" : props.notificationCount}
  </div>
}
function App() {
  const [todos, setTodos] = useState([
    {
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  },
    {
    title: "Study DSA",
    description: "Go to gym from 9-100",
    completed: true
  },
    {
    title: "Study DSA",
    description: "Go to gym from 9-100",
    completed: true
  },

]);

function addTodo() {
  setTodos([...todos, {
    title: "new Todo",
    description: "desc of new todo"
  }])
}

let a = 1;
window.setInterval(() => {
  a++;
}, 1000);

  return (
    <>
    <div>
      {/* <button style="padding: 10px"></button>     // do this in html */}
     <button style={{
        border: 10,
        padding: 100
      }} onClick={addTodo}>Add a randome todo</button>
      {todos.map(function(todo){
      return <Todo title={todo.title} description={todo.description}></Todo>
    })}
    <DummyButton a={a}></DummyButton>
    </div>
    </>
  )

  function DummyButton(){
    console.log("re rendered Dummy button");
    return <button>abcd</button>

  }

  function Todo(props){
    return <div>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
    </div>
  }
}

export default App
