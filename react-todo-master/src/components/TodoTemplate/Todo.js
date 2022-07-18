import React from "react";

const Todo = ({ index, todo_id, todo, markComplete, trashTask }) => {
  const removeTask = () => {
    // console.log(`removing index : ${index}`);
    trashTask(index, todo_id);
  };
  return (
    <div className="todo-list" id={todo_id}>
      <p>
        <input
          className="todo-checkbox"
          type={"checkbox"}
          id={index}
          onChange={() => {
            markComplete(index);
          }}
        ></input>
        <label
          style={{
            textDecoration: todo.status ? "line-through" : "",
          }}
          htmlFor={index}
        >
          {todo.content}
        </label>
        <button className="btn-trash" onClick={removeTask}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </p>
    </div>
  );
};

export default Todo;
