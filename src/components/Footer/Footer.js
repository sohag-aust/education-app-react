import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="box-container">

                <div className="box">
                    <h3>branch locations</h3>
                    <p>India</p>
                    <p>USA</p>
                    <p>france</p>
                    <p>russia</p>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <p>home</p>
                    <p>about</p>
                    <p>course</p>
                    <p>teachers</p>
                    <p>contact</p>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <p> <i className="fas fa-map-marker-alt"></i> Agargaon, Bangladesh 1207. </p>
                    <p> <i className="fas fa-envelope"></i> asraful@gmail.com </p>
                    <p> <i className="fas fa-phone"></i> +123-456-7890 </p>
                </div>

            </div>

            <h1 className="credit">created by <span>&copy; Md.Ashraful Islam Shohag</span> </h1>
        </div>
    );
};

export default Footer;