import './App.css';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

function App() {
  // This is a functional component
  return (
    //This is not HTML, this is JSX, js with xml syntax
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem count={3} />
        <TodoItem count={1} />
        <TodoItem count={5} />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
