// new component
function TodoItem(props) {
  return (
    <li>
      <h1>Task</h1>
      <p>{props.text}</p>
      {props.completed ? (
        <button>Completed</button>
      ) : (
        <button>Not Completed</button>
      )}
    </li>
  );
}

export { TodoItem };
