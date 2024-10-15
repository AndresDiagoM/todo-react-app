import React from 'react';
import '../../assets/styles/icon/DeleteIcon.css';
import { TodoIcon } from './TodoIcon';

function DeleteIcon({ onClick }) {
	return (
		<>
			<TodoIcon type='delete' onClick={onClick} />
		</>
	);
}

export { DeleteIcon };
