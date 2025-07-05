import { useLocation } from "react-router-dom";

interface Service {
  description: string;
  title: string;
}

const serviceList: Service[] = [
  {
    description: "Bespoke care to help individuals maintain independence while receiving the support they need, either in their homes or supported environments",
    title: "Personal Care & Supported Living",
  },
  {
    description: "Specialist care services tailored to those with neurological or developmental conditions, ensuring safety, routine, and dignity.",
    title: "Dementia Needs",
  },
  {
    description: "We design compassionate care that offers comfort, symptom control, and emotional support for clients and families during critical times.",
    title: "Respite Care",
  },
  {
    description: "From cooking to cleaning and emotional engagement, we ensure your loved one’s everyday life is easier and brighter.",
    title: "Domestic & Companionship",
  }
]

export default function ServiceCarousel() {
  const {pathname}  = useLocation();
  const isServicesPage = pathname === '/services';
  
  return (
    <div className={`${!isServicesPage ? '' : ''} w-full flex justify-center items-end py-14 lg:py-24 px-4 bg-[#e67238]`}>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-10 w-full max-w-7xl">
        <div className="text-left px-4 py-2">
          <div className="font-bold tracking-wide text-2xl lg:text-4xl text-white ">
            What 
            <span className="block lg:text-7xl text-4xl">We Offer</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 lg:w-3/5">
          {serviceList.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Service Card Component
function ServiceCard({ service }: { 
  service: Service;
}) {
  return (
    <div className="bg-background bg-opacity-10 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col p-6 rounded-lg bg-black/65 h-full">
        <h3 className="font-bold text-xl text-[#53b1ff] mb-3">
          {service.title}
        </h3>
        
        <p className="text-white mb-5 flex-grow bottom-0">
          {service.description}
        </p>
      </div>
    </div>
  );
}