import React from 'react';
import { X, MapPin, Clock, Calendar, Gauge, Fuel, Settings, Car, Palette, Users, MessageCircle } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

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

interface CarDetailModalProps {
  car: Car;
  isOpen: boolean;
  onClose: () => void;
}

const CarDetailModal: React.FC<CarDetailModalProps> = ({ car, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`I am interested in ${car.title}`);
    window.open(`https://wa.me/923423330020?text=${message}`, '_blank');
  };

  const details = [
    { icon: Calendar, label: 'Year', value: car.year },
    { icon: Gauge, label: 'Kilometers', value: car.kms.toLocaleString() },
    { icon: Fuel, label: 'Fuel Type', value: car.fuel },
    { icon: Settings, label: 'Transmission', value: car.transmission },
    { icon: Car, label: 'Make', value: car.make },
    { icon: Car, label: 'Model', value: car.model },
    { icon: Settings, label: 'Condition', value: car.condition },
    { icon: Car, label: 'Body Type', value: car.bodyType },
    { icon: Palette, label: 'Color', value: car.color },
    { icon: Users, label: 'Seats', value: car.seats },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{car.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Image Carousel */}
          <div className="w-full">
            <ImageCarousel images={car.images} title={car.title} />
          </div>

          {/* Price and Basic Info */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">{car.price}</div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                <span>{car.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2 text-blue-600" />
                <span>Posted {car.posted}</span>
              </div>
            </div>

            <button
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Buy via WhatsApp</span>
            </button>
          </div>

          {/* Car Details Grid */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Car Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.map(({ icon: Icon, label, value }, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-700">{label}</span>
                  </div>
                  <span className="font-semibold text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailModal;