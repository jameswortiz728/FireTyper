import React, { useState, useEffect } from 'react';
import LoginPage from './../components/LoginPage';
import TypingTestPage from './../components/TypingTestPage';
import NotFoundPage from './../components/NotFoundPage';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { firebase } from './../firebase/firebase';
import authContext from './../context/authContext';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AuthRouter = () => {
    const [userID, setUserID] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUserID(user.uid);
                console.log("logged in")
                navigate('/typingtest');
            } else {
                setUserID(null);
                console.log("logged out")
                navigate('/');
            }
        })
    }, []);

    return (
        <authContext.Provider value={{ userID, setUserID }}>
            <Routes>
                <Route exact path="/" element={<PublicRoute element={<LoginPage/>}/>}/>
                <Route exact path="/typingtest" element={<PrivateRoute element={<TypingTestPage/>}/>} />
                <Route path='*' element={<PublicRoute element={<NotFoundPage/>}/>} />
            </Routes>
         </authContext.Provider>
    )
};

const AppRouter = () => {
    return (
        <BrowserRouter>
            <AuthRouter/>
        </BrowserRouter>
    )
}

export default AppRouter;