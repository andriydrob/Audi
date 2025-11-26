import React, { useState } from "react";
import CloseImage from '../../../assets/icons/CloseImage.svg';
import MenuImage from '../../../assets/icons/MenuImage2.svg';

const NavLinks = () => {


  const mobileMenuItems = [
    {name: 'Home', href: '#'},
    {name: 'Models', href: '#'},
    {name: 'Configurator', href: '#'},
    {name: 'Audi Sport Models', href: '#'},
    {name: 'Audi World', href: '#'},
    {name: 'About Us', href: '#'},
  ];

  const [isOpen, setIsOpen] = useState(false);

  const ToggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }

  return (
    <div className='flex items-center'>
      <nav className=" hidden gap-8 text-lg 2xl:text-xl text-black justify-end-safe md:flex pr-2.5">
        <a href="#" className="font-bold rounded-4xl bg-white px-3 py-1.5 duration-300 transition hover:bg-white/50 text-black">Home </a>
        <a href="#" className="font-bold rounded-4xl bg-white px-3 py-1.5 duration-300 transition hover:bg-white/50 text-black">Models </a>
        <a href="#" className="font-bold rounded-4xl bg-white px-3 py-1.5 duration-300 transition hover:bg-white/50 text-black">Configurator </a>
      </nav>

      <button 
        onClick={ToggleMenu} 
        className="p-2 text-black md:hidden focus:outline-none">
        <img 
            src={MenuImage}
            alt="Open menu" 
            className="w-8 h-10 sm:w-10 sm:h-10 shrink-0"
        />
      </button>

      <div className={`md:hidden fixed top-0 left-0 bg-black/70 w-full h-full transition-opacity duration-300 z-50 
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={ToggleMenu}
      >
        <nav 
          className={`absolute top-0 left-0 w-full h-auto bg-white text-black p-4 shadow-2xl transform transition-transform duration-500`}
          style={{ 
            transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
          }}
          onClick={(e) => e.stopPropagation()} 
        >

          <div className="flex justify-end pr-2"> 
             <button onClick={ToggleMenu} className="p-2 text-black focus:outline-none absolute top-2 right-2 z-10">
                 <img src={CloseImage} alt="Close menu" className="w-6 h-10 sm:w-10 sm:h-10 shrink-0 mr-2" />
             </button>
          </div>
          
          <ul className="flex flex-col space-y-2 pt-10">
            {mobileMenuItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="block text-xl font-medium py-2 hover:bg-gray-100 rounded-md transition duration-200 px-2"
                  onClick={ToggleMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavLinks;
