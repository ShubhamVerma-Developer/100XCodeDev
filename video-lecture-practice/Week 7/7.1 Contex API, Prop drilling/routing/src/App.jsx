import { useState } from "react";
import { Dashboard } from "./components/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Dashboard />
      <Count count={count} />
      <Buttons count={count} setCount={setCount} />
    </div>
  );
}

function Count({ count }) {
  return <div>{count}</div>;
}

function Buttons({ count, setCount }) {
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;

// https://react.dev/learn/passing-data-deeply-with-context
