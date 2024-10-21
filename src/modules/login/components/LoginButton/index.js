import React from 'react';
import { LoginIcon } from '../icons/LoginIcon';
import './LoginButton.css';

function LoginButton({ openModal, setOpenModal }) {
	return (
		<button className='login-button' onClick={() => setOpenModal(!openModal)}>
			<LoginIcon />
		</button>
	);
}

export { LoginButton };
