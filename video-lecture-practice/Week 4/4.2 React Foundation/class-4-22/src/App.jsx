import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  setInterval(async () => {
  const res = await fetch("");
  }, 5000);
  // useEffect
  // connect this to a backend
  return (
    <>
    {/* <div>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      <button onClick={() => setCount((count))}>Count is {count}</button>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </div> */}

    <div>
      <button onClick={function() {setCount(Math.floor(Math.random()*100))}}>
        count is {count}
      </button>
    </div>
    </>
  )
}

export default App
