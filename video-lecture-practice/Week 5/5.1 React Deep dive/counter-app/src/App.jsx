import { useState } from 'react'
import './App.css'

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

]);

  return (
    <>
    <div>
    <Todo title="shubham" description="software developer" completed="false"></Todo>
    <CustomBotton count="41"></CustomBotton>
    </div>
    </>
  )


  function Todo(props){
    return <div>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
      <h1>{props.completed}</h1>
    </div>
  }

  function CustomBotton(props){
    return <div>
      <h1>{props.count}</h1>
    </div>

  }
  
}

export default App
