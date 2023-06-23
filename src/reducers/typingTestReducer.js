const typingTestReducer = (state , action) => {
    switch (action.type) {
        case 'UPDATE_WORDLIST':
            return { ...state, wordList: action.wordList  };
        case 'UPDATE_WORDSTATELIST':
            return { ...state, wordStateList: action.wordStateList };
        case 'UPDATE_CURRENTWORD':
            return { ...state, currentWord: action.currentWord };
        case 'RESET_CURRENTWORD':
            return { ...state, currentWord: "" };
        case 'INCREMENT_COUNT':
            return { ...state, count: state.count + 1 };
        case 'INCREMENT_CORRECT':
            return { ...state, correct: state.correct + 1 };
        case 'INCREMENT_CURRENTSTREAK':
            return { ...state, currentStreak: state.currentStreak + 1 };
        case 'RESET_CURRENTSTREAK':
            return { ...state, currentStreak: 0 };
        case 'UPDATE_LONGESTSTREAK':
            return { ...state, longestStreak: state.currentStreak };
        case 'RESET_ALL':
            return {
                wordList: [], 
                wordStateList: [], 
                currentWord: "", 
                count: 0, 
                correct: 0, 
                currentStreak: 0, 
                longestStreak: 0
            };
        default:
            throw new Error();
    }
};

export default typingTestReducer;