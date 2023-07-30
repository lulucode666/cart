import React from 'react'
import About from './About'
import Carousel from './Carousel'

const Home = () => {
    return (
        <div>
            <div className='container' style={{ writingMode: 'vertical-lr', textOrientation: 'upright', position: 'relative' }}>
                <h1>歡迎喵臨，</h1>
                <h1>花生の私藏物</h1>
            </div>
            <Carousel />
            {/* <About /> */}

        </div>
    )
}

export default Home;