
import React from 'react';
import { assets } from '../assets';
import './ProductDetails.css';

const StarRating = ({ rating }) => (
    <div className="stars">
        {[1, 2, 3, 4, 5].map((s) => {
            const filled = s <= Math.floor(rating);
            const half = !filled && s === Math.ceil(rating) && rating % 1 !== 0;
            return (
                <span key={s} className="star-wrap">
                    {half ? (
                        <span className="star-half">
                            <span className="star-char filled" style={{ clipPath: 'inset(0 50% 0 0)' }}>★</span>
                            <span className="star-char empty" style={{ position: 'absolute', left: 0 }}>★</span>
                        </span>
                    ) : (
                        <span className={`star-char ${filled ? 'filled' : 'empty'}`}>★</span>
                    )}
                </span>
            );
        })}
    </div>
);

const ProductDetails = () => {
    const features = [
        { icon: assets.features.protein, text: "15-GRAM PROTEIN" },
        { icon: assets.features.espresso, text: "2 ESPRESSO SHOTS*" },
        { icon: assets.features.sugar, text: "ZERO ADDED SUGAR" },
        { icon: assets.features.cal, text: "LESS THAN 100 CAL" },
    ];

    return (
        <div className="product-details">
            <div className="pd-top">
                <span className="product-category">PROTEIN COFFEE</span>
            </div>
            <h1 className="product-title">Classic Protein Cold Coffee Powder</h1>

            <div className="ratings">
                <StarRating rating={4} />
                <span className="rating-count">(4)</span>
            </div>

            <p className="description">
                Meet the new Protein-Powered Coffee. Each sachet gives you 15g of protein,
                boosted with 2 espresso shots, no added sugar, and under 97 calories.
                Add cold water or milk, shake or blend, and you're ready to go. Perfect
                for when you need that extra strength in your daily routine.
            </p>

            <div className="features-grid">
                {features.map((feat, idx) => (
                    <div key={idx} className="feature-item">
                        <div className="feature-icon-wrap">
                            <img src={feat.icon} alt={feat.text} className="feature-icon" />
                        </div>
                        <span className="feature-label">{feat.text}</span>
                    </div>
                ))}
            </div>

            <div className="faq-trigger" onClick={() => {
                document.querySelector('.faq-section')?.scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={assets.faqIcon} alt="faq" className="faq-trigger-icon" />
                <span className="faq-trigger-text">FAQ</span>
                <img src={assets.externalLinkIcon} alt="link" className="faq-external-icon" />
            </div>
        </div>
    );
};

export default ProductDetails;
