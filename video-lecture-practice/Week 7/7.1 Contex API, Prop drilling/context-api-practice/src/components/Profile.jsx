import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <h1>Not logged in</h1>;
  else {
  }
  return (
    <div>
      <h1>Profile : {user.username}</h1>
      <h1>Profile : {user.password}</h1>
      <h1>More components</h1>
    </div>
  );
}
