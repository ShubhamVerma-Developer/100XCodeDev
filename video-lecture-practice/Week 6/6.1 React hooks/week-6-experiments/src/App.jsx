import React, { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("my name is shubham");
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState();

  function handleClick(){
    console.log("re-renders");
    let random = Math.floor(Math.random()*100);
    setNumber(random);
  }
  
  return (
    <>
     <div>
      <Header title={title}/>
      <Header name="header2"/>
      <button onClick={handleClick}>click to generate  <b>{number}</b></button>
     </div>
    </>
  )
}

const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});



export default App
