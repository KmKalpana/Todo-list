import axios from "axios";
import React, { useState } from "react";
export const UpdateTodo = ({ _id, handleClose, handleUpdate }) => {
  const [data, setData] = useState({
    task: "",
    description: "",
  });


  const handleChange = (e) => {
   setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      task: data.task,
      description: data.description,
    };
    console.log({todo});
    axios
      .put(`http://localhost:8000/api/todo/${_id}`, data)
      .then((res) => {
        setData({ task: "", description: "" });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          handleUpdate();
          handleClose();
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
        <span>Description: </span>
        <input
          type="text"
          name="description"
          value={data.description}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateTodo;
