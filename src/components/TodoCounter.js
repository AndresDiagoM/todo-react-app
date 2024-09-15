// new component
function TodoCounter(props) {
  return (
    <h1>
      Has completado {props.completed} de {props.total} tareas <span>🎉</span>
    </h1>
  );
}

export { TodoCounter };
