import React, { useState } from 'react';
import { assets } from '../assets';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
    const [vote, setVote] = useState(null);

    return (
        <div className="review-card">
            <div className="rc-header">
                <div className="rc-avatar">
                    <span>{review.initials || review.name.charAt(0)}</span>
                </div>

                <div className="rc-user">
                    <p className="rc-name">{review.name}</p>

                    {review.verifiedBuyer !== false && (
                        <div className="rc-verified-row">
                            <span className="rc-verified-badge-icon" aria-hidden="true">
                                <img src={assets.reviewTickBlue} alt="verified" className="rc-verified-icon" />
                            </span>
                            <span className="verified-badge">Verified Buyer</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="rc-recommend-row">
                <img src={assets.reviewTickBlue} alt="recommended" className="rc-recommend-icon" />
                <span className="rc-recommend">I recommend this product</span>
            </div>

            <div className="rc-stars-row">
                <div className="rc-stars">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className={`star-char ${s <= review.rating ? 'filled' : 'empty'}`}>
                            {'\u2605'}
                        </span>
                    ))}
                </div>
                <span className="rc-date">{review.date}</span>
            </div>

            <p className="rc-title">{review.title}</p>
            <p className="rc-text">{review.text}</p>
            {review.variant && <p className="rc-variant">{review.variant}</p>}

            <div className="rc-helpful">
                <span className="helpful-label">Was this review helpful?</span>
                <button type="button" className={`helpful-btn ${vote === 'like' ? 'active' : ''}`} onClick={() => setVote('like')}>
                    <img src={assets.likeIcon} alt="like" className="helpful-icon" />
                    <span className="helpful-count">{review.helpfulYes}</span>
                </button>
                <button type="button" className={`helpful-btn ${vote === 'dislike' ? 'active' : ''}`} onClick={() => setVote('dislike')}>
                    <img src={assets.dislikeIcon} alt="dislike" className="helpful-icon" />
                    <span className="helpful-count">{review.helpfulNo}</span>
                </button>
            </div>
        </div>
    );
};

export default ReviewCard;
