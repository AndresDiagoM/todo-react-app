import React from 'react';
import './App.css';
import {
  CreateTodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
} from './components';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALALALALALA', completed: false },
  { text: 'Hacer la comida', completed: false },
];

function App() {
  // This is a functional component
  return (
    //This is not HTML, this is JSX, js with xml syntax
    <React.Fragment>
      <TodoCounter completed={3} total={5} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
        <TodoItem count={3} />
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
