import React, { useContext } from 'react';
import Modal from 'react-modal';
import typingTestContext from '../context/typingTestContext';

const ContactModal = ({ accuracy, handleOnReset, scoreModal }) => {

    const {state, dispatch} = useContext(typingTestContext);

    return (
        <div>
            <Modal
                isOpen={scoreModal}
                contentLabel="Score"
                closeTimeoutMS={200}
                className="modal"
            >
                <h3 className="modal__title">Time is up!</h3>
                <p className="modal__body">Your WPM: {state.correct} WPM</p>
                <p className="modal__body">Accuracy: {accuracy}% {accuracy > 90 && "🔥"}</p>
                <p className="modal__body">Best streak: {state.longestStreak} word{state.longestStreak === 1 ? "" : "s"}</p>
                <button className="button button--modal" onClick={handleOnReset}>Reset</button>
            </Modal>
        </div> 
    )
};

export default ContactModal;