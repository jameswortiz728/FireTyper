import React from 'react';
import LeaderboardsList from './../components/LeaderboardsList';

const LeaderboardsPage = () => {

    return (
        <div id="leaderboards" className="spacer">
            <div className="content-container">
                <div className="section">
                    <div>
                        <h1 className="page-header__big">Leaderboards</h1>
                    </div> 
                    <div>                 
                        <LeaderboardsList/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LeaderboardsPage;