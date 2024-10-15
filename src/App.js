import React from 'react';
import Confetti from 'react-confetti';
import './App.css';
import {
	CreateTodo,
	TodoCounter,
	TodoItem,
	TodoList,
	YourTask,
} from './modules/todos/components';
import { useLocalStorage } from './modules/todos/hooks/useLocalStorage';
import { useTodos } from './modules/todos/hooks/useTodos';

// This is a functional component
function App() {
	// State for the list of tasks
	const [todos, setTodos] = useLocalStorage('todos_v1', [
		{ text: 'Cortar cebolla', completed: false, isDeleted: false },
	]);

	// Custom hook to manage the todos
	const {
		displayedTodos,
		completed,
		total,
		addTask,
		deleteTask,
		completeTask,
		searchTasks,
	} = useTodos(todos, setTodos);

	// state to show confetti when all tasks are completed
	const [showConfetti, setShowConfetti] = React.useState(false);

	// useEffect to show confetti when all tasks are completed
	React.useEffect(() => {
		if (todos.length === todos.filter(todo => todo.completed).length) {
			setShowConfetti(true);
			setTimeout(() => setShowConfetti(false), 5000);
		}
	}, [todos]);

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
