import { memo } from 'react';
import { useState } from 'react'

function App() {
const [firstTitle, setFirstTitle] = useState("My name is shubham");

function changeTitle() {
  setFirstTitle("My name is "+ Math.random());
}
  
  return (
    <>
    <button onClick={changeTitle}>Click me to change the title</button>
    <Header title={firstTitle} />
    <Header title="My name is raman" />
    <Header title="My name is raman" />
    <Header title="My name is raman" />
    <Header title="My name is raman" />
    <Header title="My name is raman" />
    </>
  )
}


const Header = memo(({title}) => {
  return <div>
    {title}
  </div>
})

export default App
