import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  caregiver,
} from "../../constant/images";
import ServiceCarousel from "../reuseables/serviceCarousel";
import TestimonialCarousel from "../reuseables/testimonialCarousel";
import Partners from "../reuseables/partners";
import Recruitment from "../reuseables/recruitment";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#careers") {
      const careersSection = document.getElementById("careers");
      if (careersSection) {
        careersSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full h-[35rem] relative">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/bgVideoAboutUs.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay Content */}
        <div className="z-10 absolute flex flex-col justify-center items-center h-full w-full bg-black/30">
          <div className="flex flex-col gap-3 text-white justify-center items-center lg:w-1/2 p-10 text-lg">
            <div className="text-lg text-center text-[#006dad] font-semibold lg:w-3/5">
              <NavLink to="/">
                <span className="hover:text-white">
                  Home
                </span>
              </NavLink> / About Us
            </div>
            <div className="text-4xl text-center text-white hover:bg-[#006dad] bg-black/60 px-10 p-4 font-bold tracking-widest">
              About Us
            </div>
          </div>
        </div>
      </div>
      <div className="grid scroll-mt-32 grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-16 w-full max-w-7xl px-4 lg:py-24 py-16">
        <div className="flex flex-col w-full h-full relative text-sm mx-auto space-y-2 lg:mb-0 mb-80">
          <img
            alt="[object Object] Illustration"
            loading="lazy"
            className="h-80 absolute lg:-top-2 object-cover rounded-xl shadow-lg shadow-orange-700/40"
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
            Who We Are
          </div>
          <p className="whitespace-pre-wrap text-base lg:text-lg text-gray-600 lg:w-4/5 mt-5">
            Sarat Healthcare Ltd. is an award-winning provider of personalised home care services for vulnerable adults aged 16 and over. We are passionate about delivering services that promote independence, dignity, and personal choice.
          </p>
          <p className="whitespace-pre-wrap text-base lg:text-lg text-gray-600 lg:w-4/5 mt-5">
            We create care plans in partnership with our service users and their families to ensure every preference, belief, and goal is respected and reflected in our delivery. Our CQC "Overall Good" rating is a reflection of our dedication to maintaining high standards in care, compliance, and quality assurance.
          </p>
        </div>

      </div>

      <div className="w-full flex flex-col items-center text-white bg-[#006dad] py-14 lg:py-24 px-4">
        <div className="flex flex-col items-center gap-5 md:gap-10 w-full max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 w-full items-center border-gray-200">
            <div className="font-semibold text-3xl lg:text-4xl text-left ">
              Core Values
            </div>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 w-full">
            <div className="flex flex-col gap-2 items-center p-5 border-2 border-white">
              <div className="flex flex-row items-center gap-5">
                <span className="font-semibold text-lg">Respect</span>
              </div>
              <div className="text-sm text-center leading-6">
                We honour individual backgrounds and ensure dignity is upheld at all times.
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center p-5 border-2 border-white">
              <div className="flex flex-row items-center gap-5">
                <span className="font-semibold text-lg">Compassion</span>
              </div>
              <div className="text-sm text-center leading-6">
                Our carers go beyond duty with empathy and human connection.
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center p-5 border-2 border-white">
              <div className="flex flex-row items-center gap-5">
                <span className="font-semibold text-lg">Competence</span>
              </div>
              <div className="text-sm text-center leading-6">
                All staff are DBS-checked and trained to deliver exceptional care.
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center p-5 border-2 border-white">
              <div className="flex flex-row items-center gap-5">
                <span className="font-semibold text-lg">Transparency</span>
              </div>
              <div className="text-sm text-center leading-6">
                We believe in honest conversations, clear reporting, and active feedback.
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center p-5 border-2 border-white">
              <div className="flex flex-row items-center gap-5">
                <span className="font-semibold text-lg">Inclusion</span>
              </div>
              <div className="text-sm text-center leading-6">
                Our services are equitable, culturally sensitive, and non-discriminatory.
              </div>
            </div>
          </div>
        </div>

      </div>

      <ServiceCarousel/>
      <TestimonialCarousel/>
      <Recruitment/>
      <Partners/> 
    </div>
  );
};

export default About;
