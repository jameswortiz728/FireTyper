import React, { useState, useEffect, useRef } from 'react';
import Prompt from './../components/Prompt';
import ScoreModal from './../components/ScoreModal';
import { basicDictionary } from '../fixtures/dictionaries';
import wordListContext from '../context/wordListContext';
import wordStateListContext from '../context/wordStateListContext';

const TypingTestPage = () => {
    const [wordList, setWordList] = useState([]);
    const [wordStateList, setWordStateList]  = useState([]);
    const [currentWord, setCurrentWord] = useState("");
    const [count, setCount] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [currentStreak, setCurrentStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);
    const [timer, setTimer] = useState(60);
    const [pauseTimer, setPauseTimer] = useState(true);
    const [scoreModal, setScoreModal] = useState(false);

    const intervalRef = useRef();

    let accuracy = count > 0 ? Math.floor((correct / count) * 100) : 0;

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
        setWordList(tempList);
        setWordStateList(tempStateList);
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
        setCurrentWord(checkWord);
        if(checkWord[checkWord.length-1] === " ") {     
            let word = checkWord.trim();
            let newArr = [...wordStateList];
            if (wordList[count] === word) {
                newArr[count] = 2;
                setCorrect(correct + 1);
                setCurrentStreak(currentStreak + 1);
                if(longestStreak <= currentStreak) {
                    setLongestStreak(currentStreak + 1);
                }
            } else {
                newArr[count] = 3;
                setCurrentStreak(0);
            }
            newArr[count + 1] = 1;
            setWordStateList(newArr);
            setCount(count + 1);
            setCurrentWord("");
        }  
    }

    const handleOnReset = () => {
        closeModal();
        generatePrompt();
        setCount(0);
        setCorrect(0);
        setCurrentStreak(0);
        setLongestStreak(0);
        setCurrentWord("");
        setPauseTimer(true);
        clearInterval(intervalRef.current);
        setTimer(60);
    }
    
    return (
        <wordListContext.Provider value={wordList}>
            <wordStateListContext.Provider value={wordStateList}>
                <div id="typingtest" className="spacer">
                    <div className="content-container">
                        <div className="content-container__stats">    
                            <p className="textStats">Time left: {timer} seconds {pauseTimer && <span>(PAUSED)</span>}</p>
                            <p className="textStats">Correct: {correct} ({accuracy}%) {accuracy > 90 && "🔥"}</p>
                            <p className="textStats">Incorrect: {count - correct}</p>
                            <p className="textStats">Current streak: {currentStreak} {currentStreak >= 5 && "🔥"}</p>  
                            <p className="textStats">Longest streak: {longestStreak}</p>
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
                                value={currentWord}
                                onChange={handleOnChange}
                            />   
                        </div>
                    </div>
                </div>
                <ScoreModal score={correct} accuracy={accuracy} handleOnReset={handleOnReset} scoreModal={scoreModal} longestStreak={longestStreak}/>      
            </wordStateListContext.Provider>
        </wordListContext.Provider>  
    );
};

export default TypingTestPage;