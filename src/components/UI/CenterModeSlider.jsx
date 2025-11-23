import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

// Імпорти зображень
import audiR8 from '../../assets/images/Audi_r8.png'; 
import audiRs6 from '../../assets/images/Audi_rs6.png';
import audiRs7 from '../../assets/images/Audi_rs7.png';
import audiRsetrongt from '../../assets/images/Audi_rs_e-tron_gt.png';
import audiRsq8 from '../../assets/images/Audi_rsq8.png';
import audiRsq3 from '../../assets/images/Audi_rsq3.png';
import audiRs4 from '../../assets/images/Audi_rs4.png';
import audiRs3 from '../../assets/images/Audi_rs3.png';
import audiRs5 from '../../assets/images/Audi_rs5.png';

const SLIDES_DATA = [
  { id: 1, url: audiR8, description: "Audi_r8" },
  { id: 2, url: audiRs6, description: "Audi_rs6" },
  { id: 3, url: audiRs7, description: "Audi_rs7" },
  { id: 4, url: audiRsetrongt, description: "Audi_rs_e-tron_gt" },
  { id: 5, url: audiRsq8, description: "Audi_rsq8" },
  { id: 6, url: audiRsq3, description: "Audi_rsq3" },
  { id: 7, url: audiRs4, description: "Audi_rs4" },
  { id: 8, url: audiRs3, description: "Audi_rs3" },
  { id: 9, url: audiRs5, description: "Audi_rs5" },
];

const SlideItem = ({ imageUrl, description, position, onLeftClick, onRightClick }) => (
  // Клас 'relative' дозволяє розмістити абсолютну зону кліку всередині.
  <div className="p-4 md:p-2 outline-none select-none relative h-full">
    <div className="h-74 flex items-center justify-center overflow-hidden transition-all duration-300">
      <img 
        src={imageUrl} 
        alt={description} 
        // Адаптивні класи для масштабування на мобільних, збереження розміру на десктопі.
        className={`
          w-full 
          max-w-full 
          object-contain 
          transition-all duration-300
          ${position === 'center' 
            ? 'lg:w-[600px] lg:h-[600px] max-h-[400px] md:max-h-[500px]' 
            : 'lg:w-[500px] lg:h-[500px] max-h-[300px] md:max-h-[400px]'
          }
          mb-25
        `} 
      />
    </div>

    {position !== 'center' && (
      <div
        // inset-0 розтягує на всю ширину і висоту контейнера слайда.
        className="absolute inset-0 z-10 cursor-pointer" 
        onClick={position === 'left' ? onLeftClick : onRightClick}
      >
        {/* Опціональний візуальний ефект при наведенні курсора */}
        <div className="w-full h-full opacity-0 hover:opacity-10 transition-opacity"></div>
      </div>
    )}
  </div>
);

const CenterModeSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    slidesToShow: 1,
    centerMode: true,
    // На великих екранах: 30% відступу
    centerPadding: '30%',
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    beforeChange: (_, next) => setCurrentSlide(next),
    
    // Адаптивні налаштування для малих екранів
    responsive: [
      { 
        breakpoint: 640, 
        settings: { 
          centerMode: true, 
          // Малий фіксований відступ для мобільних
          centerPadding: '20px', 
          slidesToShow: 1 
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          centerMode: true, 
          centerPadding: '60px', 
          slidesToShow: 1 
        } 
      },
    ],
  };

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  return (
    <div className="w-full mx-auto py-12"> 
      <Slider {...settings} ref={sliderRef}>
        {SLIDES_DATA.map((slide, index) => {
          const total = SLIDES_DATA.length;
          // Логіка для визначення, який слайд ліворуч/праворуч від активного
          const prevIndex = (currentSlide - 1 + total) % total;
          const nextIndex = (currentSlide + 1) % total;

          let position = 'hidden';
          if (index === prevIndex) position = 'left';
          if (index === nextIndex) position = 'right';
          if (index === currentSlide) position = 'center';

          return (
            <SlideItem
              key={slide.id}
              imageUrl={slide.url}
              description={slide.description}
              position={position}
              onLeftClick={handlePrev} 
              onRightClick={handleNext}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default CenterModeSlider;