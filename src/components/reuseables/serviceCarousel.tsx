import { FaBrain, FaWheelchair } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

interface Service {
  description: string;
  title: string;
  icon: any;
}

const serviceList: Service[] = [
  {
    description: "Bespoke care to help individuals maintain independence while receiving the support they need, either in their homes or supported environments",
    title: "Personal Care & Supported Living",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#e67238]" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "Dementia Needs",
    description: "Specialist care services tailored to those with neurological or developmental conditions, ensuring safety, routine, and dignity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#e67238]" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    )
  },
  {
    title: "Respite Care",
    description: "We design compassionate care that offers comfort, symptom control, and emotional support for clients and families during critical times.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#e67238]" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "Domestic & Companionship",
    description: "From cooking to cleaning and emotional engagement, we ensure your loved one’s everyday life is easier and brighter.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#e67238]" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "Support for Individuals with Learning Disabilities",
    description: "Empowering independence with compassionate, person-centered care, Sarat Healthcare supports individuals with learning disabilities to live confidently and safely at home. Our expert team fosters choice, celebrates strengths, and builds tailored routines.",
    icon: (
      <FaBrain className="h-12 w-12 text-[#e67238]"/>
    )
  },
  {
    title: "Support for Individuals with Physical Disabilities",
    description: "We provide practical care outcomes to individuals living with mobility challenges or physical disabilities tailored to fit each person’s unique routines, home setup, and goals. Whether it is stroke, spinal cord injury, muscular dystrophy, or all kinds of physical disabilities, we ensure you're supported in the most empathetic manner.",
    icon: (
      <FaWheelchair className="h-12 w-12 text-[#e67238]"/>
    )
  }
]

export default function ServiceCarousel() {  
  return (
    <div className="relative w-full flex flex-col items-center py-20 px-4 overflow-hidden">
  {/* Background image with overlay */}
  <div className="absolute inset-0 z-0">
    <div className="bg-background bg-cover bg-center w-full h-full " />
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a3a5f] to-[#0d7bc0] opacity-80" />
  </div>
  
  <div className="relative z-10 w-full max-w-7xl">
    <div className="text-center mb-16">
      <div className="text-[#e67238] uppercase tracking-widest font-semibold mb-3">
        Our Services
      </div>
      <h2 className="font-bold text-4xl md:text-5xl text-white mb-4">
        Special High-Quality Care
      </h2>
      <div className="w-24 h-1 bg-[#e67238] mx-auto mb-6"></div>
      <p className="text-[#a0d1ff] max-w-2xl mx-auto text-lg">
        We provide comprehensive care solutions tailored to individual needs with compassion and expertise
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {serviceList.map((service, index) => (
        <div 
          key={index} 
          className="bg-[#0d7bc0] bg-opacity-30 backdrop-blur-sm rounded-xl border border-[#2a8fd4] p-6 transition-all duration-300 hover:bg-opacity-50 hover:border-[#e67238] group"
        >
          <div className="mb-5 flex justify-center">
            <div className="bg-[#0a3a5f] p-4 rounded-full group-hover:bg-[#e67238] transition-colors duration-300">
              {service.icon}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white text-center mb-3">
            {service.title}
          </h3>
          
          <p className="text-[#c7e4ff] text-center mb-5">
            {service.description}
          </p>
          
          <div className="text-center">
            <a href="/services" className="text-white font-semibold hover:text-[#e67238] transition-colors duration-300 flex items-center justify-center mx-auto">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-16 text-center">
      <NavLink to={'/services'} className="bg-gradient-to-r from-[#e67238] to-[#d45a28] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
        View All Services
      </NavLink>
    </div>
  </div>
</div>
  );
}
