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
            <div className="text-lg text-center text-white font-medium lg:w-3/5">
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
      
      <div className="w-full flex flex-col items-center bg-gradient-to-br from-[#005a94] to-[#006dad] py-16 px-4">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl text-white mb-3">
              Our Guiding Principles
            </h2>
            <div className="w-24 h-1 bg-[#e67238] mx-auto"></div>
            <p className="text-[#a0d1ff] mt-4 max-w-2xl mx-auto">
              These core values define who we are and how we deliver exceptional care to every client
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Respect",
                description: "We honour individual backgrounds and ensure dignity is upheld at all times.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                )
              },
              {
                title: "Compassion",
                description: "Our carers go beyond duty with empathy and human connection.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                title: "Competence",
                description: "All staff are DBS-checked and trained to deliver exceptional care.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Transparency",
                description: "We believe in honest conversations, clear reporting, and active feedback.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                title: "Inclusion",
                description: "Our services are equitable, culturally sensitive, and non-discriminatory.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 rounded-xl bg-[#0d7bc0] bg-opacity-30 backdrop-blur-sm border border-[#2a8fd4] transform transition-all duration-300 hover:bg-opacity-50 hover:scale-[1.03]"
              >
                <div className="mb-4 p-3 rounded-full bg-[#006dad] border border-[#2a8fd4]">
                  {value.icon}
                </div>
                <h3 className="font-bold text-xl text-white mb-2">{value.title}</h3>
                <p className="text-[#c7e4ff] text-center text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="w-full flex justify-center bg-white py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">
          {/* Image Section with Creative Overlay */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img
              alt="Caregiver with patient"
              src={caregiver}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay with Opening Hours */}
            <div className="absolute bottom-6 right-6 bg-white rounded-xl shadow-lg w-64 p-5 z-20 border-l-4 border-[#e67238]">
              <div className="text-lg font-bold text-[#1663a3] mb-4">Opening Hours</div>
              <div className="space-y-3">
                {[
                  { day: "Mon - Fri", time: "9:00 AM - 6:00 PM" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{item.day}</span>
                    <span className="text-[#e67238] font-semibold">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-6">
            <div className="inline-block text-[#e67238] font-medium tracking-wider uppercase text-sm border-l-4 border-[#e67238] pl-3 py-1">
              About Our Organization
            </div>
            
            <h2 className="font-bold text-3xl md:text-4xl text-[#1663a3]">
              Compassionate Care <span className="text-[#e67238]">Since 2010</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              Sarat Healthcare Ltd. is an award-winning provider of personalised home care services 
              for vulnerable adults aged 16 and over. We are passionate about delivering services 
              that promote independence, dignity, and personal choice.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              We create care plans in partnership with our service users and their families to ensure 
              every preference, belief, and goal is respected and reflected in our delivery.
            </p>
            
            <div className="mt-6 bg-[#f4e8e3] rounded-xl p-5 border-l-4 border-[#1663a3]">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e67238] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg text-[#1663a3]">CQC "Overall Good" Rating</h3>
                  <p className="text-gray-600 mt-1">
                    A reflection of our dedication to maintaining high standards in care, 
                    compliance, and quality assurance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <NavLink to={'/contact-us'} className="bg-[#1663a3] hover:bg-[#0d4a7a] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                Get to Know
              </NavLink>
              <NavLink to={'/services'} className="border-2 border-[#1663a3] text-[#1663a3] hover:bg-[#1663a3] hover:text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                View Our Services
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <ServiceCarousel/>
      <Recruitment/>
      <TestimonialCarousel/>
      <Partners/> 
    </div>
  );
};

export default About;
