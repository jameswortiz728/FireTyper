import React, { useState, useEffect, useRef, useReducer } from 'react';
import Prompt from './../components/Prompt';
import ScoreModal from './../components/ScoreModal';
import { basicDictionary } from '../fixtures/dictionaries';
import typingTestContext from '../context/typingTestContext';
import typingTestReducer from './../reducers/typingTestReducer';

const TypingTestPage = () => {
    
    const [state, dispatch] = useReducer(typingTestReducer, { 
        wordList: [], 
        wordStateList: [], 
        currentWord: "", 
        count: 0, 
        correct: 0, 
        currentStreak: 0, 
        longestStreak: 0
    });

    const [timer, setTimer] = useState(60);
    const [pauseTimer, setPauseTimer] = useState(true);
    
    const [scoreModal, setScoreModal] = useState(false);

    const intervalRef = useRef();

    let accuracy = state.count > 0 ? Math.floor((state.correct / state.count) * 100) : 0;

    useEffect(() => {
        setTimeout(generatePrompt(), 50);
    }, []);

    const openModal = () => {
        setScoreModal(true);
    }

    const closeModal = () => {
        setScoreModal(false);
    }

    const generatePrompt = () => {
        let tempList = [];
        let tempStateList = [1];
        for(let i = 0; i < 300; i++) {
            let randomNumber = Math.floor(Math.random() * basicDictionary.length);
            let currentWord = basicDictionary[randomNumber];
            tempList.push(currentWord);
            tempStateList.push(0);
        }
        dispatch({type: "UPDATE_WORDLIST", wordList : tempList});
        dispatch({type: "UPDATE_WORDSTATELIST", wordStateList : tempStateList});
    }

    const startTimer = () => {
        let i = timer;
        intervalRef.current = setInterval(() => {
            setTimer(timer => timer-1);
            i--;
            if ( i === 0) {
                clearInterval(intervalRef.current);
                setPauseTimer(true);
                openModal(); 
            }
        }, 1000)
    }

    const handleOnChange = (e) => {
        if(pauseTimer === true) {
            startTimer();
            setPauseTimer(false);
        }
        let checkWord = e.target.value;
        dispatch({type: "UPDATE_CURRENTWORD", currentWord : checkWord });
        if(checkWord[checkWord.length-1] === " ") {     
            let word = checkWord.trim();
            let newArr = [...state.wordStateList];
            if (state.wordList[state.count] === word) {
                newArr[state.count] = 2;
                dispatch({type: "INCREMENT_CORRECT"});
                dispatch({type: "INCREMENT_CURRENTSTREAK"});
                if(state.longestStreak <= state.currentStreak) {
                    dispatch({type: "UPDATE_LONGESTSTREAK"});
                }
            } else {
                newArr[state.count] = 3;
                dispatch({type: "RESET_CURRENTSTREAK"});
            }
            newArr[state.count + 1] = 1;
            dispatch({type: "UPDATE_WORDSTATELIST", wordStateList : newArr });
            dispatch({type: "INCREMENT_COUNT"});
            dispatch({type: "RESET_CURRENTWORD"});
        }  
    }

    const handleOnReset = () => {
        closeModal();
        setPauseTimer(true);
        setTimer(60);
        dispatch({type: "RESET_ALL"});
        generatePrompt();
        clearInterval(intervalRef.current);
    }
    
    return (
        <typingTestContext.Provider value={{state, dispatch}}>
                <div id="typingTest" className="spacer">
                    <div className="content-container">
                        <div className="content-container__stats">    
                            <p className="textStats">Time left: {timer} second{timer === 1 ? "" : "s"} {pauseTimer && <span>(PAUSED)</span>}</p>
                            <p className="textStats">Correct: {state.correct} ({accuracy}%) {accuracy > 90 && "🔥"}</p>
                            <p className="textStats">Incorrect: {state.count - state.correct}</p>
                            <p className="textStats">Current streak: {state.currentStreak} {state.currentStreak >= 5 && "🔥"}</p>  
                            <p className="textStats">Longest streak: {state.longestStreak}</p>
                        </div>
                        <div className="typingtest">
                            <Prompt/>
                        </div>
                        <div className="content-container__center">
                            <button className="button button--reset" onClick={handleOnReset}>Reset</button>
                            <input
                                type="text"
                                placeholder="Begin typing here..."
                                autoFocus
                                className="text-input text-input--typingtest"
                                value={state.currentWord}
                                onChange={handleOnChange}
                            />   
                        </div>
                    </div>
                </div>
                <ScoreModal accuracy={accuracy} handleOnReset={handleOnReset} scoreModal={scoreModal}/>      
        </typingTestContext.Provider>  
    );
};

export default TypingTestPage;