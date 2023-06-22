import React from 'react';
import LeaderboardsItem from './../components/LeaderboardsItem';

const LeaderboardsList = (leaderboards) => {

    return leaderboards.map((leaderboardItem, index)=> (
        <LeaderboardsItem key={index} leaderboardItem={leaderboardItem}/>
    ))
};

export { LeaderboardsList as default };