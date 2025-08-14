import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedCars from '../components/FeaturedCars';
import CarRequiredList from '../components/carrequired';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCars />
      <CarRequiredList />

    </div>
  );
};

export default Home;