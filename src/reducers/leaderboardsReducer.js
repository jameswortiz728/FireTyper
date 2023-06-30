const leaderboardsReducer = (state , action) => {
    switch (action.type) {
        case 'ADD_LEADERBOARD':
            return [ ...state, action.leaderboardItem ];
        case 'POPULATE_LEADERBOARDS':
            return action.leaderboardItems;
        default:
            throw new Error();
    }
};

export default leaderboardsReducer;