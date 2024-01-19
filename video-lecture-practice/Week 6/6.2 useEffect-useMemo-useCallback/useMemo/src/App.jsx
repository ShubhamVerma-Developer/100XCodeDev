import { useEffect, useState } from "react";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [finalCount, setFinalCount] = useState(0);

  // let count = useMemo(() => {
  //   console.log("memo got called");
  //   let finalCount = 0;
  //   for(let i = 1; i <= inputValue; i++){
  //     finalCount = finalCount + i;
  //   }
  //   return finalCount;
  // }, [inputValue]);

useEffect(() => {
  let result =0 
  for(let i = 1; i <= inputValue; i++){
    result = result + i;
  }
  setFinalCount(result);
}, [inputValue])

  return (
    <>
    <div>
      <input onChange={function(e) {
        setInputValue(e.target.value); }} placeholder={"Find sum from 1 to n"}></input>
        <br />
        Sum from 1 to {inputValue} is {finalCount}
        <br />
        <button onClick={() => {
          setCounter(counter + 1);
        }}>Counter ({counter})</button>
    </div>
    </>
  );
}

export default App;
