import React from 'react';
import reactLogo from '../img/react.svg'
import '../css/app.css'

const Header = ({ title }) => {
    return (
        <div className='col-12 bg-info p-3'>
            <div className='row'>
                <div className="col-lg-2 col-md-3 col-4 text-center">
                    <img src={reactLogo} className='img-fluid header-img' alt='react-logo' />
                </div>
                <div className='col-8'>
                    <h1 className='text-white text-center'>{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;