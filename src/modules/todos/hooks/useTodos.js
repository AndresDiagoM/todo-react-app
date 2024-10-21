import React from 'react';

function useTodos({ todos, setTodos, setLoading }) {
	// State for search results
	const [displayedTodos, setDisplayedTodos] = React.useState(todos);

	// Derived state, to keep track of the completed tasks
	const [completed, setCompleted] = React.useState(
		todos.filter(todo => todo.completed).length
	);
	const [total, setTotal] = React.useState(todos.length);

	// Update displayedTodos when todos changes
	React.useEffect(() => {
		setDisplayedTodos(todos);
		setCompleted(todos.filter(todo => todo.completed).length);
		setTotal(todos.length);
	}, [todos]);

	// Methods to manage the todos
	const addTask = text => {
		const newTodos = [...todos, { text, completed: false }];
		setTodos(newTodos);
		setDisplayedTodos(newTodos);
		setTotal(newTodos.length);
	};

	const deleteTask = text => {
		const newTodos = todos.map(todo =>
			todo.text === text ? { ...todo, isDeleted: true } : todo
		);

		const filteredTodos = newTodos.filter(todo => !todo.isDeleted);

		setTodos(filteredTodos);
		setDisplayedTodos(filteredTodos);
		setTotal(filteredTodos.length);
		setCompleted(filteredTodos.filter(todo => todo.completed).length);
	};

	const completeTask = text => {
		const newTodos = todos.map(todo =>
			todo.text === text ? { ...todo, completed: !todo.completed } : todo
		);
		setTodos(newTodos);
		setDisplayedTodos(newTodos);
		setCompleted(newTodos.filter(todo => todo.completed).length);
	};

	const searchTasks = text => {
		const filteredTodos =
			text === ''
				? todos
				: todos.filter(todo =>
						todo.text.toLowerCase().includes(text.toLowerCase())
					);

		filteredTodos.length === 0 ? setLoading(true) : setLoading(false);

		setDisplayedTodos(filteredTodos);
		setCompleted(filteredTodos.filter(todo => todo.completed).length);
	};

	return {
		displayedTodos,
		completed,
		total,
		addTask,
		deleteTask,
		completeTask,
		searchTasks,
	};
}

export { useTodos };
