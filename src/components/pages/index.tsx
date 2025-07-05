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
          <div className="flex flex-col gap-3 text-white justify-center items-center lg:w-1/2 lg:p-10 text-lg">
            <div className="text-lg text-center lg:w-3/5">
              Home
            </div>
            <div className="lg:text-4xl text-3xl text-center text-white hover:bg-[#006dad] bg-black/60 lg:px-10 p-4 font-bold tracking-widest">
              Compassionate Care Where You Need It Most
            </div>
            <div className="lg:text-lg text-base text-center lg:w-4/5">
              At Sarat Healthcare Ltd., we provide compassionate, high-quality, CQC-registered domiciliary care across London and its environs.
            </div>
          </div>
        </div>
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
                <div>09.00 AM - 6.00 PM</div>
              </div>
              <div className="flex w-full items-center justify-between">
                <div>Tuesday :</div>
                <div>09.00 AM - 6.00 PM</div>
              </div>
              <div className="flex w-full items-center justify-between">
                <div>Wednesday :</div>
                <div>09.00 AM - 6.00 PM</div>
              </div>
              <div className="flex w-full items-center justify-between">
                <div>Thursday :</div>
                <div>09.00 AM - 6.00 PM</div>
              </div>
              <div className="flex w-full items-center justify-between">
                <div>Friday :</div>
                <div>09.00 AM - 6.00 PM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-medium tracking-wider capitalize text-xl text-[#e67238]">
            About Us
          </div>
          <div className="font-bold tracking-wider text-2xl lg:text-3xl text-[#1663a3] lg:w-2/3">
            Compassionate Care Where You Need It Most
          </div>
          <p className="whitespace-pre-wrap text-base text-gray-700 lg:w-4/5 mt-5">
            At Sarat Healthcare Ltd., we provide compassionate, high-quality, CQC-
            registered domiciliary care across London and its environs. We are rated
            “Overall Good&quot; by the Care Quality Commission, we are committed to
            helping adults of all ages live with independence, dignity, and comfort in
            their own homes. We provide personalised care packages that reflect the
            unique preferences and needs of our service users.
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