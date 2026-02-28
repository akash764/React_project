import React from 'react';
import { assets } from '../assets';
import './FlavorSection.css';

const FlavorSection = () => {
    return (
        <div className="flavor-section">
            <div className="flavor-dark">
                <h2 className="flavor-heading">3 FLAVOURS</h2>

                <div className="flavor-packs">
                    {assets.flavours.map((img, idx) => (
                        <div key={idx} className="flavor-pack" style={{ zIndex: idx === 1 ? 3 : idx === 0 ? 2 : 1 }}>
                            <img src={img} alt={`flavour-${idx}`} className="flavor-pack-img" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flavor-card">
                <span className="flavor-card-label">COMES IN 3 DELICIOUS FLAVOURS !</span>
                <p className="flavor-card-text">
                    Switch between our Classic, Hazelnut, and Vanilla Protein Cold Coffee and keep your taste buds excited.
                </p>
            </div>
        </div>
    );
};

export default FlavorSection;
