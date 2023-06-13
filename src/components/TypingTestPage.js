import React, { useState, useEffect } from 'react';
import Prompt from './../components/Prompt';
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

    useEffect(() => {
        setTimeout(generatePrompt(), 50);
    }, []);

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

    const handleOnChange = (e) => {
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
        generatePrompt();
        setCount(0);
        setCorrect(0);
        setCurrentStreak(0);
        setLongestStreak(0);
        setCurrentWord("");
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
                    <p>Total words: {count}</p>
                    <p>Correct: {correct}</p>
                    <p>Incorrect: {count - correct}</p>
                    <p>Current streak: {currentStreak}</p>  
                    <p>Longest streak: {longestStreak}</p>
                </div>      
            </wordStateListContext.Provider>
        </wordListContext.Provider>  
    );
};

export default TypingTestPage;