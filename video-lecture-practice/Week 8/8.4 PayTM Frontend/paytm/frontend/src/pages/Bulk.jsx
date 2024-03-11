import { useEffect, useState } from "react";
import axios from "axios";

export const Bulk = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/user/bulk").then((res) => {
      setItem(res.data.user);
      console.log(item);
    });
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr style={{ border: "2px solid black", padding: "5px" }}>
            <td>username</td>
            <td>firtName</td>
            <td>lastName</td>
            <td>_id</td>
          </tr>
        </thead>
        {item.map((item) => (
          <tr>
            <td>{item.username}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item._id}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
