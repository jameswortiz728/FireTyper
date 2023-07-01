import React, {useContext, useState} from 'react';
import TestHistoryList from './../components/TestHistoryList';



const TestHistoryPage = () => {



    return (

            <div id="testHistory" className="spacer">
                <div className="content-container">
                    <div className="section">
                        <div>
                            <h1 className="page-header__big">Test History</h1>
                        </div> 
                        <div>                 
                            <TestHistoryList/>
                        </div>
                    </div>
                </div>
            </div>

    )
};

export default TestHistoryPage;