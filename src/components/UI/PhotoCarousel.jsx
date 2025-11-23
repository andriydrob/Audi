import React, { useState, useEffect, useCallback } from 'react';
// import Audi_RS3_1 from '../../assets/images/Audi_RS3_1.png';
// import Audi_RS3_2 from '../../assets/images/Audi_RS3_2.png';
// import Audi_RS3_3 from '../../assets/images/Audi_RS3_3.png';
// import Audi_RS3_4 from '../../assets/images/Audi_RS3_4.png';
// import Audi_RS3_5 from '../../assets/images/Audi_RS3_5.png';
// import Audi_RS3_6 from '../../assets/images/Audi_RS3_6.png';
// import Audi_RS3_7 from '../../assets/images/Audi_RS3_7.png';
// import Audi_RS3_8 from '../../assets/images/Audi_RS3_8.png';
// import Audi_RS3_9 from '../../assets/images/Audi_RS3_9.png';
// import Audi_RS3_10 from '../../assets/images/Audi_RS3_10.png';

const ImageSlider = ({
  images = [],
  title = '',
  subtitle = ''
}) => {
  // const images = [
    // Audi_RS3_1, Audi_RS3_2, Audi_RS3_3, Audi_RS3_4, Audi_RS3_5, Audi_RS3_6, Audi_RS3_7, Audi_RS3_8, Audi_RS3_9, Audi_RS3_10];

  const [currentIndex, setCurrentIndex] = useState(1); // Починаємо з 1 через клоновані слайди
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Створюємо масив з клонованими слайдами для нескінченного ефекту
  const slides = [images[images.length - 1], ...images, images[0]];

  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => prevIndex + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prevIndex => prevIndex - 1);
  }, []);

  // Обробка переходів для нескінченного ефекту
  useEffect(() => {
    if (currentIndex === slides.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    } else if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(slides.length - 2);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    }
  }, [currentIndex, slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index + 1); // +1 через клоновані слайди
  };

  const getDisplayIndex = () => {
    if (currentIndex === 0) return images.length - 1;
    if (currentIndex === slides.length - 1) return 0;
    return currentIndex - 1;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Контейнер для контенту з обмеженням ширини на мобільних */}
      <div className="w-full h-full flex items-center justify-center">
        {/* Основний контейнер слайдера */}
        <div className="w-full h-full md:max-w-[1920px] md:mx-auto">
          {/* Слайди */}
          <div 
            className="w-full h-full flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none'
            }}
          >
            {slides.map((image, index) => (
              <div 
                key={index}
                className="w-full h-full shrink-0 flex items-center justify-center" //додати flex-shrink-0
              >
                <div className="w-full h-full md:max-w-[1920px] md:max-h-[1080px] flex items-center justify-center">
                  <img 
                    src={image} 
                    alt={`Audi RS3 ${index === 0 ? images.length : index === slides.length - 1 ? 1 : index}`}
                    className="w-full h-full object-contain md:object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


        <div className="absolute left-4 md:left-12 bottom-1/4 md:bottom-20 z-20 
                        text-white w-full max-w-[1200px] px-4">
          <div className="flex flex-col items-start space-y-4">
            {/* Заголовок */}
            {title && (
              <h1 className="text-4xl md:text-6xl lg:text-7xl Futura New text-shadow-lg">
                {title}
              </h1>
            )}
            
            {/* Підзаголовок */}
            {subtitle && (
              <p className="text-lg md:text-xl lg:text-2xl Futura New text-shadow-md">
                {subtitle}
              </p>
            )}

            {/* Місце для кнопок (як на вашому фото) */}
            <div className="flex space-x-4 pt-4">
              {/* Приклад Кнопки 1: Детальніше (світла) */}
              <button className="px-5 py-2 text-sm md:text-base Futura New rounded 
                                 bg-gray-200 text-black hover:bg-gray-300 transition duration-300">
                Детальніше
              </button>
              {/* Приклад Кнопки 2: Конфігуратор (темна) */}
              <button className="px-5 py-2 text-sm md:text-base Futura New rounded 
                                 bg-black/80 text-white hover:bg-black/90 transition duration-300">
                Конфігуратор
              </button>
            </div>
          </div>
        </div>
      
      {/* Стрілка вліво */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 
                   bg-white hover:bg-white/50 backdrop-blur-sm
                   rounded-full p-2 md:p-3 transition-all duration-300 cursor-pointer"
        aria-label="Попереднє фото"
      >
        <svg 
          className="w-5 h-5 md:w-6 md:h-6 text-black" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
      </button>

      {/* Стрілка вправо */}
      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 
                   bg-white hover:bg-white/50 backdrop-blur-sm
                   rounded-full p-2 md:p-3 transition-all duration-300 cursor-pointer"
        aria-label="Наступне фото"
      >
        <svg 
          className="w-5 h-5 md:w-6 md:h-6 text-black" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </button>

      {/* Індикатори (точки) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 
                      flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === getDisplayIndex() 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Перейти до фото ${index + 1}`}
          />
        ))}
      </div>

      {/* Номер поточного слайду */}
      <div className="absolute bottom-4 right-4 z-10 
                      bg-black/50 text-white px-2 py-1 md:px-3 md:py-1 rounded-full
                      text-xs md:text-sm backdrop-blur-sm">
        {getDisplayIndex() + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageSlider;