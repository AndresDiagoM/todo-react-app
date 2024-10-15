import React from 'react';
import Confetti from 'react-confetti';
import './App.css';
import {
	CreateTodo,
	TodoCounter,
	TodoItem,
	TodoList,
	YourTask,
} from './components';

// const defaultTodos = [
// 	{ text: 'Cortar cebolla', completed: false, isDeleted: false },
// 	{
// 		text: 'Tomar el curso de intro a React',
// 		completed: true,
// 		isDeleted: false,
// 	},
// 	{ text: 'Llorar con la llorona', completed: false, isDeleted: false },
// 	{ text: 'LALALALALALALALA', completed: false, isDeleted: false },
// ];
// localStorage.setItem('todos_v1', JSON.stringify(defaultTodos));
// LocalStorage is a key-value pair storage, it only stores strings
// localStorage.getItem('todos_v1');
// localStorage.removeItem('todos_v1');

// This is a functional component
function App() {
  // De esta forma se accede a localStorage, pero se accede cada vez que se renderiza el componente, entonces mejor no hacer esto. ❌
	// const storedTodos = JSON.parse(localStorage.getItem('todos_v1')) || [];
	// if (storedTodos.length === 0) {
	// 	console.log('No tasks found in localStorage');
	// }

	// define todos as useState to keep track of the state
	const [todos, setTodos] = React.useState(() => {
    // De esta forma, se accede a localStorage solo una vez, cuando se monta el componente. ✅
    const storedTodos = localStorage.getItem('todos_v1')
    if (storedTodos) return JSON.parse(storedTodos)
    console.log('No tasks found in localStorage');
    return []
  })
  // const [todos, setTodos] = React.useState(storedTodos);

  // State for search results
  const [displayedTodos, setDisplayedTodos] = React.useState(todos);

  // derived state, to keep track of the completed tasks
	const [completed, setCompleted] = React.useState(
		todos.filter(todo => todo.completed).length
	);
	const [total, setTotal] = React.useState(todos.length);

  // state to show confetti when all tasks are completed
	const [showConfetti, setShowConfetti] = React.useState(false);

	// Update localStorage whenever todos state changes
	React.useEffect(() => {
		localStorage.setItem('todos_v1', JSON.stringify(todos));
	}, [todos]);
  // useEffect is a hook that allows you to perform side effects in your function components
  // useEffect detects changes in the dependencies array and runs the function whenever a change is detected

	const deleteTask = text => {
		const newTodos = todos.map(todo =>
			todo.text === text ? { ...todo, isDeleted: true } : todo
		);

		const filteredTodos = newTodos.filter(todo => !todo.isDeleted);

		setTodos(filteredTodos);
		setTotal(filteredTodos.length);
    setDisplayedTodos(filteredTodos);
		setCompleted(filteredTodos.filter(todo => todo.completed).length);
	};

	const addTask = text => {
		const newTodos = [...todos, { text, completed: false }];
		console.log('Nueva tarea: ', text);
		setTodos(newTodos);
    setDisplayedTodos(newTodos);
		setTotal(newTodos.length);
	};

	const completeTask = text => {
		const newTodos = todos.map(todo =>
			todo.text === text ? { ...todo, completed: !todo.completed } : todo
		);
		setTodos(newTodos);
    setDisplayedTodos(newTodos);
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
				? todos
				: todos.filter(todo =>
						todo.text.toLowerCase().includes(text.toLowerCase())
					);

		// setTodos(filteredTodos);
    setDisplayedTodos(filteredTodos);
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
					{displayedTodos.map(todo => (
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
