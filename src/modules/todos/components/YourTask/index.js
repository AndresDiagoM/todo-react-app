import './YourTasks.css';

function YourTask(props) {
	return (
		<>
			<div className='your-tasks-container'>
				<h1 className='your-tasks-title'>Your Tasks</h1>
				{props.children}
			</div>
		</>
	);
}

export { YourTask };
