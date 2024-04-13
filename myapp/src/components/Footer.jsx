import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div>
                <h3 className="contact">CONTACT US</h3>
                <div >
                    <div className="contact-add">
                        <p>Address: Medchal, Hyderabad, India.</p>
                        <p>Phone: +91 72878 83095</p>
                    </div>
                    <div className="contact-details">
                        <a className="twitter" href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                        </a>
                        <a className="instagram" href="https://www.instagram.com/example/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                        </a>
                        <a className="linkedin" href="https://www.linkedin.com/in/example/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        </a>
                        <a className="email" href="mailto:example@example.com">
                        <FaEnvelope />
                        </a>
                    </div>
                    
                </div>
                <div className="end">
                    <h4 className="endd">We are here, to hear.</h4>
                    <h4 className="endd">© 2023 by BACHELORS. Proudly created with Wix.com</h4>
                </div>
            </div>
        </footer>
    );
}
export default Footer;