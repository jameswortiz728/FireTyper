import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import authReducer from './reducers/auth';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import authContext from './context/authContext';

//const [authUser, dispatch] = useReducer(authReducer, []);
//dispatch({ type: 'LOGIN', user});
//dispatch({ type: 'LOGOUT', user});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        //<authContext.Provider value={{ authUser, dispatch }}>
                <AppRouter/>
        //</authContext.Provider>
);
