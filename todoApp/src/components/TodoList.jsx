import { useContext } from "react";
import TodoItem from "./Todoitem";
import { TodoContext } from "../context";

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            index={index}
            key={`${index}-${todo.content}`}
            setTodos={setTodos}
          />
        );
      })}
    </ul>
  );
};
export default TodoList;
