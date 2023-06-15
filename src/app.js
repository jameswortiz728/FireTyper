import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <AppRouter/>
);
