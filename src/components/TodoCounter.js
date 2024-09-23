import '../assets/styles/TodoCounter.css';

// new component
function TodoCounter(props) {
	return (
		<>
			<h1 className='todo-counter'>
				Completed {props.completed} to {props.total}
			</h1>
			<div className='search-container'>
				<input placeholder='Search...' className='search-input' />
				<span className='search-icon'>&#128269;</span>
			</div>
		</>
	);
}

export { TodoCounter };
