const leaderboardsReducer = (state, action) => {
    switch (action.type) {
      case 'POPULATE_LEADERBOARDS':
        return action.leaderboards;
      default:
        return state
    }
};
  
export { leaderboardsReducer as default };