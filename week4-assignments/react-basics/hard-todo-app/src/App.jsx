/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Go to gym from 6 to 8",
    },
    {
      title: "Go for a run",
      description: "Go for run from 8 to 8:30",
    },
    {
      title: "Travel",
      description: "Go for some travelling",
    },
  ]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: title,
        description: desc,
      },
    ]);
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: "cornsilk",
          border: "1px solid black",
          borderRadius: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="title"
          style={{
            margin: "1rem",
            height: "1.5rem",
            borderRadius: "1rem",
            padding: "0 1rem",
          }}
          onChange={function (event) {
            setTitle(event.target.value);
          }}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="description"
          style={{
            margin: "1rem",
            height: "1.5rem",
            borderRadius: "1rem",
            padding: "0 1rem",
          }}
          onChange={function (event) {
            setDesc(event.target.value);
          }}
        ></input>
        <br></br>
        <button
          style={{
            margin: "1rem 1.1rem",
            height: "1.5rem",
            borderRadius: "0.5rem",
            width: "6rem",
            backgroundColor: "antiquewhite",
          }}
          onClick={addTodo}
        >
          Add todo
        </button>
      </div>
      {todos.map((todo) => {
        return (
          <div
            style={{
              backgroundColor: "antiquewhite",
              padding: "1rem",
              margin: "1.6rem 0",
              borderRadius: "1rem",
            }}
          >
            <h1>{todo.title}</h1>
            <h3>{todo.description}</h3>
            <button
              onClick={function () {
                //Function for removing a todo
                const index = todos.indexOf(todo);
                todos.splice(index, 1);
                setTodos([...todos]);
              }}
              style={{
                margin: "1rem 1.1rem",
                height: "1.5rem",
                borderRadius: "0.5rem",
                width: "6rem",
                backgroundColor: "grey",
              }}
            >
              Remove todo
            </button>
            <button
              onClick={function () {
                //Function to update a todo
                const newTitle = prompt("Enter new title of the todo:");
                const newDesc = prompt("Enter new description of the todo:");
                const newObj = {
                  title: newTitle,
                  description: newDesc,
                };
                todos[todos.indexOf(todo)] = newObj;
                setTodos([...todos]);
              }}
              style={{
                margin: "1rem 1.1rem",
                height: "1.5rem",
                borderRadius: "0.5rem",
                width: "6rem",
                backgroundColor: "grey",
              }}
            >
              Update todo
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
