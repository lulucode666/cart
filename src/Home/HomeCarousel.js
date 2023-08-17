import React, { useState } from 'react';

const HomeCarousel = () => {
    const total = 5; // Hardcoded for simplicity, but this can be dynamically determined.
    const [current, setCurrent] = useState(0); 

    const moveRight = () => {
        let next = current + 1;
        setSlide(current, next);
    };

    const moveLeft = () => {
        let prev = current - 1;
        setSlide(current, prev);
    };

    const setSlide = (prev, next) => {
        let slide = next;
        if (next > total - 1) {
            slide = 0;
        }
        if (next < 0) {
            slide = total - 1;
        }
        setCurrent(slide); // Update the state, which triggers a re-render with the correct slide active.

        console.log('current ' + slide);
        console.log('prev ' + prev);
    };

    return (
        <div className="carousel">
            <div className="carousel__nav">
                <span id="moveLeft" className="carousel__arrow" onClick={moveLeft}>
                    {/* SVG data here */}
                </span>
                <span id="moveRight" className="carousel__arrow" onClick={moveRight}>
                    {/* SVG data here */}
                </span>
            </div>
            {[...Array(total)].map((_, index) => (
                <div className={`carousel-item carousel-item--${index + 1} ${index === current ? 'active' : ''}`} key={index}>
                    {/* Your carousel item content */}
                </div>
            ))}
        </div>
    );
};

export default HomeCarousel;
