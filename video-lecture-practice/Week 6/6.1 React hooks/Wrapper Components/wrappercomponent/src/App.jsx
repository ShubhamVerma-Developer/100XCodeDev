import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return <div>
    <CardWrapper innerComponent={<TextComponent title="hello" />} />
    <CardWrapper innerComponent={<TextComponent title="hello1" />} />
  </div>
}

  function CardWrapper({innerComponent}){
    return (
      <div style={{border: "2px solid black", padding: "20px"}}>{innerComponent}</div>
    )
}

function TextComponent({title}) {
  return <div>
    {title}
  </div>
}


export default App
