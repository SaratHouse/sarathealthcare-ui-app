import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { useEffect, useState, useRef } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 0 && lastScrollY.current === 0) {
        setIsScrolled(true);
      } else if (currentScrollY === 0 && lastScrollY.current > 0) {
        setIsScrolled(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav 
      ref={navRef}
      className={`flex flex-col fixed items-center w-full z-50  ${
        isScrolled 
          ? 'bg-white border-b text-[#1663a3] border-black shadow-lg' 
          : 'bg-transparent text-white'
      } transition-all duration-300`}
    >
      <div className='flex flex-col lg:w-8/12 w-11/12 relative'>
        <div className='flex flex-row justify-between items-center w-full py-5'>
          <NavLink to='/'>
            <img src={logo} alt='logo' className='h-14'/>
          </NavLink>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className={`tracking-widest flex flex-row gap-5 text-md items-end font-semibold`}>
              <NavLink to='/' className={({ isActive }) => (isActive ? 'text-[#e67238]' : '')}>
                Home
              </NavLink>
              <NavLink to='/about-us' className={({ isActive }) => (isActive ? 'text-[#e67238]' : '')}>
                About us
              </NavLink>
              <NavLink to='/services' className={({ isActive }) => (isActive ? 'text-[#e67238]' : '')}>
                Services
              </NavLink>
              <NavLink to='/sa' className={({ isActive }) => (isActive ? 'text-[#e67238]' : '')}>
                Jobs
              </NavLink>
              <NavLink to='/contact-us' className={({ isActive }) => (isActive ? 'text-[#e67238]' : '')}>
                Contact Us
              </NavLink>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden block">
            <button 
              onClick={() => setShowMenu(true)}
              className={`${isScrolled ? 'text-[#1663a3]' : 'text-white'} flex items-center justify-center w-10 h-10`}
              aria-label="Open menu"
            >
              <i className='fi fi-rr-menu-burger text-xl'></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {showMenu && (
          <div className='fixed inset-0 bg-black/70 z-50'>
            <div className='flex flex-col w-4/5 h-full relative bg-white'>
              <div className='flex flex-row items-center justify-between w-full py-3 px-5 border-b border-gray-700'>
                <NavLink to='/'>
                  <img src={logo} alt='logo' className='h-10'/>
                </NavLink>
                <button 
                  onClick={() => setShowMenu(false)}
                  className="text-[#1663a3] font-semibold flex items-center justify-center w-10 h-10"
                  aria-label="Close menu"
                >
                  <i className='fi fi-rr-cross text-xl'></i>
                </button>
              </div>
              <div className='flex flex-col tracking-wide w-full gap-6 uppercase p-5 text-[#1663a3] font-semibold'>
                <NavLink 
                  to='/' 
                  className={({ isActive }: { isActive: boolean }) => 
                    `${isActive ? 'text-[#e67238]' : ''} py-3 border-b border-gray-700 hover:text-red-300 transition-colors`
                  }
                  onClick={() => setShowMenu(false)}
                >
                  Home
                </NavLink>
                <NavLink 
                  to='/about-us' 
                  className={({ isActive }: { isActive: boolean }) => 
                    `${isActive ? 'text-[#e67238]' : ''} py-3 border-b border-gray-700 hover:text-red-300 transition-colors`
                  }
                  onClick={() => setShowMenu(false)}
                >
                  About Us
                </NavLink>
                <NavLink 
                  to='/services' 
                  className={({ isActive }: { isActive: boolean }) => 
                    `${isActive ? 'text-[#e67238]' : ''} py-3 border-b border-gray-700 hover:text-red-300 transition-colors`
                  }
                  onClick={() => setShowMenu(false)}
                >
                  Services
                </NavLink>
                <NavLink 
                  to='/' 
                  className={({ isActive }: { isActive: boolean }) => 
                    `${isActive ? 'text-[#e67238]' : ''} py-3 border-b border-gray-700 hover:text-red-300 transition-colors`
                  }
                  onClick={() => setShowMenu(false)}
                >
                  Jobs
                </NavLink>
                <NavLink 
                  to='/contact-us' 
                  className={({ isActive }: { isActive: boolean }) => 
                    `${isActive ? 'text-[#e67238]' : ''} py-3 border-b border-gray-700 hover:text-red-300 transition-colors`
                  }
                  onClick={() => setShowMenu(false)}
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;