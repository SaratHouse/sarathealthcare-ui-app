import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { useEffect, useState, useRef } from 'react';
import { FaClock, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { CQCRatings } from '../../constant/images';

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
      className={`flex flex-col items-center w-full z-50 bg-white  ${
        isScrolled 
          ? 'border-b border-black shadow-lg' 
          : ''
      } transition-all duration-300`}
    >
      <div className='flex flex-col items-center relative w-full'>
        <div className='hidden lg:flex flex-row justify-between items-center w-full max-w-7xl py-3'>
          <NavLink to='/'>
            <img src={logo} alt='logo' className='h-14'/>
          </NavLink>
          <div className='flex items-center gap-4 justify-end w-9/12 text-xs'>
            <div className='bg-blue-100 p-2 rounded-full flex items-center justify-center'>
              <FaLocationDot color='#1663a3'/>
            </div>
            <div className='pr-5 border-r-2 border-[#e67238]'>Jhumat House, 160 London Road, <br/> Barking, IG11 8BB</div>
            <div className='bg-blue-100 p-2 rounded-full flex items-center justify-center'>
              <FaPhone color='#1663a3'/>
            </div>
            <div className='pr-5 border-r-2 border-[#e67238]'>Call Us 24/7 <br/> 020 3667 3616, 077 3736 1681</div>
            <div className='bg-blue-100 p-2 rounded-full flex items-center justify-center'>
              <FaClock color='#1663a3'/>
            </div>
            <div className=''>Mon – Fri: <br/> 9:00 AM – 6:00 PM</div>
            <img 
              src={CQCRatings} 
              alt="Care Quality Commission" 
              className="h-12"
            />
          </div>
        </div>

        <div className='flex flex-col justify-between items-center lg:bg-[#1663a3] w-full lg:py-5 py-3 lg:px-0 px-3'>
          <div className='flex flex-row justify-between items-center w-full max-w-7xl'>
            <NavLink to='/' className='block lg:hidden'>
              <img src={logo} alt='logo' className='lg:h-14 h-10'/>
            </NavLink>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className={`tracking-widest flex flex-row gap-5 text-md items-center font-semibold text-white`}>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'border-b-2 border-[#e67238] font-semibold' : '')}>
                  Home
                </NavLink>
                <NavLink to='/about-us' className={({ isActive }) => (isActive ? 'border-b-2 border-[#e67238] font-semibold' : '')}>
                  About us
                </NavLink>
                <NavLink to='/services' className={({ isActive }) => (isActive ? 'border-b-2 border-[#e67238] font-semibold' : '')}>
                  Services
                </NavLink>
                <NavLink to='/careers' className={({ isActive }) => (isActive ? 'border-b-2 border-[#e67238] font-semibold' : '')}>
                  Careers
                </NavLink>
                <NavLink to='/contact-us' className={({ isActive }) => (isActive ? 'border-b-2 border-[#e67238] font-semibold' : '')}>
                  Contact Us
                </NavLink>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden block">
              <button 
                onClick={() => setShowMenu(true)}
                className={`text-[#1663a3] flex items-center justify-center w-10 h-10`}
                aria-label="Open menu"
              >
                <i className='fi fi-rr-menu-burger text-xl'></i>
              </button>
            </div>
           </div>
        </div>
      </div>

      <div className='flex flex-col lg:w-9/12 w-full max-w-7xl relative'>
        
        {/* Mobile Menu */}
        {showMenu && (
          <div className='fixed inset-0 bg-black/70 z-50'>
            <div className='flex flex-col w-4/5 h-full bg-white z-50'>
              <div className='flex flex-row items-center justify-between w-full p-3 border-b-2 border-[#1663a3]'>
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
              <div className='flex flex-col tracking-wide p-3 gap-4 w-full text-sm text-[#1663a3] font-semibold'>
                <NavLink 
                  to='/' 
                  className={({ isActive }: { isActive: boolean }) => 
                    `${isActive ? 'text-[#e67238]' : ''} hover:text-red-300 transition-colors`
                  }
                  onClick={() => setShowMenu(false)}
                >
                  Home
                </NavLink>
                <NavLink 
                  to='/about-us' 
                  className={({ isActive }: { isActive: boolean }) => 
                    `${isActive ? 'text-[#e67238]' : ''} hover:text-red-300 transition-colors`
                  }
                  onClick={() => setShowMenu(false)}
                >
                  About Us
                </NavLink>
                <NavLink 
                  to='/services' 
                  className={({ isActive }: { isActive: boolean }) => 
                    `${isActive ? 'text-[#e67238]' : ''} hover:text-red-300 transition-colors`
                  }
                  onClick={() => setShowMenu(false)}
                >
                  Services
                </NavLink>
                <NavLink 
                  to='/careers' 
                  className={({ isActive }: { isActive: boolean }) => 
                    `${isActive ? 'text-[#e67238]' : ''} hover:text-red-300 transition-colors`
                  }
                  onClick={() => setShowMenu(false)}
                >
                  Careers
                </NavLink>
                <NavLink 
                  to='/contact-us' 
                  className={({ isActive }: { isActive: boolean }) => 
                    `${isActive ? 'text-[#e67238]' : ''} hover:text-red-300 transition-colors`
                  }
                  onClick={() => setShowMenu(false)}
                >
                  Contact Us
                </NavLink>
              </div>

              <div className='mt-10 flex flex-col gap-3 text-xs p-5 bg-orange-100/50 rounded-lg'>
                <div className='flex gap-3 font-semibold items-center'>
                  <div className='bg-blue-100 p-2 rounded-full flex items-center justify-center'>
                    <FaLocationDot color='#1663a3'/>
                  </div>
                  <div className=''>Jhumat House, 160 London Road, Barking, IG11 8BB</div>
                </div>
                <div className='flex gap-3 font-semibold items-center'>
                  <div className='bg-blue-100 p-2 rounded-full flex items-center justify-center'>
                    <FaPhone color='#1663a3'/>
                  </div>
                  <div className=''>Call Us 24/7 020 3667 3616, 077 3736 1681</div>
                </div>
                <div className='flex gap-3 font-semibold items-center'>
                  <div className='bg-blue-100 p-2 rounded-full flex items-center justify-center'>
                    <FaClock color='#1663a3'/>
                  </div>
                  <div className=''>Mon – Fri: 9:00 AM – 6:00 PM</div>
                </div>
                <div className='flex gap-3 font-semibold items-center'>
                  <img 
                    src={CQCRatings} 
                    alt="Care Quality Commission" 
                    className="h-20"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;