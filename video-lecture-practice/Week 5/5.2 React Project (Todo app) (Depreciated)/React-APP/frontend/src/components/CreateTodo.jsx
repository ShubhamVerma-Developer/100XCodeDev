import { useState } from "react";

function CreateTodo(props){
// react-query
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
return <div>
    <input style={{ padding: 10, margin: 10}} type="text" placeholder="title" onChange={function(e){
      setTitle(e.target.value);
    }}></input><br/>
    <input style={{ padding: 10, margin: 10}} type="text" placeholder="description" onChange={function(e){
      setDescription(e.target.value);
    }}></input><br/>

    <button style={{ padding: 10, margin: 10}} onClick={() => {
      fetch("http://localhost:3005/todos", { 
        method: "POST", 
        body: JSON.stringify({
          title: title,
          description: description
      }),
      headers: {
        "Content-Type": "application/json"
      } 
    }).then(async function(res){
        const json = await res.json();
        console.log(json);
        alert("Todo added");
    })
    }}>Add a todo</button>
  </div>
}

export default CreateTodo;