import React from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import CenterModeSlider from './components/UI/CenterModeSlider';
import Home from './pages/Home/Home';
import LenisScroll from './hooks/LenisScroll';

const App = () => {

  return (
    <LenisScroll>
    <div className='overflow-x-hidden'>
      <Home />
    </div> 
    </LenisScroll>
  )
}

export default App;
