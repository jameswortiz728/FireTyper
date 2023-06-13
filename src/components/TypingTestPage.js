import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        setTimeout(generatePrompt(), 50);
    }, []);

    const openModal = () => {
        setScoreModal(true);
        setPauseTimer(true);
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
        const interval = setInterval(() => {
            setTimer(timer => timer-1);
            i--;
            if (i === 0) {
                clearInterval(interval);
                openModal(); 
            }
        }, 1000)
    }


    const handleOnChange = (e) => {
        if(pauseTimer === true)
        {
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
        setTimer(60);
    }
    
    return (
        <wordListContext.Provider value={wordList}>
            <wordStateListContext.Provider value={wordStateList}>
                <h1>Firetyper</h1>
                <div className="content-container">
                    <div className="typingtest">
                        <Prompt/>
                    </div>
                    <input
                        type="text"
                        placeholder="Begin typing here..."
                        autoFocus
                        className="text-input text-input--typingtest"
                        value={currentWord}
                        onChange={handleOnChange}
                    />
                    <button onClick={handleOnReset}>Reset</button>
                    <p>Time Left: {timer} seconds</p>
                    <p>Total words: {count}</p>
                    <p>Correct: {correct}</p>
                    <p>Incorrect: {count - correct}</p>
                    <p>Current streak: {currentStreak}</p>  
                    <p>Longest streak: {longestStreak}</p>
                </div>
                <ScoreModal score={correct} handleOnReset={handleOnReset} scoreModal={scoreModal} longestStreak={longestStreak}/>      
            </wordStateListContext.Provider>
        </wordListContext.Provider>  
    );
};

export default TypingTestPage;