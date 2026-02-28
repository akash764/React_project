import React, { useState } from 'react';
import './AddToCart.css';

const AddToCart = ({ onAddToCart }) => {
    const [added, setAdded] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleAddToCart = () => {
        setAdded(true);
        setShowToast(true);
        if (onAddToCart) onAddToCart();

        setTimeout(() => {
            setAdded(false);
        }, 2500);

        setTimeout(() => {
            setShowToast(false);
        }, 2200);
    };

    return (
        <div className="add-to-cart-wrapper">
            <div className="add-to-cart-bar">
                <button className={`atc-btn ${added ? 'added' : ''}`} onClick={handleAddToCart} disabled={added}>
                    {added ? 'ADDED' : 'ADD TO CART'}
                </button>

                <div className="atc-price-wrap">
                    <div className="atc-prices">
                        <span className="mrp">MRP {'\u20B9'}700</span>
                        <span className="sale-price">{'\u20B9'}549</span>
                    </div>
                    <span className="tax-info">Inclusive of all taxes</span>
                </div>
            </div>

            {showToast && <div className="cart-toast">Added to cart</div>}
        </div>
    );
};

export default AddToCart;
