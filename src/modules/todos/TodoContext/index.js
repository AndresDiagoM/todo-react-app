import React from 'react';
import { useTodos } from '../hooks/useTodos';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
	// Here is where the other components will be wrapped, and can use the context

  const [openModal, setOpenModal] = React.useState(false);

	// State for the list of tasks
	const {
		items: todos,
		setItems: setTodos,
		loading,
		setLoading,
		error,
		setError,
	} = useLocalStorage('todos_v1', [
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
	} = useTodos({ todos, setTodos, setLoading });

	// state to show confetti when all tasks are completed
	const [showConfetti, setShowConfetti] = React.useState(false);

	// useEffect to show confetti when all tasks are completed
	React.useEffect(() => {
		if (todos.length === todos.filter(todo => todo.completed).length) {
			setShowConfetti(true);
			setTimeout(() => setShowConfetti(false), 5000);
		}
	}, [todos]);
	// UseEffect executes the function when the dependencies in the second argument change

	return (
		<TodoContext.Provider
			value={{
				displayedTodos,
				completed,
				total,
				addTask,
				deleteTask,
				completeTask,
				searchTasks,
				showConfetti,
				loading,
				setLoading,
				error,
				setError,
        openModal,
        setOpenModal,
			}}
		>
			{children}
		</TodoContext.Provider>
	);

	// Any component inside the provider can access the value with all the properties
}

export { TodoContext, TodoProvider };
/*
  * This is the way to use the context, but the most common way is to create a custom provider,
  * like the one above
  <TodoContext.Provider></TodoContext.Provider>
  <TodoContext.Consumer></TodoContext.Consumer>
*/
