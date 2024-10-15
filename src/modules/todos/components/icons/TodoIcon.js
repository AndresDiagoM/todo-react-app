import React from 'react';

import {
	MdDelete,
	MdRadioButtonChecked,
	MdRadioButtonUnchecked,
} from 'react-icons/md';

const IconType = {
	check: <MdRadioButtonChecked className='checked' />,
	uncheck: <MdRadioButtonUnchecked className='unchecked' />,
	delete: <MdDelete />,
};

function TodoIcon({ type, onClick }) {
	return (
		<>
			<span className={`icon ${type}-icon`} onClick={onClick}>
				{IconType[type]}
			</span>
		</>
	);
}

export { TodoIcon };
