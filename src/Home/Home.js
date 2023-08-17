import React from 'react'
import { useState, useEffect } from 'react';

const Home = () => {
    const imgs = [
        './images/1097432.jpg',
        './images/1097438.jpg',
        './images/1097429.jpg',
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % imgs.length);
    }
    const handleBack = () => {
        setActiveIndex((prev) => (prev - 1) % imgs.length);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % imgs.length);
        }
            , 3000)
        return () => {
            clearInterval(interval);
        };
    }, [imgs.length]);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='wrapper2' style={{ minHeight:'100vh' }}>
            <div className='container' style={{ writingMode: 'vertical-lr', textOrientation: 'upright', right: 0, position: 'relative' }}>
                <h1 className='title2'>歡迎喵臨，</h1>
                <h1 className='title2'>花生の私藏物。</h1>
            </div>
            <div className="container" style={{ width: 520, marginRight:'180px' }}>
                <div class="carousel-inner">
                    {imgs.map((img, index) => (
                        <div
                            key={index}
                            className={`carousel-item${index === activeIndex ? 'active' : ''}`}>
                            <img src={img} className="d-block w-100" alt={`Slide${index + 1}`} />
                        </div>
                    ))}
                    <div id="demo" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            {imgs.map((_, index) => (
                                <button key={index}
                                    type="button"
                                    data-bs-target="carouselControls"
                                    data-bs-slide-to={index}
                                    className={index === activeIndex ? 'active' : ''}
                                    onClick={() => handleClick(index)}
                                >
                                </button>
                            ))}
                        </div>
                    </div>
                    <button className="carousel-control-next"
                        type="button" onClick={handleNext}>
                        <span className="carousel-control-next-icon"
                            aria-hidden="true"></span>
                        <span className="visually-hidden">Prev</span>
                    </button>
                    <button className="carousel-control-prev"
                        type="button" onClick={handleBack}>
                        <span className="carousel-control-prev-icon"
                            aria-hidden="true"></span>
                        <span className="visually-hidden">Prev</span>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Home;