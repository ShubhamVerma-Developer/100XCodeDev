import { useEffect, useState } from 'react'
import  axios  from 'axios'

function App() {
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/todos")
  //   .then(res => {
  //     console.log(res.data.todos);
  //     setTodos(res.data.todos);
  //   })
  // }, [])

  // console.log(todos);

  // return <div>
  //   <h1>
  //   {todos[0].title}
  //   </h1>
  // </div>



  const [count, setCount] = useState(0);
  return <div>
    <button onClick={() => {
      setCount(c => c + 1);
      setCount(c => c + 1);
    }}>click me {count}</button>
  </div>
}

export default App
