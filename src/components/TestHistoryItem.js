import React from 'react';
import moment from 'moment';

const TestHistoryItem = ({ testHistoryItem }) => {

    let accuracy = testHistoryItem.count > 0 ? Math.floor((testHistoryItem.correct / testHistoryItem.count) * 100) : 0;

    return (
        <div className="list-item">
            <div>
                <h3 className="list-item__title">{testHistoryItem.username}</h3>
                <span className="list-item__sub-title">{moment(testHistoryItem.createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            <div>
                <span className="list-item__data">{testHistoryItem.correct} WPM</span>
                <span className="list-item__data">Accuracy: {accuracy}%</span>
                <span className="list-item__data">Longest Streak: {testHistoryItem.longestStreak}</span>
            </div>  
        </div>
    )
};

export { TestHistoryItem as default };