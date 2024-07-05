import React from 'react';
import './RegisterButton.css';

const RegisterButton = ({ style }) => {
    return (
        <button className="register-button ms-auto" style={style}>
            Register your interest
        </button>
    );
};

export default RegisterButton;
