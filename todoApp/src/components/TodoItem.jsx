const TodoItem = ({ todo, index, setTodos }) => {
  const { content, isCompleted } = todo;
  const doubleClickTodo = () => {
    setTodos((pre) => {
      return pre.map((element, i) => {
        if (i !== index) {
          return element;
        }
        return { ...element, isCompleted: !element.isCompleted };
      });
    });
  };

  const deleteTodo = () => {
    setTodos((pre) => {
      // return [...pre.slice(0, index), ...pre.slice(index + 1)];
      return pre.filter((_, idx) => {
        return idx !== index;
      });
    });
  };

  return (
    <li>
      <span
        className={isCompleted ? "completed" : "regular"}
        onDoubleClick={doubleClickTodo}
      >
        {content}
      </span>
      <span>
        <button onClick={deleteTodo}>Delete</button>{" "}
      </span>
    </li>
  );
};
export default TodoItem;
