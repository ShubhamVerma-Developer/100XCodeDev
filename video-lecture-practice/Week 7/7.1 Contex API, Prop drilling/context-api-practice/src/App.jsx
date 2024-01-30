import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <UserContextProvider>
        <h1>React video for context API</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
}

export default App;
