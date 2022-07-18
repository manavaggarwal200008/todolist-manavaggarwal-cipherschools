import React, { useState } from "react";

const TodoForm = ({ addTodo, clearAll }) => {
  const [value, setValue] = useState("");
  const [remove, setRemove] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (remove) {
      clearAll();
      setRemove(!value);
      return;
    }
    if (value === "") return;
    addTodo(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <h1>
          {" "}
          A simple{" "}
          <span
            style={{
              fontFamily: "FontAwesome",
              fontWeight: "bolder",
              fontStyle: "italic",
            }}
          >
            React
          </span>{" "}
          Todo App{" "}
        </h1>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo-input"
          id="todo-input"
          onChange={handleChange}
          value={value}
          placeholder="Enter new task"
        ></input>
        <button className="todo-button" type="submit">
          <i className="fa fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
