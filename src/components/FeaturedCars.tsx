import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CarCard from './CarCard';
import CarDetailModal from './CarDetailModal';
import carsData from '../data/cars.json';

interface Car {
  id: number;
  price: string;
  title: string;
  location: string;
  posted: string;
  year: number;
  kms: number;
  fuel: string;
  transmission: string;
  make: string;
  model: string;
  condition: string;
  bodyType: string;
  color: string;
  seats: number;
  images: string[];
}

const FeaturedCars: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredCars = carsData.slice(0, 3);
  const hasMoreCars = carsData.length > 3;

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Cars</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onClick={() => handleCarClick(car)}
            />
          ))}
        </div>

        {hasMoreCars && (
          <div className="text-center mt-12">
            <Link
              to="/cars"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View All Cars
            </Link>
          </div>
        )}

        {selectedCar && (
          <CarDetailModal
            car={selectedCar}
            isOpen={isModalOpen}
            onClose={handleModalClose}
          />
        )}
      </div>
    </section>
  );
};

export default FeaturedCars;