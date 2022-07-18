import { useState } from "react";

import "./App.css";
import TodoForm from "./components/TodoTemplate/TodoForm";
import Todos from "./components/TodoTemplate/Todos";



function App() {
  const [todos, setTodos] = useState([
    {
      content: "Breakfast at 8",
      status: false,
    },
    {
      content: "Lunch at 2",
      status: false,
    },
  ]);

  const addTodo = (todo_content) => {
    setTodos([
      ...todos,
      {
        content: todo_content,
        status: false,
      },
    ]);
  };

  const markComplete = (index) => {
    const all = [...todos];
    all[index].status = !all[index].status;
    setTodos([...all]);
  };

  const trashTask = (index, element_id) => {
    const all = [...todos];
    try {
      let element = document.getElementById(element_id);
      setTimeout(() => {
        all.splice(index, 1);
        element.remove();
      }, 100);
    } catch (error) {
      
    }
    setTodos([...all]);
  };

  const clearAll = () => {
    try {
      setTimeout(() => {
        var elements = document.getElementsByClassName("todo-list");
        while (elements.length > 0) {
          elements[0].parentNode.removeChild(elements[0]);
        }
        todos.length = 0;
      }, 100);
    } catch (error) {
     
    }
    setTodos([...todos]);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} clearAll={clearAll} />
      <Todos todos={todos} markComplete={markComplete} trashTask={trashTask} />
    </div>
  );
}

export default App;
