import React from 'react';
import './CloseIcon.css';
import { LoginIcons } from './LoginIcons';

function CloseIcon({ onClick }) {
	return <LoginIcons type='close' onClick={onClick} />;
}

export { CloseIcon };