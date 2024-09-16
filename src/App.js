import React from 'react';
import './App.css';
import {
  CreateTodo,
  TodoCounter,
  TodoItem,
  TodoList,
  YourTask,
} from './components';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALALALALALA', completed: false },
];

function App() {
  // This is a functional component
  return (
    //This is not HTML, this is JSX, js with xml syntax
    <div className="app-container">
      <CreateTodo className="create-todo" />

      <YourTask>
        <TodoCounter completed={3} total={5} />

        <TodoList>
          {defaultTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              className="todo-item"
            />
          ))}
        </TodoList>
      </YourTask>
    </div>
  );
}

export default App;
