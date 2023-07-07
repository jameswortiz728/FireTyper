import React, { useContext, useEffect, useState } from 'react';
import TestHistoryItem from './../components/TestHistoryItem';
import authContext from '../context/authContext';
import { startSetTestHistory } from '../actions/testHistory';

const TestHistoryList = () => {

    const {userID, setUserID} = useContext(authContext);
    const [testHistory, setTestHistory] = useState(null);
    const [loading, setLoading] = useState(true);
     
    async function getTestHistory() {
        await startSetTestHistory(userID, setTestHistory, setLoading, loading);
    }

    useEffect(() => {
        getTestHistory()
    }, [loading])
    
    if(testHistory) {
        let testHistoryMap = testHistory.slice(0, 5);

        return testHistoryMap.map((testHistoryItem, index)=> (
            <TestHistoryItem key={index} testHistoryItem={testHistoryItem}/>
        ))
    }
    
    return <p>No previous attempts.</p>
};

export { TestHistoryList as default };