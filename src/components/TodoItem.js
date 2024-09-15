// new component
function TodoItem(props) {
  return (
    <li>
      <h1>Task</h1>
      <span>V</span>
      <p>
        Completaste {props.count} tareas de 5. Hora:{' '}
        {new Date().toLocaleTimeString()}
      </p>
      <span></span>
    </li>
  );
}

export { TodoItem };
