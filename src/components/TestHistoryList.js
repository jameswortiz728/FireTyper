import React, { useContext, useEffect, useState } from 'react';
import TestHistoryItem from './../components/TestHistoryItem';
import authContext from '../context/authContext';
import { startSetTestHistory } from '../actions/testHistory';

const TestHistoryList = () => {

    const {userID, setUserID} = useContext(authContext);
    const [testHistory, setTestHistory] = useState(null);
    const [loading, setLoading] = useState(true);
     
    async function getTestHistory() {
        await startSetTestHistory(userID, setTestHistory, setLoading);
    }

    useEffect(() => {
        getTestHistory()
    }, [loading])
    
    
    if(testHistory) {
        return testHistory.map((testHistoryItem, index)=> (
            <TestHistoryItem key={index} testHistoryItem={testHistoryItem}/>
        ))
    }
    
    return <p>No data to show.</p>
};

export { TestHistoryList as default };