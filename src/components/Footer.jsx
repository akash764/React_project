import React from 'react';
import { assets } from '../assets';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-owls" aria-hidden="true">
                    <img src={assets.footerOwls} alt="owls" className="footer-owls-img" />
                </div>

                <p className="footer-story">
                    Our journey started with three friends with a shared vision. It was simple- introduce people to
                    <em> real good coffee.</em> Today, we're making high-quality, freshly roasted coffee accessible to everyone with our exclusive products.
                </p>

                <div className="footer-newsletter" role="group" aria-label="Email newsletter signup">
                    <input className="footer-input" type="email" placeholder="Email Newsletter" />
                    <button className="footer-submit" aria-label="submit">
                        <img src={assets.rightChevron} alt="arrow" className="footer-submit-icon" style={{ width: 16, height: 16, filter: "brightness(0) invert(1)", display: "block" }} />
                    </button>
                </div>

                <div className="footer-socials">
                    <a href="#" className="social-icon" aria-label="instagram"><img src={assets.socials.instagram} alt="Instagram" /></a>
                    <a href="#" className="social-icon" aria-label="twitter"><img src={assets.socials.twitter} alt="Twitter" /></a>
                    <a href="#" className="social-icon" aria-label="mail"><img src={assets.socials.mail} alt="Email" /></a>
                    <a href="#" className="social-icon" aria-label="facebook"><img src={assets.socials.facebook} alt="Facebook" /></a>
                    <a href="#" className="social-icon" aria-label="youtube"><img src={assets.socials.youtube} alt="YouTube" /></a>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-copy">{String.fromCodePoint(0x00A9)} 2026 Sleepy Owl Coffee</p>
                <div className="footer-legal">
                    <a href="#">Privacy</a>
                    <span className="footer-legal-sep" aria-hidden="true">{String.fromCodePoint(0x00B7)}</span>
                    <a href="#">Terms of Use</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;













