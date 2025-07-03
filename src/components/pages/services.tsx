import { NavLink } from "react-router-dom";
import TestimonialCarousel from "../reuseables/testimonialCarousel";
import ServiceCarousel from "../reuseables/serviceCarousel";
import Partners from "../reuseables/partners";
import Recruitment from "../reuseables/recruitment";

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
          <div className="flex flex-col gap-3 text-white justify-center items-center lg:w-1/2 p-10 text-lg">
            <div className="text-4xl text-center hover:text-white text-[#006dad] hover:bg-[#006dad] bg-white/60 px-10 p-4 font-bold tracking-widest">
              Services
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-5">
              <NavLink
                className="flex h-[3rem] tracking-wider items-center justify-center rounded-lg px-10 font-semibold text-lg text-white bg-[#e67238] hover:!bg-[#1663a3] space-x-2"
                to="/"
              >
                <span className="">
                  Book Now
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-3 p-4 justify-center h-32 bg-[#e67238] text-white text-center font-bold">
        <div className="lg:border-r h-full">Something here</div>
        <div className="lg:border-r h-full">Something here</div>
        <div className="h-full">Something here</div>
      </div>

      <ServiceCarousel/>
      <Recruitment/>
      <TestimonialCarousel/>
      <Partners/>
    </div>
  );
};

export default Services;
