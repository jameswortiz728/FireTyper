import React from 'react';

const TypingWord = ({word, index}) => {
    console.log(index);
    return (
        <span className="textDefault" key={index}>{word + " "}</span>
    )
};

export default TypingWord;