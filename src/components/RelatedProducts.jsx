import React, { useRef, useState } from 'react';
import { assets } from '../assets';
import './RelatedProducts.css';

const RelatedProductCard = ({ product, isActive }) => (
    <div className={`rp-card ${isActive ? 'active' : 'inactive'}`}>
        <div className="rp-img-wrap">
            <img src={product.img} alt={product.name} className="rp-img" />
        </div>
        <div className="rp-info">
            <span className="rp-tag">MERCHANDISE</span>
            <div className="rp-title-row">
                <p className="rp-name">{product.name}</p>
                <span className="rp-price-link">
                    <span className="rp-price">{product.price}</span>
                    <img src={assets.externalLinkIcon} alt="open" className="rp-open-icon" />
                </span>
            </div>
            <p className="rp-desc">{product.desc}</p>
        </div>
    </div>
);

const RelatedProducts = () => {
    const products = assets.relatedProducts.slice(0, 2);
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    const scrollToIndex = (index) => {
        if (!scrollRef.current) return;
        const cardWidthWithGap = 190;
        scrollRef.current.scrollTo({ left: index * cardWidthWithGap, behavior: 'smooth' });
    };

    const goPrev = () => {
        setActiveIndex((prev) => {
            const next = Math.max(prev - 1, 0);
            scrollToIndex(next);
            return next;
        });
    };

    const goNext = () => {
        setActiveIndex((prev) => {
            const next = Math.min(prev + 1, products.length - 1);
            scrollToIndex(next);
            return next;
        });
    };

    return (
        <div className="related-section">
            <div className="related-header">
                <h2 className="related-title">You'll also love these</h2>
            </div>

            <div className="rp-slider-wrap">
                <div className="rp-scroll no-scrollbar" ref={scrollRef}>
                    {products.map((product, idx) => (
                        <RelatedProductCard key={idx} product={product} isActive={idx === activeIndex} />
                    ))}
                </div>

                <button className="related-arrow related-arrow-left" onClick={goPrev} aria-label="previous">
                    <img src={assets.rightChevron} alt="previous" className="related-arrow-icon related-arrow-icon-left" />
                </button>

                <button className="related-arrow related-arrow-right" onClick={goNext} aria-label="next">
                    <img src={assets.rightChevron} alt="next" className="related-arrow-icon" />
                </button>
            </div>
        </div>
    );
};

export default RelatedProducts;
