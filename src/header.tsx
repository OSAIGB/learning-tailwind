
import React, { useState } from 'react';
import Bars from './fabars.svg'
import Arrow from './arrow.svg'
const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleNav = () => {
    setIsVisible(!isVisible)
  }

  return (
    <header className='fixed h-20 z-10 top-0 items-center w-full flex 
    gap-4 justify-evenly bg-white'>
      <div id="logo">
        <a href="/learning-tailwind/"><h1 className='text-2xl italic'>Peace<span className='text-blue-500 text-3xl font-bold'>Resort</span></h1></a>
      </div>
      <img src={Bars} alt="" onClick={handleNav} className={`  bg-white md:hidden block cursor-pointer w-7`}/>

<nav className={`transform transition-transform duration-500 ease-in-out ${isVisible ? 'translate-x-9' : 'translate-x-[700%]'} fixed right-0 top-0 h-full w-64 bg-white md:block md:hidden block cursor-pointer `}>
 <ul className='flex flex-col text-lg gap-4 font-bold font-mono p-4'>
 <img src={Arrow} alt="arrow-left" onClick={handleNav} className='w-10 hover:bg-blue-200'/>
          <li className='hover:text-blue-500 text-3xl'><a href="/">Home</a></li>
          <li className='hover:text-blue-500 text-3xl'><a href="#">About</a></li>
          <li className='hover:text-blue-500 text-3xl'><a href="#">Contact</a></li> 
          <li className='hover:text-blue-500 text-3xl'><a href="#">Bookings</a></li>
          <li className='hover:text-blue-500 text-3xl'><a href="#">Photos</a></li>
          <li className='hover:text-blue-500 text-3xl'><a href="#">Direction</a></li>
        </ul>
      </nav>
      <nav className='hidden md:block'>
     
        <ul className='flex text-lg gap-4 font-bold font-mono'>
      
          <li className='hover:text-blue-500 '><a href="#">Home</a></li>
          <li className='hover:text-blue-500'><a href="#">About</a></li>
          <li className='hover:text-blue-500'><a href="#">Contact</a></li>
          <li className='hover:text-blue-500'><a href="#">Bookings</a></li>
          <li className='hover:text-blue-500'><a href="#">Photos</a></li>
          <li className='hover:text-blue-500'><a href="#">Direction</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
