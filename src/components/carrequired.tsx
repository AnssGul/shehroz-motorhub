"use client";

import { MessageCircle, Globe } from "lucide-react";

interface CarRequired {
    id: number;
    brand: string;
    model: string;
    yearRange: string;
    transmission: string;
    condition: string;
    otherDetails: string;
    contactPhone: string;
    contactName: string;
}

const carRequiredList: CarRequired[] = [
    {
        id: 7,
        brand: "Suzuki",
        model: "Alto",
        yearRange: "2021-2023",
        transmission: "Manual",
        condition: "Excellent, no touch-up or shower",
        otherDetails: "Accident-free",
        contactPhone: "+92 342 3330020",
        contactName: "Shehroz MotorHub",
    },
];

export default function CarRequiredList() {
    const handleWhatsApp = (phone: string, carName: string) => {
        const number = phone.replace(/[^0-9]/g, ""); // clean number
        const message = encodeURIComponent(
            `I am interested in your required car: ${carName}`
        );
        window.open(`https://wa.me/${number}?text=${message}`, "_blank");
    };

    const facebookLink = "https://www.facebook.com/share/1AqyXz6d6M/";

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {carRequiredList.map((car) => (
                <div
                    key={car.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
                >
                    {/* Header Section */}
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {car.brand} {car.model}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                            <strong>Requested By:</strong> {car.contactName}
                        </p>

                        {/* Car Details */}
                        <div className="space-y-2 text-sm mb-4">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Year Range:</span>
                                <span className="font-medium">{car.yearRange}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Transmission:</span>
                                <span className="font-medium">{car.transmission}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Condition:</span>
                                <span className="font-medium">{car.condition}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Other:</span>
                                <span className="font-medium">{car.otherDetails}</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleWhatsApp(car.contactPhone, `${car.brand} ${car.model}`);
                                }}
                                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                            >
                                <MessageCircle className="h-5 w-5" />
                                <span>Contact via WhatsApp</span>
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(facebookLink, "_blank");
                                }}
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                            >
                                <Globe className="h-5 w-5" />
                                <span>Facebook</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
