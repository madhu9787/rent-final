
import React from 'react';
import Navbar from './Navbar';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-container">
            <Navbar />
            <div className="about-content">
                <header className="about-hero">
                    <h1 className="about-title">About RentLoop</h1>
                    <p className="about-subtitle">
                        Redefining community sharing through secure, seamless, and smart renting solutions.
                    </p>
                </header>

                <div className="about-sections">
                    <section className="about-card">
                        <h2>Our Mission</h2>
                        <p>
                            At RentLoop, we believe in the power of sharing. Our mission is to create a sustainable,
                            community-driven platform that empowers individuals to share resources, reduce waste,
                            and build stronger neighborhood connections. We provide the tools you need to lend and
                            rent items with confidence.
                        </p>
                    </section>

                    <section className="about-card">
                        <h2>Why Choose Us?</h2>
                        <p>
                            We prioritize security and user experience above all else. With features like
                            real-time availability tracking, secure payment processing, and verified user profiles,
                            RentLoop takes the hassle out of renting. Our AI-driven support ensures that help
                            is always just a click away.
                        </p>
                    </section>

                    <section className="about-card">
                        <h2>The Future of Renting</h2>
                        <p>
                            We are constantly innovating to bring you the best neighborhood rental experience.
                            From advanced search filters to seamless listing management, RentLoop is designing
                            the future of the sharing economy, one rental at a time.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
