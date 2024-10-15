import React from 'react';
import './App.css';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';
import { useTodos } from '../todos/hooks/useTodos';

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
    <AppUI
      displayedTodos={displayedTodos}
      completed={completed}
      total={total}
      addTask={addTask}
      deleteTask={deleteTask}
      completeTask={completeTask}
      searchTasks={searchTasks}
      showConfetti={showConfetti}
    />
	);
}

export default App;
