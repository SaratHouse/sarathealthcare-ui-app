import {
  caregiver,
} from "../constant/images";
import ServiceCarousel from "../components/reuseables/serviceCarousel";
import TestimonialCarousel from "../components/reuseables/testimonialCarousel";
import Partners from "../components/reuseables/partners";
import Recruitment from "../components/reuseables/recruitment";
import { NavLink } from "react-router-dom";

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
            <div className="lg:text-4xl text-3xl text-center text-white  lg:px-10 p-4 font-bold tracking-widest">
              Compassionate Care Where You Need It Most
            </div>
            <div className="lg:text-lg text-base text-center lg:w-4/5">
              At Sarat Healthcare Ltd, we specialise in delivering bespoke homecare, dementia care, personal care, live in support, respite, companionship and learning disabilities support. <br/>  <br/>  Our team of qualified carers, support workers, and nurses offer compassionate support, enabling clients to live safely and independently at home. We proudly serve individuals, families, local authorities, and direct payment clients across London and environs
            </div>
            <div className="mt-8 flex md:flex-row flex-col flex-wrap gap-4">
              <NavLink
                to="/careers"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#1663a3] to-[#0d4a7a] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#1663a3]/30 border-2 border-white"
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
      <div className="w-full flex justify-center bg-white py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full max-w-7xl">
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
              About Our Organisation
            </div>
            
            <h2 className="font-bold text-3xl md:text-4xl text-[#1663a3]">
              Compassionate Care
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              Sarat Healthcare Ltd, is a bespoke homecare provider dedicated to transforming lives through compassionate, personalised and safe homecare services. Proudly based in Barking, England, we support children, adults, and the elderly, empowering vulnerable individuals to live safely with independence, dignity, and joy in the comfort of their own homes. We are rated "Overall Good" by the Care Quality Commission (CQC), our commitment to exceptional care shines through in everything we do.  We believe care is personal, that is why we work closely with you and your loved ones to create tailored care plans that honour your unique preferences, beliefs, and aspirations. Led by a team of experienced, compassionate and caring team.
            </p>
                        
            <div className="flex flex-wrap gap-4 mt-8">
              <NavLink to={'/about-us'} className="bg-[#1663a3] hover:bg-[#0d4a7a] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                Read more
              </NavLink>
            </div>

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
              <NavLink to={'/services'} className="border-2 border-[#1663a3] text-[#1663a3] hover:bg-[#1663a3] hover:text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                View Our Services
              </NavLink>
              <NavLink to={'/contact-us'} className="bg-[#1663a3] hover:bg-[#0d4a7a] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                Get to Know
              </NavLink>
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

export default Home;