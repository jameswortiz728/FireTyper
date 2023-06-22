import React, { useContext } from 'react';
import typingTestContext from '../context/typingTestContext';

const TypingWord = ({word, id}) => {
    const {state, dispatch} = useContext(typingTestContext);

    let className="textDefault"
    
    switch(state.wordStateList[id]) {
        case 1: 
            className="textDefault textDefault--current" 
            break;
        case 2: 
            className="textDefault textDefault--correct"
            break;
        case 3: 
            className="textDefault textDefault--incorrect"
            break;
        default:
            break;
    }
    
    return (
        <span className={className}>{word + " "}</span>
    )
};

export default TypingWord;