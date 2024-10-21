import React from 'react';
import { TodoProvider } from '../todos/TodoContext';
import './App.css';
import { AppUI } from './AppUI';

// This is a functional component
function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}

export default App;
/**
 * AppUi and all his children components can access the context values
 */
