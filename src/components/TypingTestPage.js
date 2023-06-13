import React, { useState, useEffect } from 'react';
import { basicDictionary } from '../fixtures/dictionaries';

const TypingTestPage = () => {
    const [prompt, setPrompt] = useState("");

    let wordList = [];

    const generatePrompt = () => {
        wordList = [];
        let finalPrompt = "";

        for(let i = 0; i < 300; i++)
        {
            let randomNumber = Math.floor(Math.random() * basicDictionary.length);
            let currentWord = basicDictionary[randomNumber];
            wordList.push(currentWord);
            finalPrompt += (currentWord + " ");
        }

        setPrompt(finalPrompt);
    }

    useEffect(() => {
        generatePrompt();
    }, []); 
    
    return (
        <div>
            <p>Firetyper</p>
            <textarea
                placeholder="Reset if you see this"
                className="textarea"
                value={prompt}
            >
            </textarea>
            <input
                type="text"
                placeholder="Begin typing here..."
                autoFocus
                className="text-input"
            />
            <button onClick={generatePrompt}>Reset</button>    
        </div>  
    );
};

export default TypingTestPage;