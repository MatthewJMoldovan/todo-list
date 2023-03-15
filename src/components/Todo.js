const Todo = (props) => {
  const todoClasses = [];

  if (props.todo.complete) {
    todoClasses.push("line-through");
  }

  return (
    <div className="todoContainer">
      <div className="todoCard">
        <input
          onChange={(e) => {
            props.handleCheck(props.i);
          }}
          checked={props.todo.complete}
          type="checkbox"
        />
        <p className={todoClasses.join(" ")}>{props.todo.text}</p>
        <button
          onClick={(e) => {
            props.handleDelete(props.i);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
