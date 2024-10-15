import React from 'react';
import Lottie from 'react-lottie';
import animationData from './lotties/animation2.json';
import './CreateTodo.css';

// new component
function CreateTodo({ addTask }) {
	const [newTask, setNewTask] = React.useState('');

	const handleAddTask = () => {
		addTask(newTask);
		setNewTask('');
	};

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return (
		<>
			<div className='create-todo-container'>
				<h1>Create new task</h1>
				<p>Task Name</p>
				<input
					placeholder='Launch rocket to the moon'
					value={newTask}
					onChange={e => setNewTask(e.target.value)}
				/>
				<button onClick={handleAddTask}>Create</button>
				<div>
					<Lottie options={defaultOptions} height={400} width={400} />
				</div>
			</div>
		</>
	);
}

export { CreateTodo };
// named export, to avoid importing with different names
