import { NavLink } from "react-router-dom";
import {
  caregiver,
} from "../../constant/images";
import ServiceCarousel from "../reuseables/serviceCarousel";
import TestimonialCarousel from "../reuseables/testimonialCarousel";
import Partners from "../reuseables/partners";
import Recruitment from "../reuseables/recruitment";

const Home = () => {
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
            <div className="text-lg text-center lg:w-3/5">
              We Are Here For You
            </div>
            <div className="text-4xl text-center hover:text-white text-[#006dad] hover:bg-[#006dad] bg-white/60 px-10 p-4 font-bold tracking-widest">
              Professional and Friendly <br/> Health Care For You
            </div>
            <div className="text-lg text-center w-4/5">
              At SaratHealthcare, we provide personalised, compassionate care tailored to meet the unique needs of our clients in Southampton, Hampshire, and surrounding areas.
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
      <div className="grid scroll-mt-32 grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-16 w-full max-w-7xl px-4 lg:py-24 py-16">
        <div className="flex flex-col w-full h-full relative text-sm mx-auto space-y-2 lg:mb-0 mb-80">
          <img
            alt="[object Object] Illustration"
            loading="lazy"
            className="h-72 absolute lg:-top-2 object-cover rounded-xl shadow-lg shadow-orange-700/40"
            decoding="async"
            data-nimg="1"
            src={caregiver}
          />
          <div className="bg-[#006dad] text-white lg:w-2/5 w-3/4 rounded-2xl absolute right-0 lg:-bottom-10 -bottom-14 p-5 z-20">
            <div className="text-xl font-medium">Open Hours</div>
            <div className="flex flex-col text-xs gap-2 items-center mt-4 w-full">
              <div className="flex w-full items-center justify-between">
                <div>Monday :</div>
                <div>08.00 - 10.00</div>
              </div>
              <div className="flex w-full items-center justify-between">
                <div>Tuesday :</div>
                <div>08.00 - 10.00</div>
              </div>
              <div className="flex w-full items-center justify-between">
                <div>Wednesday :</div>
                <div>08.00 - 10.00</div>
              </div>
              <div className="flex w-full items-center justify-between">
                <div>Thursday :</div>
                <div>08.00 - 10.00</div>
              </div>
              <div className="flex w-full items-center justify-between">
                <div>Friday :</div>
                <div>08.00 - 10.00</div>
              </div>
              <div className="flex w-full items-center justify-between">
                <div>Saturday :</div>
                <div>08.00 - 10.00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-medium tracking-wider capitalize text-xl text-[#e67238]">
            About Us
          </div>
          <div className="font-bold tracking-wider text-2xl lg:text-4xl text-[#1663a3] lg:w-2/3">
            Professional Health Care in Full Measure
          </div>
          <p className="whitespace-pre-wrap text-base lg:text-lg text-gray-600 lg:w-4/5 mt-5">
            Our unique screening ensures our healthcare professionals, from NVQ to BSc Nursing graduates, possess the right qualifications, essential training in Moving & Handling and Basic Life Support, and embody core values like Compassion, Dignity, and Respect to perfectly meet client needs.
          </p>
        </div>

      </div>
     
      <ServiceCarousel/>
      <TestimonialCarousel/>
      <Recruitment/>
      <Partners/>
    </div>
  );
};

export default Home;