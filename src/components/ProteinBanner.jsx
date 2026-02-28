import React from 'react';
import { assets } from '../assets';
import './ProteinBanner.css';

const ProteinBanner = () => {
    return (
        <div className="protein-banner-image-section">
            <img src={assets.bannerImage14} alt="Protein Powered Cold Coffee" className="full-width-banner-img" />

            <div className="protein-info-card">
                <span className="protein-card-label">COLD COFFEE, ONLY STRONGER!</span>
                <p className="protein-card-text">
                    Your everyday cold coffee, now stronger with 2 espresso shots and 15g whey protein!
                </p>
            </div>
        </div>
    );
};

export default ProteinBanner;
