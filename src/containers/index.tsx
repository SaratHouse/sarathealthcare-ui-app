import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AlertProvider } from '../utils/notification/alertcontext';
import Alert from '../utils/notification/alert';
import { About, Career, Contact, Home, JobApplication, NotFound, Referee, Services } from '../pages/_route';
import Navbar from '../components/reuseables/navbar';
import Footer from '../components/reuseables/footer';

const IndexRoutes = () => {
  const { pathname } = useLocation();
  const containerRef = useRef<HTMLDivElement>(null); // Create ref

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  
  return (
    <div ref={containerRef} className='flex flex-col items-center w-full overflow-auto h-screen'>
      <AlertProvider>
        <Navbar/>
        <Alert />  
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/about-us" element={<About/>} />
            {/* <Route path="/contact-us" element={<Contact/>} /> */}
            <Route path="/careers" element={<Career/>} />
            <Route path="/application" element={<JobApplication/>} />
            <Route path="/referee/:id" element={<Referee/>} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
        <Footer />
      </AlertProvider>
    </div>
  )
}

export default IndexRoutes;