import { useLocation } from "react-router-dom";
import parse from 'html-react-parser';

interface Service {
  description: string;
  title: string;
}

const serviceList: Service[] = [
  {
    description: `
      <div className='flex flex-col w-full gap-5 px-5'>
        <ul className="list-oustide list-disc gap-2">
          <li><b>Assistance with bathing, grooming, hygiene:</b> Helping service users maintain self-care and feel confident in their appearance.</li>
          <li><b>Dressing, continence care:</b> Ensuring comfort, cleanliness, and dignity every day.</li>
          <li><b>Medication reminders and administration:</b> Timely and safe medication support following care plans and prescriptions.</li>
          <li><b>Mobility support:</b> From walking aids to transfers, we ensure clients move safely.</li>
        </ul>
      </div>
    `,
    title: "Personal Care",
  },
  {
    description: `
      <div className='flex flex-col w-full gap-5 px-5'>
        <ul className="list-outside list-disc">
          <li><b>24/7 home-based care:</b> Peace of mind and uninterrupted care in the comfort of home.</li>
          <li><b>Flexible, round-the-clock assistance:</b> Adapting to your needs at any time, day or night.</li>
          <li><b>Daily living support and companionship:</b> From routines to relationships, our carers are true companions.</li>
        </ul>
      </div>
    `,
    title: "Live-In and Supported Living",
  },
  {
    description: `
      <div className='flex flex-col w-full gap-5 px-5'>
        <ul className="list-outside list-disc">
          <li><b>Specialist care for dementia and mental health conditions:</b> Delivered by trained professionals who understand behavioural and emotional needs.</li>
          <li><b>Activities to promote wellbeing:</b> We create structured routines to stimulate memory, engagement and mood.</li>
          <li><b>Support managing challenging behaviours:</b> With patience, skill and respect.</li>
        </ul>
      </div>
    `,
    title: "Dementia and Mental Health Support",
  },
  {
    description: `
      <div className='flex flex-col w-full gap-5 px-5'>
        <ul className="list-outside list-disc">
          <li><b>Symptom management and compassionate support:</b> Enhancing quality of life during difficult periods.</li>
          <li><b>Dignified care through life's final stages:</b> Respectful, gentle, and loving care.</li>
          <li><b>Family support:</b> We’re there for families with practical and emotional guidance.</li>
        </ul>
      </div>
    `,
    title: "Palliative, Respite & End-of-Life Care",
  },
  {
    description: `
      <div className='flex flex-col w-full gap-5 px-5'>
        <ul className="list-outside list-disc">
          <li><b>Dietary support:</b> Healthy, personalised meals served with care.</li>
          <li><b>Light housekeeping and laundry:</b> Ensuring a clean, safe, and comforting home environment.</li>
          <li><b>Social outings and companionship:</b> Reducing loneliness, promoting joy, and improving wellbeing.</li>
        </ul>
      </div>
    `,
    title: "Nutrition, Domestic & Social Support",
  },
]

export default function ServiceCarouselAlt() {
  
  return (
    <div className={`w-full flex justify-center items-end py-14 lg:py-24 px-4 bg-background`}>
      <div className="flex flex-col lg:gap-10 w-full max-w-7xl">
      <div className="text-left">
        <div className="text-[#e67238] uppercase tracking-widest font-semibold mb-2">
          Our Services
        </div>
        <h2 className="font-bold tracking-wide text-2xl lg:text-4xl text-[#1663a3]">
          Special High-quality Services
        </h2>
      </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-8 mt-10">
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
    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#1663a3] transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col h-full">
        <h3 className="font-bold text-xl text-[#1663a3] mb-3">
          {service.title}
        </h3>
        
        <div className='w-full leading-relaxed text-sm'>
          {service.description ? parse(service.description) : '---'}
        </div>
        
        
      </div>
    </div>
  );
}