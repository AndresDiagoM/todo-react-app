import './TodoItem.css';
import { CompleteIcon } from '../icons/CompleteIcon';
import { DeleteIcon } from '../icons/DeleteIcon';

// new component
function TodoItem({ completed, text, completeTask, deleteTask }) {
	return (
		<li className={`todo-item ${completed ? 'completed' : 'not-completed'}`}>
			<CompleteIcon
				completed={completed}
				onClick={() => completeTask(text)}
			/>
			<p>{text}</p>
			<DeleteIcon onClick={() => deleteTask(text)} />
		</li>
	);
}

export { TodoItem };
