import React from 'react';
import '../assets/styles/TodoCounter.css';

// new component
function TodoCounter(props) {
	const [searchValue, setSearchValue] = React.useState('');
	/*
	 * The state in react is a variable that holds the value of the component, and it can be changed by the component itself.
	 * The state is inmutable, so it can't be changed directly, it has to be changed by the method setState.
	 */

	console.log('Los usuarios han completado: ', searchValue);
  // console.log is executed every time the component is rendered

	return (
		<>
			<h1 className='todo-counter'>
				Completed {props.completed} to {props.total}
			</h1>
			<div className='search-container'>
				<input
					placeholder='Search...'
					className='search-input'
					value={searchValue}
					onChange={event => {
						// console.log(event.target.value);
						setSearchValue(event.target.value);
					}}
					type='text'
					aria-label='Search Todos'
				/>
				<span className='search-icon'>&#128269;</span>
			</div>
		</>
	);
}

export { TodoCounter };
