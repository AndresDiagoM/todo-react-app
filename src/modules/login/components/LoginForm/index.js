import React from 'react';
import './LoginForm.css';

function LoginForm() {
	const handleSubmit = event => {
		event.preventDefault();
		// Add your login logic here
		console.log('Form submitted');
	};

	return (
		<div className='login-form'>
			<h2>Todo App</h2>
			<form onSubmit={handleSubmit} method='post'>
				<label htmlFor='username'>Username</label>
				<input type='text' id='username' name='username' />
				<label htmlFor='password'>Password</label>
				<input type='password' id='password' name='password' />
				<button type='submit'>Login</button>
			</form>
		</div>
	);
}

export { LoginForm };
