
import React, { useState } from 'react';
import { assets } from '../assets';
import './VariantSelector.css';

const VariantSelector = ({ onVariantChange }) => {
    const [selected, setSelected] = useState(0);

    const handleSelect = (idx) => {
        setSelected(idx);
        onVariantChange && onVariantChange(idx);
    };

    return (
        <div className="variant-selector">
            <div className="variant-grid">
                {assets.variants.map((v, idx) => (
                    <div
                        key={idx}
                        className={`variant-card ${selected === idx ? 'selected' : ''}`}
                        onClick={() => handleSelect(idx)}
                    >
                        {v.bestseller && selected === idx && (
                            <div className="bestseller-badge">BESTSELLER</div>
                        )}
                        <div className="variant-img-wrapper">
                            <img src={v.img} alt={v.name} />
                            {selected === idx && (
                                <div className="check-badge">✓</div>
                            )}
                        </div>
                        <span className="variant-name">{v.label || v.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VariantSelector;
