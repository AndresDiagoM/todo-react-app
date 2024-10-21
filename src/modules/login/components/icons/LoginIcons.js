import React from 'react';

import {
	MdLogin,
  MdClose,
} from 'react-icons/md';

const IconType = {
	login: <MdLogin className='login' />,
  close: <MdClose className='close' />,
};

function LoginIcons({ type, onClick }) {
	return (
		<>
			<span className={`icon ${type}-icon`} onClick={onClick}>
				{IconType[type]}
			</span>
		</>
	);
}

export { LoginIcons };
