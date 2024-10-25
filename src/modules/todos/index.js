import React from 'react';
import Confetti from 'react-confetti';
import {
	CreateTodo,
	TodoCounter,
	TodoError,
	TodoItem,
	TodoList,
	TodoLoading,
	YourTask,
} from '../todos/components';
import { TodoContext } from '../todos/TodoContext';

function TodoComponent() {
	const {
		displayedTodos,
		deleteTask,
		completeTask,
		showConfetti,
		loading,
		error,
	} = React.useContext(TodoContext);

	return (
		// This is not HTML, this is JSX, js with xml syntax
		<>
			<CreateTodo className='create-todo' />

			<YourTask>
				<TodoCounter />

				<TodoList>
					{showConfetti && <Confetti />}
					{loading && <TodoLoading />}
					{error && <TodoError error={error} />}
					{!loading &&
						displayedTodos.map(todo => (
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
		</>
	);
}

export { TodoComponent };
