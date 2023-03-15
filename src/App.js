import React, { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewToDoSubmit = (e) => {
    e.preventDefault();

    const todoItem = {
      text: newTodo,
      complete: false,
    };

    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  const handleDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });

    setTodos(filteredTodos);
  };

  const handleCheck = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        const updatedTodos = {...todo, complete: !todo.complete}
        return updatedTodos
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          handleNewToDoSubmit(e);
        }}
      >
        <input
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          type="text"
          value={newTodo}
        />
        <div>
          <button>Add!</button>
        </div>
      </form>
      {todos.map((todo, i) => {
        return (
        <Todo 
        key={i} 
        i={i}
        todo={todo} 
        handleCheck={handleCheck} 
        handleDelete={handleDelete} 
        />
        );
      })}
    </div>
  );
}

export default App;
