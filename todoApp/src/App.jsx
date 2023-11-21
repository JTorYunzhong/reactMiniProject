import React, { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TodoContext } from "./context/index";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <TodoContext.Provider value={{ todos, setTodos }}>
        <TodoHeader headerContent={"Shopping List"} />
        <TodoInput />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
