import React, { useState } from "react";
import { Container } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "./ToDoApp.css";

const ToDoApp = () => {
  let [todo, setTodo] = useState([]);
  let [newTask, setNewTask] = useState("");

  let handleOnChange = (e) => {
    setNewTask(e.target.value);
  };
  let addTodo = () => {
    if (!newTask.trim()) return;
    setTodo([...todo, { task: newTask, id: uuidv4(), done: false }]);
    setNewTask("");
    toast.success("Task Added ")
  };
  let delTodo = (id) => {
    setTodo(todo.filter((prevTask) => prevTask.id !== id));
    toast.error("Task Deketed ")
  };
  let taskDone = (id) => {
    const updatedTodos = todo.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
  );
  setTodo(updatedTodos);
  toast.info("Task Completed ")
  };
  return (
    <>
      <header className="header">
        <h2>To-Do App</h2>
      </header>

      <Container maxWidth="sm" className="container">
        <div className="card">
          <h3 className="section-title">Add New Task</h3>
          <div className="task-input-row">
            <input
              className="task-input"
              type="text"
              placeholder="Enter a task"
              value={newTask}
              onChange={handleOnChange}
            />
            <button className="add-button" onClick={addTodo}>
              Add
            </button>
          </div>

          <h3 className="section-title">To-Do List</h3>
          <ul className="todo-list">
            {todo.map((item) => (
              <li className="todo-item" key={item.id}>
                <span
                  className="task-text"
                  style={item.done ? { textDecoration: "line-through" } : {}}
                >
                  {item.task}
                </span>
                <div>
                  <button
                    className="icon-button"
                    title="Mark as Done"
                    onClick={() => taskDone(item.id)}
                  >
                    <CheckCircleOutlineIcon style={{ color: "green" }} />
                  </button>
                  <button
                    className="icon-button"
                    title="Delete"
                    onClick={() => delTodo(item.id)}
                  >
                    <DeleteIcon style={{ color: "red" }} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default ToDoApp;
