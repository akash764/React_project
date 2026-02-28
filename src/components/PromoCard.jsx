
import React from 'react';
import { assets } from '../assets';
import './PromoCard.css';

const PromoCard = () => {
    return (
        <div className="promo-card-section">
            <div className="promo-card">
                <div className="promo-img-wrap">
                    <img src={assets.matchaImg} alt="Matcha Latte" className="promo-img" />
                </div>
                <div className="promo-content">
                    <div className="promo-header">
                        <span className="promo-label">ALSO SEE: MATCHA LATTE PREMIX</span>
                        <span className="promo-arrow">↗</span>
                    </div>
                    <p className="promo-desc">
                        Make Matcha Latte in seconds! Just add hot water for a creamy latte.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PromoCard;
