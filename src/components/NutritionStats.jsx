
import React from 'react';
import { assets } from '../assets';
import './NutritionStats.css';

const NutritionStats = () => {
    return (
        <div className="nutrition-section">
            {/* Stats Row */}
            <div className="nutrition-stats">
                <div className="nutrition-stat">
                    <span className="nutr-number">0g</span>
                    <span className="nutr-label">ADDED SUGAR</span>
                </div>
                <div className="nutr-separator"></div>
                <div className="nutrition-stat">
                    <span className="nutr-number">&lt;97</span>
                    <span className="nutr-label">KCAL</span>
                </div>
            </div>

            {/* Lifestyle Image */}
            <div className="lifestyle-img-wrap">
                <img src={assets.lifestyleImg} alt="Woman drinking cold coffee" className="lifestyle-img" />
            </div>

            {/* Text Card */}
            <div className="nutr-card">
                <span className="nutr-card-label">UPGRADED TO MATCH YOUR GOALS</span>
                <p className="nutr-card-text">
                    Made for the new you.{' '}
                    0g added sugar, under 97 kcal, and absolutely no compromise on flavour or health.
                </p>
            </div>
        </div>
    );
};

export default NutritionStats;
