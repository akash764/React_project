
import React from 'react';
import './ProductInfo.css';

const ProductInfo = () => {
    const productDetails = [
        { label: "Category", value: "Protein Coffee" },
        { label: "Brand", value: "Sleepy Owl" },
        { label: "Flavours", value: "Classic, Vanilla, Hazelnut, Assorted" },
        { label: "Protein", value: "15g Whey Protein Isolate per serving" },
        { label: "Sachets", value: "5 sachets per pack" },
        { label: "Calories", value: "Under 97 calories per serving" },
        { label: "Sugar Content", value: "Zero Added Sugar" },
        { label: "Caffeine", value: "~120mg per sachet (2 espresso shots)" },
        { label: "Ideal For", value: "Morning boost, Pre/Post workout, Travel" },
        { label: "How to Use", value: "Add to 200ml cold water/milk, shake or blend" },
    ];

    return (
        <div className="product-info-section">
            <h2 className="pi-title">Product Details</h2>

            <div className="pi-table">
                {productDetails.map((detail, idx) => (
                    <div key={idx} className={`pi-row ${idx % 2 === 0 ? 'even' : ''}`}>
                        <span className="pi-label">{detail.label}</span>
                        <span className="pi-value">{detail.value}</span>
                    </div>
                ))}
            </div>

            <div className="pi-badges">
                {['100% Vegetarian', 'No Added Sugar', 'Gluten Free', 'Preservative Free'].map((b, i) => (
                    <div key={i} className="pi-badge">
                        <span className="pi-badge-check">✓</span>
                        <span>{b}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductInfo;
