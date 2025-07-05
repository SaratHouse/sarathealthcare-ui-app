import { useLocation } from "react-router-dom";
import { ComplexCare, DementiaCare, EndofLifeCare, LiveInCare, PersonalCare, RespiteCare } from "../../constant/images";

interface Service {
  icon: string;
  description: string;
  title: string;
}

const serviceList: Service[] = [
  {
    icon: PersonalCare,
    description: "Our personal care services are designed to support you with daily activities such as bathing, dressing, meal preparation, and mobility. We focus on maintaining your dignity and independence while ensuring your safety and well-being at home.",
    title: "Personal Care",
  },
  {
    icon: DementiaCare,
    description: "We provide specialized dementia care tailored to the unique needs of individuals living with dementia. Our compassionate caregivers are trained to promote safety, comfort, and quality of life, helping clients and their families navigate this journey with confidence.",
    title: "Dementia Care",
  },
  {
    icon: LiveInCare,
    description: "For round-the-clock support, our live-in care services offer a dedicated caregiver who lives with you in your home. This ensures continuous care, companionship, and peace of mind for you and your loved ones. We have the right staff for you at all times.",
    title: "Live-in Care",
  },
  {
    icon: RespiteCare,
    description: "Caring for a loved one can be rewarding but challenging. Our respite care services provide temporary relief for family caregivers, ensuring your loved one continues to receive high-quality care while you take a well-deserved break.",
    title: "Respite Care",
  },
  {
    icon: ComplexCare,
    description: "We specialize in providing complex care for individuals with chronic illnesses, disabilities, or medical conditions that require specialized attention. Our highly trained staff work closely with healthcare professionals to deliver quality care.",
    title: "Complex Care",
  },
  {
    icon: EndofLifeCare,
    description: "Our end-of-life care services focus on providing comfort, dignity, and emotional support during life's final stages. We work closely with families and healthcare providers to ensure compassionate care that honors your loved one's wishes.",
    title: "End-of-life Care",
  },
]

export default function ServiceCarousel() {
  const {pathname}  = useLocation();
  const isServicesPage = pathname === '/services';
  
  return (
    <div className={`${!isServicesPage ? '' : ''} w-full flex justify-center items-end py-14 lg:py-24 px-4 bg-background`}>
      <div className="flex flex-col lg:gap-10 w-full max-w-7xl">
        { !isServicesPage && (
          <div className="text-left">
            <div className="text-[#e67238] uppercase tracking-widest font-semibold mb-2">
              Our Services
            </div>
            <h2 className="font-bold tracking-wide text-2xl lg:text-4xl text-[#1663a3]">
              Special High-quality Services
            </h2>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {serviceList.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              isServicesPage={isServicesPage}
            />
          ))}
        </div>
        
        {!isServicesPage && (
          <div className="mt-8 text-center">
            <a 
              href="/services" 
              className="text-[#e67238] bg-white font-bold text-sm hover:border-b-4 border-[#1663a3] px-10 p-4 rounded-lg"
            >
              READ MORE
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// Service Card Component
function ServiceCard({ service, isServicesPage }: { 
  service: Service; 
  isServicesPage: boolean;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#1663a3] transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col h-full">
        <h3 className="font-bold text-xl text-[#1663a3] mb-3">
          {service.title}
        </h3>
        
        <p className="text-gray-600 mb-5 flex-grow">
          {isServicesPage 
            ? service.description 
            : `${service.description.substring(0, 120)}...`}
        </p>
        
        <div className="mt-auto">
          <a 
            href="/services" 
            className="text-[#e67238] font-semibold hover:underline flex items-center"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}