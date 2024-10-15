import React from 'react';
import '../../assets/styles/icon/CompleteIcon.css';
import { TodoIcon } from './TodoIcon';

function CompleteIcon({ completed, onClick }) {
	return (
		<>
			{completed ? (
				<TodoIcon type='check' onClick={onClick} />
			) : (
				<TodoIcon type='uncheck' onClick={onClick} />
			)}
		</>
	);
}

export { CompleteIcon };
