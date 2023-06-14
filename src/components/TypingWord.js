import React, { useContext } from 'react';
import wordStateListContext from '../context/wordStateListContext';

const TypingWord = ({word, id}) => {
    const wordStateList = useContext(wordStateListContext);

    let className="textDefault"
    
    switch(wordStateList[id]) {
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