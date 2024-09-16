import '../assets/styles/TodoItem.css';

// new component
function TodoItem(props) {
  return (
    <li
      className={`todo-item ${props.completed ? 'completed' : 'not-completed'}`}
    >
      <div className="checkbox-container">
        {props.completed && <span className="completed-circle"></span>}
      </div>
      <p>{props.text}</p>
    </li>
  );
}

export { TodoItem };
