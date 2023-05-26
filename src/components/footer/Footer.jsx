
import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                "Looking for your next favorite movie? Look no further than MovieFinder.
                 Our easy-to-use search tool makes it simple to find the perfect movie for any occasion, 
                 whether you're in the mood for action, romance, comedy, or something in between."
                </div>
                <div className="socialIcons" >

                        <a className="icon" href="https://www.facebook.com/nadeem.baba.7556/" target="_blank" >
                        <FaFacebookF />
                        </a>
                    
                        <a className="icon" href="https://www.instagram.com/nadeem_._baba/" target="_blank" >
                        <FaInstagram />
                        </a>
                        <a className="icon" href="https://twitter.com/Mnadeem13185660" target="_blank" >
                        <FaTwitter />
                        </a>
                        <a className="icon" href="https://www.linkedin.com/in/mohammad-nadeem-b03603209/" target="_blank" >
                        <FaLinkedin />
                        </a>
                    
                    
                    
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

