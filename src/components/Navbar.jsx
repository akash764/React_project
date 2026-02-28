
import React, { useState } from 'react';
import { assets } from '../assets';
import './Navbar.css';

const Navbar = ({ cartCount = 0 }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-left">
                <button className="shop-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    <span>SHOP</span>
                    <img src={assets.downArrow} alt="down" className="icon-down" />
                </button>
            </div>
            <div className="nav-center">
                <img src={assets.logo} alt="Sleepy Owl" className="logo" />
            </div>
            <div className="nav-right">
                <button className="nav-icon-btn" aria-label="search">
                    <img src={assets.searchIcon} alt="search" className="nav-icon" />
                </button>
                <button className="nav-icon-btn cart-btn" aria-label="cart">
                    <img src={assets.cartIcon} alt="cart" className="nav-icon" />
                    {cartCount > 0 && (
                        <span className="cart-badge">{cartCount}</span>
                    )}
                </button>
            </div>

            {menuOpen && (
                <div className="shop-dropdown" onClick={() => setMenuOpen(false)}>
                    <div className="dropdown-inner">
                        <a href="#">Cold Brew</a>
                        <a href="#">Protein Coffee</a>
                        <a href="#">Instant Coffee</a>
                        <a href="#">Matcha Latte</a>
                        <a href="#">Gift Sets</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
