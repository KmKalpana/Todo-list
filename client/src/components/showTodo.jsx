import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {UpdateTodo} from "./updateTodo";

function TodoCard({ data, handleDelete, handleEdit }) {
  const { _id, task, description } = data;
  return (
    <li key={_id} className="todo">
      <div className="Task">
        <span style={{fontWeight: 'bold'}}>{task}:</span> &nbsp;
        <span>{description}</span> &nbsp;
        <button name={_id} onClick={handleEdit}>
         edit
        </button>
        &nbsp;
        <button name={_id} onClick={handleDelete}>
          delete
        </button>
      </div>
      <br/>
    </li>
  );
}

export function ShowTodo() {
  const [todo, setTodo] = useState([]);
  const [open, setOpen]=useState(false);
  const [id, setId]=useState("");
  const [update, setUpdate]=useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/todo")
      .then((res) => {
        console.log(res.data);
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  function handleEdit(e){
    setId(e.target.name);
    setOpen(true);
  }
  function handleUpdate(){
    setUpdate(!update)
  }
  function handleClose(){
    setId("");
    setOpen(false);
  }
  const handleDelete=(e)=>{
      axios.delete(`http://localhost:8000/api/todo/${e.target.name}`);
      setTodo((data)=>{
        return data.filter((todo) => todo._id !== e.target.name);
      });
  }
  return (
    <section >
     <Link to="/create-todo">
     <button className="new-button">Add to New Task</button>
     </Link>
      <section >
        <h1 className="heading">TODO</h1>
        <ul>
          {todo.map((data) => (
            <TodoCard data={data} 
            handleDelete={handleDelete} 
            handleEdit={handleEdit}/>
          ))}
        </ul>
      </section>
      {open ?(<section>
        <p onClick={handleClose}>
          <button>Close</button>
        </p>
        <UpdateTodo
          _id={id}
          handleClose={handleClose}
          handleUpdate={handleUpdate}
         />
        </section>
      ):("")}
    </section>
  );
}
