// import {useEffect, useState}  from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { AlertProvider } from '../utils/notification/alertcontext';
import Alert from '../utils/notification/alert';

// import Onboarding from '../components/onboarding/index'
import {About, Booking, Career, Home, News, NewsDetail, NotFound, Services} from '../components/pages/_route';
// import Navbar from '../components/reuseables/navbar';
// import Footer from '../components/reuseables/footer';
import { useRef, useEffect } from 'react';

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
    <div ref={containerRef} className='bg-white flex flex-col items-center w-full overflow-auto h-screen'>
      {/* <Navbar/> */}
      <AlertProvider>
      <Alert />  
      <main className='w-full'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/updates" element={<News/>} />
          <Route path="/updates/:id" element={<NewsDetail/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/careers" element={<Career/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </main>
      </AlertProvider>
      {/* <Footer /> */}
    </div>
  )
}

export default IndexRoutes;