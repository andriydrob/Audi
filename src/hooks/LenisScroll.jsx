import React, { useEffect } from 'react';
import Lenis from 'lenis';

import 'lenis/dist/lenis.css';

const LenisScrollProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6, // Швидкість прокрутки (за замовчуванням: 1.2)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical', // 'vertical' або 'horizontal'
      gestureDirection: 'vertical', // 'vertical' або 'horizontal'
      smoothWheel: true, // Згладжування прокрутки колесом миші
      wheelMultiplier: 1, // Коефіцієнт швидкості колеса
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisScrollProvider;