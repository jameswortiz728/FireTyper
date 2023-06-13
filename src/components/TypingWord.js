import React, { useContext } from 'react';
import wordStateListContext from '../context/wordStateListContext';

const TypingWord = ({word, id}) => {
    const wordStateList = useContext(wordStateListContext);

    let className="textdefault"
    
    if(wordStateList[id] === 1) {
        className="textdefault textDefault--current"
    } else if (wordStateList[id] === 2) {
        className="textdefault textDefault--correct"
    } else if (wordStateList[id] === 3) {
        className="textdefault textDefault--incorrect"
    }
    
    return (
        <span className={className}>{word + " "}</span>
    )
};

export default TypingWord;