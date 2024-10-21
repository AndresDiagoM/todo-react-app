import React from 'react';
import ReactDom from 'react-dom';
import { CloseIcon } from '../icons/CloseIcon';
import './Modal.css';

function LoginModal({ children, setOpenModal }) {
    return ReactDom.createPortal(
        <div className='modal-overlay'>
            <div className='modal-container'>
                <CloseIcon className='close-icon' onClick={() => setOpenModal(false)} />
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { LoginModal };
