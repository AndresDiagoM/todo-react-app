import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';

// new component
function TodoCounter() {
	const { completed, total, searchTasks } = React.useContext(TodoContext);

	const [searchValue, setSearchValue] = React.useState('');
	/*
	 * The state in react is a variable that holds the value of the component, and it can be changed by the component itself.
	 * The state is inmutable, so it can't be changed directly, it has to be changed by the method setState.
	 */

	return (
		<>
			<h1 className='todo-counter'>
				Completed {completed} to {total}
			</h1>
			<div className='search-container'>
				<input
					placeholder='Search...'
					className='search-input'
					value={searchValue}
					onChange={event => {
						// console.log(event.target.value);
						setSearchValue(event.target.value);
						searchTasks(event.target.value);
					}}
					type='text'
					aria-label='Search Todos'
				/>
				<span className='search-icon'>
					<FaSearch />
				</span>
			</div>
		</>
	);
}

export { TodoCounter };
