import React from 'react';
import Modal from 'react-modal';

const ContactModal = ({ score, accuracy, handleOnReset, scoreModal, longestStreak }) => {

    return (
        <div>
            <Modal
                isOpen={scoreModal}
                contentLabel="Score"
                closeTimeoutMS={200}
                className="modal"
            >
                <h3 className="modal__title">Time is up!</h3>
                <p className="modal__body">Your WPM: {score} WPM</p>
                <p className="modal__body">Accuracy: {accuracy}%</p>
                <p className="modal__body">Best streak: {longestStreak} word{longestStreak === 1 ? "" : "s"}</p>
                <button className="button button--modal" onClick={handleOnReset}>Reset</button>
            </Modal>
        </div> 
    )
};

export default ContactModal;