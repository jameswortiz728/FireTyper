import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import typingTestContext from '../context/typingTestContext';
import authContext from '../context/authContext';
import { startAddTestHistory } from '../actions/testHistory';
import moment from 'moment';

const ScoreModal = ({ accuracy, handleOnReset, scoreModal }) => {

    const {state, dispatch} = useContext(typingTestContext);
    const {userID, setUserID} = useContext(authContext);
    const [username, setUsername] = useState("");

    let isAuthenticated = userID === null ? false : true;
    const now = moment().valueOf();

    const handleOnSubmit = () => {
        if (isAuthenticated && username.match(/^[a-z\d]{3}$/i)){
            startAddTestHistory(state, userID, username, now);
            handleOnReset();
        } else if (!isAuthenticated) {
            handleOnReset();
        }
    }

    const handleOnChange = (e) => {
        e.preventDefault();
        let checkWord = e.target.value;
        if (checkWord.match(/^[a-z\d]{0,3}$/i)) {
            setUsername(e.target.value);
        }
    }

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
                { 
                    isAuthenticated &&
                    <div>
                        <p>Enter a 3-letter Username:</p>
                        <input
                            type="text"
                            placeholder="AAA"
                            autoFocus
                            className="text-input text-input--typingtest"
                            value={username}
                            onChange={handleOnChange}
                        />
                    </div>
                } 
                <button className="button button--modal" onClick={handleOnSubmit}>Reset</button>
            </Modal>
        </div> 
    )
};

export default ScoreModal;