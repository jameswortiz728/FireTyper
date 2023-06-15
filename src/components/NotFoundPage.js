import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <div className="content-container">
                <div className="section">
                    <div>
                        <h1 className="page-header__big">404!</h1> 
                        <Link to="/"><button className="button">Go home</button></Link>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
};

export default NotFoundPage;