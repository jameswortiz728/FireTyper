import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
        <AppRouter/>
);