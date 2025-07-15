import { NavLink } from "react-router-dom";
import TestimonialCarousel from "../components/reuseables/testimonialCarousel";
import ServiceCarouselAlt from "../components/reuseables/serviceCarouselAlt";
import Partners from "../components/reuseables/partners";

const Services = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full h-[42rem] relative">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/bgVideoServices.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay Content */}
        <div className="z-10 absolute flex flex-col justify-center items-center h-full w-full bg-black/30">
          <div className="flex flex-col gap-3 text-white justify-center items-center lg:w-1/2 lg:p-10 text-lg">
            <div className="text-lg text-center text-white font-medium lg:w-3/5">
              <NavLink to="/">
                <span className="hover:text-white">
                  Home
                </span>
              </NavLink> / Our Services
            </div>
            <div className="text-3xl lg:text-4xl text-center text-white lg:px-10 mx-3 lg:mx-0 p-4 font-bold tracking-widest">
              Tailored, Comprehensive Care
            </div>
            <div className="lg:text-lg text-base text-center lg:w-4/5">
              We provide a broad range of CQC-regulated care services tailored to each individual’s health, social, and emotional needs. Our team consists of experienced and empathetic professionals committed to delivering the highest standards of care.
            </div>
            <div className="mt-8 flex md:flex-row flex-col flex-wrap gap-4">
              <NavLink
                to="/careers"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#1663a3] to-[#0d4a7a] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#1663a3]/30"
              >
                <span>Join Our Team</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </NavLink>
              
              <NavLink
                to="/contact-us"
                className="flex items-center justify-center gap-2 border-2 font-semibold py-3 px-8 rounded-lg transition-all duration-300 bg-[#e67238] text-white"
              >
                <span>Book Free Assessment</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <ServiceCarouselAlt/>
      <TestimonialCarousel/>
      <Partners/>
    </div>
  );
};

export default Services;
