import React from 'react';
import MainPage from './../components/MainPage';
import ProjectItemPage from './../components/ProjectItemPage';
import NotFoundPage from './../components/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './../components/Header';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Routes>
                    <Route exact path="/" element = {<MainPage/>}/>
                    <Route exact path="/projects/:title" element={<ProjectItemPage/>} />
                    <Route path='*' element={<NotFoundPage/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
};

export default AppRouter;