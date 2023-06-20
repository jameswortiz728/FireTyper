import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import authContext from './../context/authContext';
import Header from '../components/Header';

const PrivateRoute = ({ element }) => {
    const userID = useContext(authContext);

    let isAuthenticated = !!userID;

    return (
        isAuthenticated ? <div><Header/>{element}</div> : <Navigate to="/" replace/>
    );

};

export default PrivateRoute;