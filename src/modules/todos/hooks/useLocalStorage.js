import React from 'react';

function useLocalStorage(key, initialValue) {
	// Get from local storage then
	const [items, setItems] = React.useState(() => {
    const storedItems = localStorage.getItem(key);
    return storedItems ? JSON.parse(storedItems) : initialValue;
  });

	// Update localStorage whenever items state changes. It saves the initial value in localStorage
	React.useEffect(() => {
		localStorage.setItem(key, JSON.stringify(items));
	}, [items, key]);

	return [items, setItems];
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
