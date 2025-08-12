import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedCars from '../components/FeaturedCars';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCars />
    </div>
  );
};

export default Home;