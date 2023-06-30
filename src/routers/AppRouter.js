import React, { useState, useEffect } from 'react';
import LandingPage from '../components/LandingPage';
import MainPage from './../components/MainPage';
import NotFoundPage from './../components/NotFoundPage';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { authGoogle } from '../firebase/firebase';
import authContext from './../context/authContext';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AuthRouter = () => {
    const [userID, setUserID] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(authGoogle, (user) => {
            if (user) {
                setUserID(user.uid);
                console.log("logged in")
                navigate('/main', { replace: true });
            } else {
                setUserID(null);
                console.log("logged out")
                navigate('/', { replace: true });
            }
        })
    }, []);

    return (
        <authContext.Provider value={{ userID, setUserID }}>
            <Routes>
                <Route exact path="/" element={<PublicRoute element={<LandingPage/>}/>}/>
                <Route exact path="/main" element={<PrivateRoute element={<MainPage/>}/>} />
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