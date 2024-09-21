import React from "react";
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="image-container">
                <img src="./Footer-img.png" alt="Footer Image" className="background-image" />
                <img src="./Footer-logo.png" alt="Logo" className="overlay-logo" />
                <p className="footer-text" >All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
