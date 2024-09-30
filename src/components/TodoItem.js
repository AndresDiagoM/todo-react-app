import '../assets/styles/TodoItem.css';

// new component
function TodoItem({ completed, text, completeTask }) {
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
		</li>
	);
}

export { TodoItem };
