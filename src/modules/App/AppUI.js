import React from 'react';
import { LoginButton } from '../login/components/LoginButton';
import { LoginForm } from '../login/components/LoginForm';
import { LoginModal } from '../login/components/Modal';
import { TodoComponent } from '../todos';

function AppUI() {
	const [openModal, setOpenModal] = React.useState(false);

	return (
		// This is not HTML, this is JSX, js with xml syntax
		<div className='app-container'>
			<TodoComponent />

			<LoginButton openModal={openModal} setOpenModal={setOpenModal} />

			{openModal && (
				<LoginModal setOpenModal={setOpenModal}>
					<LoginForm />
				</LoginModal>
			)}
		</div>
	);
}

export { AppUI };
