import React from "react";
import Todo from "./Todo";
const Todos = ({ todos, markComplete, trashTask }) => {
  return (
    <div id="todo-container">
      {todos.map((todo, index, todos) => (
        <Todo
          key={index} // this key property is not exposed by react
          index={index} // as the key property is not exposed so, adding an index param to remove specific element
          todo_id={`todo-list-${index}`}
          todo={todo}
          markComplete={markComplete}
          trashTask={trashTask}
        />
      ))}
    </div>
  );
};

export default Todos;
