import React from "react";
import { useContext } from "react";
import { useState } from "react";
import userContext from "../context/UserContex";
import UserContextProvider from "../context/UserContextProvider";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(useContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br /> <br />{" "}
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br /> <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
