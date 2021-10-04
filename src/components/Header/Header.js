import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const myStyle = {
        fontSize: '2.9rem',
        display: 'block',
        color: '#e64381'
    }

    return (
        <header>
            <div id="menu" className="fas fa-bars"></div>

            <div className="logo"><i className="fas fa-user-graduate"></i>LOGO</div>

            <nav className="navbar">
                <ul>
                    <li><NavLink activeStyle={myStyle} to="/home">Home</NavLink></li>
                    <li><NavLink activeStyle={myStyle} to="/about">About</NavLink></li>
                    <li><NavLink activeStyle={myStyle} to="/courses">Courses</NavLink></li>
                    <li><NavLink activeStyle={myStyle} to="/teachers">Teachers</NavLink></li>
                </ul>
            </nav>

            <div id="login" className="fas fa-user-circle"></div>
        </header>
    );
};

export default Header;