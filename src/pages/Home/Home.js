import React from 'react';
import homeVideo from '../../assets/home/home-video-bg.mp4';
import heroImage from '../../assets/home/hero-image.svg';
import './Home.css';

const Home = () => {
    return (
        <main>
            <section id='home'>
                {/* <div className="home-bg"></div> */}
                <video className='home-bg-video' autoPlay loop muted>
                    <source src={homeVideo} type='video/mp4' />
                </video>
                <div className="home-overlay"></div>
                <div className="home-content">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="hero-content">
                                    <h4>Welcome</h4>
                                    <h1>We Are The Most Reliable <span>Recruiting Service Agency</span> In UK.</h1>
                                    <p>Trust Us! We Will Build Your Success. This is the Easiest Way to Get Your New Dream Job.</p>
                                    <div>
                                        <button className='btn-general text-uppercase me-3'>Learn More</button>
                                        <button className='btn-general-outline text-uppercase'>Talk to Us!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;