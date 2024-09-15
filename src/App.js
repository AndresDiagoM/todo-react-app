import './App.css';
import logo from './platzi.webp';

function App() {
  // This is a functional component
  return (
    //This is not HTML, this is JSX, js with xml syntax
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <h1>Todo List</h1>
        <ul>
          <TodoItem count={3} />
          <TodoItem count={1} />
          <TodoItem count={5} />
        </ul>
      </section>
    </div>
  );
}

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

export default App;
