import React, { useState } from 'react';
import CarCard from '../components/CarCard';
import CarDetailModal from '../components/CarDetailModal';
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

const AllCars: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Cars</h1>
          <p className="text-xl text-gray-600">
            Browse our complete collection of {carsData.length} quality vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carsData.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onClick={() => handleCarClick(car)}
            />
          ))}
        </div>

        {selectedCar && (
          <CarDetailModal
            car={selectedCar}
            isOpen={isModalOpen}
            onClose={handleModalClose}
          />
        )}
      </div>
    </div>
  );
};

export default AllCars;