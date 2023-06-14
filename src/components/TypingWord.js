import React, { useContext } from 'react';
import wordStateListContext from '../context/wordStateListContext';

const TypingWord = ({word, id}) => {
    const wordStateList = useContext(wordStateListContext);

    let className="textdefault"
    
    switch(wordStateList[id]) {
        case 1: 
            className="textdefault textDefault--current" 
            break;
        case 2: 
            className="textdefault textDefault--correct"
            break;
        case 3: 
            className="textdefault textDefault--incorrect"
            break;
        default:
            break;
    }
    
    return (
        <span className={className}>{word + " "}</span>
    )
};

export default TypingWord;