import React from 'react';
import LoginPage from './../components/LoginPage';
import TypingTestPage from './../components/TypingTestPage';
import NotFoundPage from './../components/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" element = {<LoginPage/>}/>
                    <Route exact path="/typingtest" element={<TypingTestPage/>} />
                    <Route path='*' element={<NotFoundPage/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
};

export default AppRouter;