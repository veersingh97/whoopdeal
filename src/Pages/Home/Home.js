import React from 'react';
import Arrivals from '../../Components/Arrivals/Arrivals';
import ShopWithUs from '../../Components/ShopWithUs/ShopUs';
import HeroSection from '../../Components/HeroSection/HeroSection';
import Testimonials from '../../Components/Testimonials/Testimonials';
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturesProducts'


const Home = () => {
  return (
    <div>
        <HeroSection/>
        <ShopWithUs/>
        <Arrivals/>
        <FeaturedProducts/>
        <Testimonials/>
    </div>
  )
}

export default Home;