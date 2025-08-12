# Shehroz MotorHub - Car Showroom Website

A modern, responsive car showroom website built with React, Vite, and TailwindCSS.

## Features

- **Responsive Design**: Mobile-first approach with optimal viewing on all devices
- **Featured Cars Section**: Displays up to 3 featured cars on the homepage
- **All Cars Page**: Grid layout showing all available cars
- **Interactive Image Carousels**: Each car features a swipeable image gallery
- **WhatsApp Integration**: Direct communication with dealers through WhatsApp
- **Car Detail Modals**: Comprehensive car information in an elegant modal
- **Modern UI**: Clean design with smooth animations and hover effects
- **React Router Navigation**: Seamless navigation between pages

## Technology Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **TailwindCSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **SwiperJS**: Touch-enabled image carousels
- **TypeScript**: Type-safe development
- **Lucide React**: Modern icon library

## Getting Started

### Prerequisites

- Node.js 16+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production build will be available in the `dist` folder.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── HeroSection.tsx # Homepage hero
│   ├── FeaturedCars.tsx # Featured cars section
│   ├── CarCard.tsx     # Individual car card
│   ├── CarDetailModal.tsx # Car details modal
│   └── ImageCarousel.tsx # Image carousel component
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   └── AllCars.tsx     # All cars page
├── data/               # Static data
│   └── cars.json       # Car listings data
├── App.tsx             # Main app component
└── main.tsx           # App entry point
```

## Features in Detail

### Car Listings
- Each car displays price, title, location, posting date
- Detailed specifications including year, kilometers, fuel type, transmission
- High-quality image galleries with smooth navigation

### WhatsApp Integration
- Direct "Buy via WhatsApp" buttons on each car
- Pre-filled messages with car details
- Contact number: +92 342 333 0020

### Responsive Design
- Mobile: 1 car per row
- Tablet: 2 cars per row  
- Desktop: 3 cars per row

### Navigation
- Sticky header with brand logo
- Mobile-optimized navigation menu
- Social media and contact links

## Customization

### Adding New Cars
Edit `src/data/cars.json` to add new car listings. Each car should include:
- Basic info (price, title, location, posted date)
- Specifications (year, kms, fuel, transmission, etc.)
- Array of 3 image URLs

### Styling
The design uses TailwindCSS with a blue (#0b6ef6), white, and black color scheme. Modify the Tailwind classes in components to change the styling.

### Contact Information
Update contact details in:
- `src/components/Header.tsx`
- `src/components/Footer.tsx` 
- `src/components/CarCard.tsx` (WhatsApp link)

## License

This project is built for Shehroz MotorHub. All rights reserved.