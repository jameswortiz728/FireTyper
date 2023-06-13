import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const RedirectModal = ({ open, closeModal, url }) => {

    return (
        <div>
            <Modal
                isOpen={open}
                contentLabel="Project redirect"
                closeTimeoutMS={200}
                className="modal"
            >
                <h3 className="modal__title">You will be redirected</h3>
                <p className="modal__body">Are you sure?</p>
                <Link target="_blank" to={url}><button className="button button--modalgo" onClick={closeModal}>Let's go</button></Link>
                <button className="button button--secondary" onClick={closeModal}>Cancel</button>
            </Modal>
        </div> 
    )
};

export default RedirectModal;