import React from "react";
import Navbar from "./Navbar";
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-overlay"></div>
            <Navbar />
            <div className="hero-content">
                <div>
                    <h1>Let's GO on a Vacation</h1>
                    <h2>Explore the World with Us</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ipsum harum dicta suscipit in excepturi reiciendis similique assumenda facere ratione? Ab cum doloremque, excepturi maxime culpa eligendi error amet dignissimos.
                    </p>
                </div>
                <div className="hero-form">
                    <h2>Choose Your Destination</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Enter Your Destination"
                        />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Hero;

