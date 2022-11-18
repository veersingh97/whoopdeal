import React from "react";
import HeroImage from '../../Images/herosection-image3.png';
import './Herosection.css'
import {Link} from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className='hero-title'>Welcome to</p>
        <h1 className='hero-whoop'>Whoop Deal</h1>
        <p className='hero-desc'>
          eCommerce refers to any form of business transaction conducted online.
          The most popular example of eCommerce is online shopping, which is
          defined as buying and selling of goods via the internet on any device.
        </p>
        <Link to='/products' className="hero-btn">Shop Now</Link>
      </div>
      <div className='hero-img'>
        <img src={HeroImage} className='hero-image' alt='heroSectionImage'></img>
      </div>
    </section>
  );
};

export default HeroSection;
