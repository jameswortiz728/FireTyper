import React from 'react';

const LeaderboardListItem = ({ leaderboardItem }) => {

    return (
        <div>
            <h3 className="text__coloritemheader">{leaderboardItem.name}</h3>
            <p>{leaderboardItem.correct} WPM</p>
        </div>
    )
};

export { LeaderboardListItem as default };