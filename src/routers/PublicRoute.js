import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import authContext from './../context/authContext';


const PublicRoute = ({ element }) => {
    const userID = useContext(authContext);

    let isAuthenticated = !!userID;

    return (
        isAuthenticated ? <div>{element}</div> :  <Navigate to="/"/>
    );
};

export default PublicRoute;