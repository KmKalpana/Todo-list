import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const CreateTodo = () => {
   const navigate=useNavigate();
  const [data, setData] = useState({
    task: "",
    description: "",
  });
  const handleChange = (e) => {
   setData((data) => ({...data, [e.target.name]:e.target.value}));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      task: data.task,
      description: data.description,
    };
    console.log({todo});
    axios
      .post("http://localhost:8000/api/todo", data)
      .then((res) => {
        setData({ task: "", description: "" });
        navigate("/");
        console.log(res);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Link to="/">
        <button className="back-button">Back </button>
      </Link>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <span>Task: </span>
          <input
            type="text"
            name="task"
            value={data.task}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>Description: </span>
          <input
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
