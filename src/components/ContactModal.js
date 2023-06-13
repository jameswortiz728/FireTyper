import React from 'react';
import Modal from 'react-modal';

const ContactModal = ({ open, closeModal }) => {

    return (
        <div>
            <Modal
                isOpen={open}
                contentLabel="Website redirect"
                closeTimeoutMS={200}
                className="modal"
            >
                <h3 className="modal__title">Thanks for your submission!</h3>
                <p className="modal__body">An email has been sent to James@jwortiz.dev</p>
                <button className="button button--contactme" onClick={closeModal}>Close</button>
            </Modal>
        </div> 
    )
};

export default ContactModal;