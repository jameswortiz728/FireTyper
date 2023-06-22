import React, { useContext } from 'react';
import TypingWord from './../components/TypingWord';
import typingTestContext from '../context/typingTestContext';

const Prompt = () => {
    const {state, dispatch} = useContext(typingTestContext);

    return (
        state.wordList.map((word, index) => <TypingWord word={word} key={index} id={index}/>)
    )
}

export default Prompt;