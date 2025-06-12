import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import { useEffect, useState } from 'react';


const Navbar = () => {
  const [showMenu, SetShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={`flex flex-col fixed items-center w-full z-50 bg-black text-white ${isScrolled ? 'border-b border-gray-300' : ''}`}>
      <div className='flex flex-col lg:w-8/12 w-11/12  relative'>
        <div className='flex flex-row justify-between items-center w-full py-5 lg:py-8'>
          <NavLink  to='/'>
            <img src={logo} alt='logo' className='h-10'/>
          </NavLink>
          <div className="hidden lg:block">
            <div className={`tracking-wide flex flex-row gap-[4rem] text-sm items-center`}>
              <NavLink to='/'>
                Home
              </NavLink>
              <NavLink to='/services'>
                Services
              </NavLink>
              <NavLink to='/about'>
                About us
              </NavLink>
              <NavLink to='/careers'>
                Careers
              </NavLink>
              <NavLink to='/updates'>
                Updates
              </NavLink>
            </div>
          </div>
          <div className="lg:hidden block">
            <div className={` text-white flex flex-row gap-4 items-center`}>
              <i onClick={() => SetShowMenu(true)} className='fi fi-rr-menu-burger cursor-pointer'></i>
            </div>
          </div>
          
        </div>
        {showMenu && 
          <div className='flex flex-col fixed top-0 right-0 w-screen h-screen bg-white bg-opacity-70 z-50'>
            <div className='flex flex-col w-full relative bg-black'>
              <div className='flex flex-row items-center justify-between w-full py-3 px-5 border-b border-gray-200'>
                <NavLink to='/'>
                  <img src={logo} alt='logo' className='h-10'/>
                </NavLink>
                <i onClick={() => SetShowMenu(false)} className='fi fi-rr-cross text-white cursor-pointer'></i>
              </div>
              <div className='flex flex-col tracking-wide w-full gap-[2rem] uppercase p-5 text-white'>
                <NavLink onClick={() => SetShowMenu(false)} to='/'>
                  Home
                </NavLink>
                <NavLink onClick={() => SetShowMenu(false)} to='/services'>
                  Services
                </NavLink>
                <NavLink onClick={() => SetShowMenu(false)} to='/about'>
                  About us
                </NavLink>
                <NavLink onClick={() => SetShowMenu(false)} to='/careers'>
                  Careers
                </NavLink>
                <NavLink onClick={() => SetShowMenu(false)} to='/updates'>
                  Updates
                </NavLink>
              </div>
            </div>
          </div>
        }
      </div>
    </nav>
  )
}

export default Navbar