import { NavLink } from "react-router-dom";
import { recruitment } from "../../constant/images";


export default function Recruitment() {
  return (
    <div className="w-full flex justify-center bg-white py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">
        {/* Content Section */}
        <div className="space-y-8">
          <div className="inline-block text-[#e67238] font-medium tracking-wider uppercase text-sm border-l-4 border-[#e67238] pl-3 py-1">
            Building Exceptional Teams
          </div>
          
          <h2 className="font-bold text-3xl md:text-4xl text-[#1663a3]">
            Our <span className="text-[#e67238]">Recruitment</span> Process
          </h2>
          
          <p className="text-gray-600 leading-relaxed text-lg">
            Our unique screening ensures our healthcare professionals, from NVQ to BSc Nursing graduates, 
            possess the right qualifications, essential training in Moving & Handling and Basic Life Support, 
            and embody core values like Compassion, Dignity, and Respect to perfectly meet client needs.
          </p>
          
          {/* Recruitment Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              { 
                step: "01", 
                title: "Application Review", 
                description: "Thorough evaluation of qualifications and experience"
              },
              { 
                step: "02", 
                title: "Skills Assessment", 
                description: "Verification of clinical competencies"
              },
              { 
                step: "03", 
                title: "Value Alignment", 
                description: "Evaluation of core values and cultural fit"
              },
              { 
                step: "04", 
                title: "Final Interview", 
                description: "Comprehensive discussion with leadership team"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-start p-4 bg-[#f8f9fc] rounded-lg border-l-4 border-[#1663a3]"
              >
                <div className="text-2xl font-bold text-[#e67238] mr-4">{item.step}</div>
                <div>
                  <h3 className="font-semibold text-[#1663a3]">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <NavLink
              to="/careers"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#1663a3] to-[#0d4a7a] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#1663a3]/30"
            >
              <span>Join Our Team</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </NavLink>
            
            {/* <NavLink
              to="/about-us"
              className="flex items-center justify-center gap-2 border-2 border-[#1663a3] text-[#1663a3] font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-[#1663a3] hover:text-white"
            >
              <span>Learn More</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </NavLink> */}
          </div>
        </div>
        
        {/* Image Section */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <img
            alt="Recruitment process illustration"
            src={recruitment}
            className="w-full h-full object-cover"
          />
          
          {/* Stats Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <div className="grid grid-cols-3 gap-4 text-white">
              {/* <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">98%</div>
                <div className="text-xs md:text-sm">Retention Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">200+</div>
                <div className="text-xs md:text-sm">Team Members</div>
              </div> */}
              {/* <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">4.8★</div>
                <div className="text-xs md:text-sm">Satisfaction</div>
              </div> */}
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
