import React from 'react';
import './TodoLoading.css';

function TodoLoading() {
	return (
		<>
			<div className='skeleton skeleton-item'></div>
			<div className='skeleton skeleton-item'></div>
			<div className='skeleton skeleton-item'></div>
		</>
	);
}

export { TodoLoading };
