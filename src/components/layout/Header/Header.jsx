import React, { Component } from 'react'
import Logo from './Logo';
import NavLinks from './NavLinks';

const Header = () => { 
return (
  <>
    <header className='absolute top-0 left-0 z-50 flex justify-between w-full px-6  sm:h-45 md:h-45 h-15 md:px-15'>
      <div className='items-center justify-start pt-0 md:pt-15 sm:pt-15 xl:pt-15 shrink-0 '>
        <Logo />
      </div>

      <div className="flex gap-4">
        <NavLinks />
      </div>
    </header> 
  </>
    )
  }

  export default Header;
