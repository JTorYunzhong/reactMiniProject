import { useContext, useRef, useState } from "react";
import { TodoContext } from "../context";

const TodoInput = () => {
  const [inputText, setInputText] = useState("");
  const { setTodos } = useContext(TodoContext);
  const inputRef = useRef(null);
  const addTodo = () => {
    // front end format checking, if empty string, directly return
    if (!inputText.trim()) {
      setInputText("");
      return;
    }
    setTodos((pre) => {
      return [...pre, { content: inputText, isCompleted: false }];
    });
    setInputText("");
    inputRef.current.focus();
  };
  const handleonEnterDown = (e) => {
    //error first
    if (e.key !== "Enter") {
      return;
    }
    addTodo();
  };
  return (
    <div>
      <span>
        <input
          type="text"
          ref={inputRef}
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
          onKeyDown={(e) => {
            handleonEnterDown(e);
          }}
        />
      </span>
      <span>
        <button onClick={addTodo}>Add</button>
      </span>
    </div>
  );
};

export default TodoInput;
