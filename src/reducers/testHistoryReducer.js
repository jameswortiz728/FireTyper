const testHistoryReducer = (state , action) => {
    switch (action.type) {
        case 'ADD_TESTHISTORY':
            return [ ...state, action.testHistoryItem ];
        case 'POPULATE_TESTHISTORY':
            return action.testHistoryItems;
        default:
            throw new Error();
    }
};

export default testHistoryReducer;