import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import authContext from '../context/authContext';

const AuthRoute = ({ element }) => {
    const userID = useContext(authContext);

    let isAuthenticated = userID === null ? false : true;

    return (
        isAuthenticated ? <div>{element}</div> : <Navigate to="/" replace/>
    );

};

export default AuthRoute;