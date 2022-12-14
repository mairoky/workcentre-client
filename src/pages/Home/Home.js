import React from 'react';
import homeVideo from '../../assets/home/home-video-bg.mp4';
import './Home.css';

const Home = () => {
    return (
        <main>
            <section className='home'>
                <video className='home-bg-video' autoPlay loop muted>
                    <source src={homeVideo} type='video/mp4' />
                </video>
                <div className="container">
                    <div className="hero-content text-center">
                        <h1>We Are The Most Reliable <span>Recruiting Service Agency</span> In UK</h1>
                        {/* <p>We Will Build Your Success. This is the Easiest Way to Get Your New Dream Job</p> */}
                        <div>
                            <button className='btn-general text-uppercase me-3'>Learn More</button>
                            <button className='btn-general-outline text-uppercase'>Talk to Us!</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;