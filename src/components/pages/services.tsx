import { NavLink } from "react-router-dom";
import TestimonialCarousel from "../reuseables/testimonialCarousel";
import ServiceCarouselAlt from "../reuseables/serviceCarouselAlt";
import Partners from "../reuseables/partners";

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
          <source src="/videos/bgVideoHome.mp4" type="video/mp4" />
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
            <div className="text-3xl lg:text-4xl text-center text-white hover:bg-[#006dad] bg-black/60 lg:px-10 mx-3 lg:mx-0 p-4 font-bold tracking-widest">
              Tailored, Comprehensive Care
            </div>
            <div className="lg:text-lg text-base text-center lg:w-4/5">
              We provide a broad range of CQC-regulated care services tailored to each individual’s health, social, and emotional needs. Our team consists of experienced and empathetic professionals committed to delivering the highest standards of care.
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
