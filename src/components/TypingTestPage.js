import React, { useState, useEffect } from 'react';
import { basicDictionary } from '../fixtures/dictionaries';

const TypingTestPage = () => {
    const [prompt, setPrompt] = useState("");
    const [wordList, setWordList] = useState([]);
    const [currentWord, setCurrentword] = useState("");
    const [count, setCount] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [currentStreak, setCurrentStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);

    useEffect(() => {
        setTimeout(generatePrompt(), 50);
    }, []);

    const generatePrompt = () => {
        setWordList([]);
        let finalPrompt = "";
        let tempList = [];

        for(let i = 0; i < 300; i++)
        {
            let randomNumber = Math.floor(Math.random() * basicDictionary.length);
            let currentWord = basicDictionary[randomNumber];
            tempList.push(currentWord);
            finalPrompt += (currentWord + " ");
        }
        setWordList(tempList);
        setPrompt(finalPrompt);
    }

    const handleOnChange = (e) => {
        let checkWord = e.target.value;
        setCurrentword(checkWord);
        if(checkWord[checkWord.length-1] === " ") {     
            let word = checkWord.trim();
            if (wordList[count] === word) {
                setCorrect(correct + 1);
                setCurrentStreak(currentStreak + 1);
                if(longestStreak <= currentStreak) {
                    setLongestStreak(currentStreak + 1);
                }
            } else {
                setCurrentStreak(0);
            }
            setCount(count + 1);
            setCurrentword("");
        }  
    }

    const handleOnReset = () => {
        generatePrompt();
        setCount(0);
        setCorrect(0);
        setCurrentStreak(0);
        setLongestStreak(0);
        setCurrentword("");
    }
    
    return (
        <div>
            <h1>Firetyper</h1>
            <div className="content-container">
                <div className="typingtest">
                    {prompt}
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
        </div>  
    );
};

export default TypingTestPage;