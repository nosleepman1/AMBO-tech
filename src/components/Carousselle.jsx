import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ModernCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop',
      title: 'Premier slide',
      description: 'Découvrez des paysages magnifiques et inspirants'
    },
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop',
      title: 'Deuxième slide',
      description: 'Explorez la beauté de la nature sauvage'
    },
    {
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600&h=900&fit=crop',
      title: 'Troisième slide',
      description: 'Vivez des moments inoubliables au bord de la mer'
    },
    {
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&h=900&fit=crop',
      title: 'Quatrième slide',
      description: 'Contemplez des horizons sans limites'
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 z-10 group"
      >
        <ChevronLeft className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 z-10 group"
      >
        <ChevronRight className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>

      {/* Content */}
      <div className="absolute bottom-32 left-0 right-0 z-10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 absolute'
              }`}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
                {slide.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
          >
            <div
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? 'w-16 bg-white'
                  : 'w-8 bg-white/40 hover:bg-white/60'
              }`}
            />
            {index === currentSlide && (
              <div className="absolute inset-0 w-full h-1 bg-white/50 rounded-full animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-8 right-8 z-10">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-yellow-400' : 'bg-green-400 animate-pulse'}`} />
          <span className="text-white text-sm font-medium">
            {isPaused ? 'En pause' : 'Auto-play'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModernCarousel;