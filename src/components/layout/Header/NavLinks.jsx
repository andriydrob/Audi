import React, { useState } from "react";
import CloseImage from '../../../assets/icons/CloseImage.svg';
import MenuImage from '../../../assets/icons/MenuImage2.svg';

const NavLinks = () => {

  const [isOpen, setIsOpen] = useState(false);

  const ToggleMenu = () => {
    setIsOpen[!isOpen]
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
    {isOpen ? (
                <img 
                    src={CloseImage}
                    alt="Close menu" 
                    className="w-6 h-10 sm:w-10 sm:h-10 shrink-0"
                />
            ) : (
                <img 
                    src={MenuImage}
                    alt="Open menu" 
                    className="w-6 h-10 sm:w-10 sm:h-10 shrink-0"
                />
            )}
</button>
    </div>
  );
};

export default NavLinks;
