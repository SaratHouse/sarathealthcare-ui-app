import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AlertProvider } from '../utils/notification/alertcontext';
import Alert from '../utils/notification/alert';
import { About, Booking, Career, Home, News, NewsDetail, NotFound, Services } from '../components/pages/_route';
// import Navbar from '../components/reuseables/navbar';
// import Footer from '../components/reuseables/footer';

const IndexRoutes = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll window to top on route change
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  
  return (
    <div className='bg-white flex flex-col items-center w-full relative min-h-screen'>
      <AlertProvider>
        {/* <Navbar/> */}
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
        {/* <Footer /> */}
      </AlertProvider>
    </div>
  )
}

export default IndexRoutes;