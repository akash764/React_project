import React, { useState } from 'react';
import { assets } from '../assets';
import ReviewCard from './ReviewCard';
import './ReviewsSection.css';

const ReviewsSection = () => {
    const rating = 4.5;
    const totalReviews = 4;
    const [showFilters, setShowFilters] = useState(true);

    const starDistribution = [
        { stars: 5, count: 2 },
        { stars: 4, count: 2 },
        { stars: 3, count: 0 },
        { stars: 2, count: 0 },
        { stars: 1, count: 0 },
    ];

    const reviews = [
        {
            name: 'Yash g',
            initials: 'YG',
            rating: 4,
            title: 'It has a hint of cinnamon taste..',
            text: "It has a hint of cinnamon taste to it which I personally don't like apart from it tastes and feels awesome.",
            date: '15 days ago',
            helpfulYes: 1,
            helpfulNo: 0,
            variant: 'Review left on: Protein Coffee Powder - Hazelnut',
            verifiedBuyer: true,
        },
        {
            name: 'SHAEEB -',
            initials: 'S',
            rating: 5,
            title: 'Perfect blend of coffee & Protein',
            text: 'Love this product, Smooth flavour, good protein content and keep me energized throughout the day',
            date: '15 days ago',
            helpfulYes: 4,
            helpfulNo: 6,
            variant: 'Review left on: Assorted Protein Coffee Powder',
            verifiedBuyer: true,
        },
        {
            name: 'Ahbar s',
            initials: 'AS',
            rating: 4,
            title: 'Good but too pricey',
            text: "Good taste and protein quantity, two espresso shots are probably a bit much and a bit costly too, if you can bring down the price to like 70-80 rs per sachet it would be great but as of now i don't think its a good everyday option",
            date: '25 days ago',
            helpfulYes: 5,
            helpfulNo: 2,
            variant: 'Review left on: Assorted Protein Coffee Powder',
            verifiedBuyer: true,
        },
        {
            name: 'zxcxz',
            initials: 'Z',
            rating: 4,
            title: 'zxczxc',
            text: 'xzczxc',
            date: '29 days ago',
            helpfulYes: 0,
            helpfulNo: 8,
            variant: '',
            verifiedBuyer: false,
        },
    ];

    return (
        <div className="reviews-section">
            <div className="reviews-inner">
                <h2 className="reviews-title">Customer Reviews</h2>

                <div className="reviews-summary">
                    <div className="summary-left">
                        <span className="big-rating">{rating}</span>
                        <div className="summary-stars">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <span key={s} className={`star-char ${s <= Math.round(rating) ? 'filled' : 'empty'}`}>
                                    {'\u2605'}
                                </span>
                            ))}
                        </div>
                        <span className="review-count">{totalReviews} reviews</span>
                    </div>

                    <div className="summary-bars">
                        {starDistribution.map((item) => (
                            <div key={item.stars} className="bar-row">
                                <span className="bar-label">{item.stars}</span>
                                <div className="bar-track">
                                    <div className="bar-fill" style={{ width: `${(item.count / totalReviews) * 100}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="write-review-btn">WRITE A REVIEW</button>

                <button className="sort-filter-toggle" onClick={() => setShowFilters((v) => !v)}>
                    <span>Sort & Filter</span>
                    <img src={assets.faqChevronDown} alt="toggle filters" className={`sort-filter-icon ${showFilters ? 'up' : ''}`} />
                </button>

                {showFilters && (
                    <div className="filter-wrap">
                        <div className="filter-item">
                            <label className="filter-label">Sort by</label>
                            <select className="filter-select">
                                <option>Most recent</option>
                                <option>Highest rated</option>
                                <option>Lowest rated</option>
                            </select>
                        </div>
                        <div className="filter-item">
                            <label className="filter-label">Rating</label>
                            <select className="filter-select">
                                <option>All</option>
                                <option>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                )}

                <div className="with-media-row">
                    <span className="media-tick-box" aria-hidden="true">
                        <span className="media-tick-mark"></span>
                    </span>
                    <p className="with-media">With media</p>
                </div>

                <div className="reviews-list">
                    {reviews.map((review, idx) => (
                        <ReviewCard key={idx} review={review} />
                    ))}
                </div>

                <p className="reviews-foot">Reviewed on <strong>Junip.</strong></p>
            </div>
        </div>
    );
};

export default ReviewsSection;
