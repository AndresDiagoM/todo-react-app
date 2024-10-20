import React from 'react';

function useLocalStorage(localStorageKey, initialValue) {
	const [items, setItems] = React.useState(initialValue);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);

	// Read LocalStorage when the component mounts
	React.useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItems = localStorage.getItem(localStorageKey);
				if (localStorageItems) {
					setItems(JSON.parse(localStorageItems));
				}
			} catch (err) {
				setError(true);
			} finally {
				setLoading(false);
			}
			console.log('Leer de localStorage');
		}, 2000);
	}, []);

	// Update localStorage whenever items state changes. It saves the initial value in localStorage
	React.useEffect(() => {
		if (JSON.stringify(items) !== JSON.stringify(initialValue)) {
			try {
				localStorage.setItem(localStorageKey, JSON.stringify(items));
				console.log('Guardar en localStorage');
			} catch (err) {
				setError(true);
			}
		}
	}, [items]);

	return { items, setItems, loading, error, setError };
}

export { useLocalStorage };
/*
*De esta forma se accede a localStorage, pero se accede cada vez que se renderiza el componente, entonces mejor no hacer esto. ❌
const storedTodos = JSON.parse(localStorage.getItem('todos_v1')) || [];
if (storedTodos.length === 0) {
	console.log('No tasks found in localStorage');
}

*define todos as useState to keep track of the state
const [todos, setTodos] = React.useState(() => {
	*De esta forma, se accede a localStorage solo una vez, cuando se monta el componente. ✅
	const storedTodos = localStorage.getItem('todos_v1');
	if (storedTodos) return JSON.parse(storedTodos);
	console.log('No tasks found in localStorage');
	return [];
});
const [todos, setTodos] = React.useState(storedTodos);

*Update localStorage whenever todos state changes
React.useEffect(() => {
	localStorage.setItem('todos_v1', JSON.stringify(todos));
}, [todos]);
*useEffect is a hook that allows you to perform side effects in your function components
*useEffect detects changes in the dependencies array and runs the function whenever a change is detected
*/

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
