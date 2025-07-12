import { NavLink } from "react-router-dom";
import Partners from "../components/reuseables/partners";
import TestimonialCarouselAlt from "../components/reuseables/testimonialCarouselAlt";

const Career = () => {
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
          <source src="/videos/bgVideoCareer.mp4" type="video/mp4" />
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
              </NavLink> / Careers
            </div>
            <div className="text-3xl lg:text-4xl text-center text-white lg:px-10 mx-3 lg:mx-0 p-4 font-bold tracking-widest">
              Join Our Compassionate Team
            </div>
            <div className="lg:text-lg text-base text-center lg:w-4/5">
              If you’re looking for more than just a job, Sarat Healthcare offers a meaningful career where you’re valued, respected, and supported to grow.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-gradient-to-br from-[#f4e8e3] to-[#e6f0fa] py-16 px-4">
        <div className="w-full max-w-7xl">
          <div className="text-center">
            <h2 className="font-bold tracking-wider text-3xl md:text-4xl lg:text-5xl text-[#1663a3] mb-3">
              What We Offer
            </h2>
            <div className="w-20 h-1 bg-[#e67238] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-14 lg:my-16">
            {[
              {
                title: "Comprehensive training",
                subtitle: "(Care Certificate, NVQ 2–5)",
                description: "Gain qualifications while working with us.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-10 lg:w-10 w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Inclusive, supportive environment",
                subtitle: "",
                description: "A positive culture where your voice matters and contributions are recognised.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-10 lg:w-10 w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Competitive pay & flexible shifts",
                subtitle: "",
                description: "We value your time and dedication with fair, rewarding compensation.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-10 lg:w-10 w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Free DBS and uniforms",
                subtitle: "",
                description: "We invest in you from day one.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-10 lg:w-10 w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`
                  flex flex-col p-6 gap-4 bg-white rounded-xl shadow-lg
                  transform transition-all duration-500 hover:-translate-y-2
                  border-l-4 ${index % 2 === 0 ? 'border-[#1663a3]' : 'border-[#e67238]'}
                  relative overflow-hidden
                `}
              >
                {/* Icon badge */}
                <div className={`absolute top-6 right-6 p-3 rounded-full ${index % 2 === 0 ? 'bg-[#1663a3]' : 'bg-[#e67238]'}`}>
                  {item.icon}
                </div>
                
                <div>
                  <h3 className="text-xl w-4/5 font-bold text-[#1663a3]">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-[#e67238] font-semibold">{item.subtitle}</p>
                  )}
                </div>
                
                <p className="text-gray-600 w-full lg:w-4/5">{item.description}</p>
                
                <div className="mt-2">
                  <div className={`w-12 h-1 ${index % 2 === 0 ? 'bg-[#1663a3]' : 'bg-[#e67238]'}`}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <NavLink to={'/application'} className="bg-gradient-to-r from-[#1663a3] to-[#e67238] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
              Apply Now
            </NavLink>
          </div>
        </div>
      </div>
      <TestimonialCarouselAlt/>
      <Partners/>
    </div>
  );
};

export default Career;
