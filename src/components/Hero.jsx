import React from 'react';

export default function Hero() {
    return (
        <section className="hero">
           
                <div className="photo-grid">
                    <div className="photo" id="photo1"> <img src="/concert.jpg" alt="concert" /></div>
                    <div className="photo" id="photo2"> <img src="/fishing.jpg" alt="fishing" /></div>
                    <div className="photo" id="photo3"> <img src="/karaoke.jpg" alt="karaoke" /></div>
                    <div className="photo" id="photo4"> <img src="/people.jpg" alt="people" /></div>
                    <div className="photo" id="photo5"> <img src="/peopleEating.jpg" alt="peopleEating" /></div>
                    <div className="photo" id="photo6"> <img src="/yoga.jpg" alt="yoga" /></div>
                    <div className="photo" id="photo7"> <img src="/yougurt.jpg" alt="yogurt" /></div>
                </div>

         
            <div className="hero-header">
                <h1 className="hero-title">Online Experiences</h1>
                <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            </div>
        </section>
    );
}