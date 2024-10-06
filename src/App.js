import React from 'react';
import './App.css';
import {
	CreateTodo,
	TodoCounter,
	TodoItem,
	TodoList,
	YourTask,
} from './components';
import Confetti from 'react-confetti';


const defaultTodos = [
	{ text: 'Cortar cebolla', completed: false, isDeleted: false },
	{
		text: 'Tomar el curso de intro a React',
		completed: true,
		isDeleted: false,
	},
	{ text: 'Llorar con la llorona', completed: false, isDeleted: false },
	{ text: 'LALALALALALALALA', completed: false, isDeleted: false },
];

// This is a functional component
function App() {
	const [todos, setTodos] = React.useState(defaultTodos);
	const [completed, setCompleted] = React.useState(
		defaultTodos.filter(todo => todo.completed).length
	);
	const [total, setTotal] = React.useState(defaultTodos.length);
  const [showConfetti, setShowConfetti] = React.useState(false);


  const deleteTask = text => {
    const newTodos = todos.map(todo =>
      todo.text === text ? { ...todo, isDeleted: true } : todo
    );

    const filteredTodos = newTodos.filter(todo => !todo.isDeleted);

    setTodos(filteredTodos);
    setTotal(filteredTodos.length);
    setCompleted(filteredTodos.filter(todo => todo.completed).length);
  };

	const addTask = text => {
		const newTodos = [...todos, { text, completed: false }];
		console.log('Nueva tarea: ', text);
		setTodos(newTodos);
		setTotal(newTodos.length);
	};

	const completeTask = text => {
		const newTodos = todos.map(todo =>
			todo.text === text ? { ...todo, completed: !todo.completed } : todo
		);
		setTodos(newTodos);
		setCompleted(newTodos.filter(todo => todo.completed).length);

    // if all tasks are completed, then show confetti
    if (newTodos.length === newTodos.filter(todo => todo.completed).length) {
      console.log('All tasks are completed');
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
	};

	// for searching the task in the list
	const searchTasks = text => {
		const filteredTodos =
			text === ''
				? defaultTodos
				: todos.filter(todo =>
						todo.text.toLowerCase().includes(text.toLowerCase())
					);

		setTodos(filteredTodos);
		setCompleted(filteredTodos.filter(todo => todo.completed).length);
	};

	return (
		// This is not HTML, this is JSX, js with xml syntax
		<div className='app-container'>
			<CreateTodo className='create-todo' addTask={addTask} />

			<YourTask>
				<TodoCounter
					completed={completed}
					total={total}
					searchTasks={searchTasks}
				/>

				<TodoList>
          {showConfetti && <Confetti />}
					{todos.map(todo => (
						<TodoItem
							key={todo.text}
							text={todo.text}
							completed={todo.completed}
							className='todo-item'
							completeTask={completeTask}
              deleteTask={deleteTask}
						/>
					))}
				</TodoList>
			</YourTask>
		</div>
	);
}

export default App;
