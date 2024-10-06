import '../assets/styles/TodoItem.css';

// new component
function TodoItem({ completed, text, completeTask, deleteTask }) {
	return (
		<li className={`todo-item ${completed ? 'completed' : 'not-completed'}`}>
			<div
				className='checkbox-container'
				onClick={() => {
					completeTask(text);
				}}
			>
				<span
					className={`circle ${completed ? 'completed-circle' : ''}`}
				></span>
			</div>
			<p>{text}</p>
			<button
				className='delete-button'
				onClick={() => {
					deleteTask(text);
				}}
			>
				Delete
			</button>
		</li>
	);
}

export { TodoItem };
