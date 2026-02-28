import React, { useState } from 'react';
import { assets } from '../assets';
import './FAQ.css';

const faqs = [
    {
        question: 'What is Protein Coffee?',
        answer: 'It\'s real, strong coffee, worth two espresso shots, blended with 15g of high-quality whey protein. Your everyday coffee, with benefits.',
    },
    {
        question: 'How much protein does one serving have?',
        answer: 'Each serving has 15g whey protein isolate.',
    },
    {
        question: 'What type of protein does this contain?',
        answer: 'It contains whey protein isolate.',
    },
    {
        question: 'Does it contain sugar?',
        answer: 'No. It has zero added sugar.',
    },
    {
        question: 'How much caffeine does it have?',
        answer: 'About 120mg caffeine per sachet, around 2 espresso shots.',
    },
    {
        question: 'How do I prepare it?',
        answer: 'Add one sachet to 200ml cold water or milk and shake/blend.',
    },
];

const FAQItem = ({ faq, isOpen, onToggle }) => (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
        <button className="faq-question" onClick={onToggle}>
            <span className="faq-question-text">{faq.question}</span>
            <span className={`faq-chevron ${isOpen ? 'up' : 'down'}`}>
                <img src={assets.faqChevronDown} alt="toggle" className="faq-chevron-icon" />
            </span>
        </button>
        <div className={`faq-answer-wrap ${isOpen ? 'expanded' : ''}`}>
            <p className="faq-answer">{faq.answer}</p>
        </div>
    </div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? -1 : idx);
    };

    return (
        <div className="faq-section" id="faq">
            <h2 className="faq-title">Customers Often Ask-</h2>

            <div className="faq-list">
                {faqs.map((f, idx) => (
                    <FAQItem key={idx} faq={f} isOpen={openIndex === idx} onToggle={() => toggle(idx)} />
                ))}
            </div>

            <div className="faq-footer">
                <h3 className="faq-footer-title">Got a different question?</h3>
                <div className="faq-btns">
                    <button className="faq-btn-light">SEE OUR FAQ</button>
                    <button className="faq-btn-red">MAIL US</button>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
