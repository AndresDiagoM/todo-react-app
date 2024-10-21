import React from 'react';
import Confetti from 'react-confetti';
import { LoginButton } from '../login/components/LoginButton';
import { LoginModal } from '../login/components/Modal';
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

function AppUI() {
	const {
		displayedTodos,
		deleteTask,
		completeTask,
		showConfetti,
		loading,
		error,
		openModal,
		setOpenModal,
	} = React.useContext(TodoContext);

	return (
		// This is not HTML, this is JSX, js with xml syntax
		<div className='app-container'>
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

			<LoginButton openModal={openModal} setOpenModal={setOpenModal} />

			{openModal && (
				<LoginModal setOpenModal={setOpenModal}>
					{' '}
					This is the modal content{' '}
				</LoginModal>
			)}
		</div>
	);
}

export { AppUI };
