'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import './Banner.css'

const Banner = () => {
    const words = ['Digital Markerting', 'Websites', 'Google Ads', 'SEO'];
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIndex];
        const typingSpeed = isDeleting ? 60 : 120; // ms per character

        const handler = setTimeout(() => {
            if (!isDeleting) {

                setText(current.substring(0, text.length + 1));
                if (text.length + 1 === current.length) {

                    setTimeout(() => setIsDeleting(true), 800);
                }
            } else {

                setText(current.substring(0, text.length - 1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(handler);
    }, [text, isDeleting, wordIndex, words]);
    return (
        <div className="banner-container">

            <video
                className="banner-video"
                src="https://www.pexels.com/download/video/3255387/"
                autoPlay
                loop
                muted
                playsInline
            />


            <div className="banner-overlay">
                <div className='banner-content'>

                 <img src="/Logo2.png" alt="Icon" className="mobile-icon" />
                <h1>We serve you with
 <span className="highlight">{text}</span></h1>
                <p>We are the No.1 Digital Marketing Partners in Bengaluru
</p>
                <Link href="/contact" className="btn">Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Banner