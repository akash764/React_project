
import React, { useState, useEffect } from 'react';
import { assets } from '../assets';
import './Hero.css';

const Hero = ({ selectedIndex = 0 }) => {
    const [currentImage, setCurrentImage] = useState(selectedIndex);

    // Sync image when variant selection changes
    useEffect(() => {
        setCurrentImage(selectedIndex);
    }, [selectedIndex]);

    const nextSlide = () => {
        setCurrentImage((prev) => (prev === assets.products.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentImage((prev) => (prev === 0 ? assets.products.length - 1 : prev - 1));
    };

    return (
        <div className="hero">
            {/* Carousel */}
            <div className="carousel">
                <button className="carousel-btn prev" onClick={prevSlide} aria-label="previous">
                    <img src={assets.leftArrowWhite} alt="prev" />
                </button>

                <img
                    src={assets.products[currentImage]}
                    alt="product"
                    className="carousel-img"
                    key={currentImage}
                />

                <button className="carousel-btn next" onClick={nextSlide} aria-label="next">
                    <img src={assets.rightArrowWhite} alt="next" />
                </button>

                <div className="carousel-dots">
                    {assets.products.map((_, idx) => (
                        <button
                            key={idx}
                            className={`dot ${currentImage === idx ? 'active' : ''}`}
                            onClick={() => setCurrentImage(idx)}
                            aria-label={`slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="breadcrumbs">
                <span>HOME</span>
                <span className="bc-sep">›</span>
                <span>COLD BREW COFFEE</span>
                <span className="bc-sep">›</span>
                <span className="bc-active">PROTEIN COFFEE CLASSIC</span>
            </div>
        </div>
    );
};

export default Hero;
