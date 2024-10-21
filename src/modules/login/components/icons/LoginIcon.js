import React from 'react';
import './LoginIcon.css';
import { LoginIcons } from './LoginIcons';

function LoginIcon({ onClick }) {
	return <LoginIcons type='login' onClick={onClick} />;
}

export { LoginIcon };
