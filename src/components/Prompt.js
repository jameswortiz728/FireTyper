import React, { useContext } from 'react';
import TypingWord from './../components/TypingWord';
import wordListContext from '../context/wordListContext';

const Prompt = () => {
    const  wordList = useContext(wordListContext);

    return (
        wordList.map((word, index) => <TypingWord word={word} key={index}/>)
    )
}

export default Prompt;