import { useState } from "react";
import "./App.css";
import { useMemo } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [sum, setSum] = useState(0);
  return (
    <>
      <input
        type="number"
        onChange={(e) => {
          const inputValue = parseInt(e.target.value);
          setSum((inputValue * (inputValue + 1)) / 2);
        }}
      />
      <br /><br />
      Sum is : {sum}
      <br />
      <br />
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        Counter is ({count})
      </button>
    </>
  );
}

export default App;
