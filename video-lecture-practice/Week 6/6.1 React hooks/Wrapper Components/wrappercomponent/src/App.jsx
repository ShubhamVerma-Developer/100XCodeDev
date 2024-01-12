import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return <div>
    <CardWrapper>
      <CardWrapper>
    <TextComponent title="hii there"/>
      </CardWrapper>
    </CardWrapper>
    <CardWrapper>
      Hello there
    </CardWrapper>

  </div>
}

  function CardWrapper({children}){
    console.log(children);
    return <div style={{border: "2px solid black", padding: "20px"}}>
      {children}
    </div>
}

function TextComponent({title}){
  return <div>{title}</div>
}

export default App
