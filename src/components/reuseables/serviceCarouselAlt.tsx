import parse from 'html-react-parser';
import { FaUserNurse, FaHome, FaBrain, FaHandHoldingHeart, FaUtensils } from 'react-icons/fa';
import { FaPeopleArrows } from 'react-icons/fa6';

interface Service {
  description: string;
  title: string;
}

const serviceList: Service[] = [
  {
    description: `
      <div className='flex flex-col w-full gap-3'>
        <ul className="space-y-2">
          <li><b>Assistance with bathing, grooming, hygiene:</b> Supporting service users maintain self-care and feel confident in their appearance.</li>
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
      <div className='flex flex-col w-full gap-3'>
        <ul className="space-y-2">
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
      <div className='flex flex-col w-full gap-3'>
        <ul className="space-y-2">
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
      <div className='flex flex-col w-full gap-3'>
        <ul className="space-y-2">
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
      <div className='flex flex-col w-full gap-3'>
        <ul className="space-y-2">
          <li><b>Tailored Light Meal Support:</b> We support service users to stay on their dietary needs, cultural preferences, and medical requirements. Every dish is prepared with care, whether it’s for diabetes management, vegetarian diets, or allergen-sensitive meals.</li>
          <li><b>Domestic Help & Housekeeping:</b> Light cleaning, laundry, bed-making, and other home upkeep tasks are handled with professionalism, ensuring your space is safe, tidy, and comforting.</li>
          <li><b>Daily Living Support:</b> From reminders to drink water to encouraging healthy habits, we promote better lifestyle choices through compassionate, unobtrusive care.</li>
        </ul>
      </div>
    `,
    title: "Nutrition & Social Support",
  },
  {
    description: `
      <div className='flex flex-col w-full gap-3'>
        <ul className="space-y-2">
          <li><b>One-to-One Companionship Visits:</b> Whether you enjoy a cup of tea and a chat, reading, or doing puzzles, our carers are there to spend quality time, matched to your interests.</li>
          <li><b>Accompanied Outings:</b> From shopping trips and nature walks to GP appointments and community events, we will support you to stay connected with your world.</li>
          <li><b>Social Engagement:</b> Encouraging involvement in activities that bring joy, confidence, and stimulation, all while respecting your preferences and routines.</li>
        </ul>
      </div>
    `,
    title: "Companionship",
  },
]

// Icon mapping for services
const serviceIcons = {
  "Personal Care": FaUserNurse,
  "Live-In and Supported Living": FaHome,
  "Dementia and Mental Health Support": FaBrain,
  "Palliative, Respite & End-of-Life Care": FaHandHoldingHeart,
  "Nutrition & Social Support": FaUtensils,
  "Companionship": FaPeopleArrows,
};

export default function ServiceCarouselAlt() {
  return (
    <div className="w-full flex justify-center bg-gradient-to-br from-[#f4e8e3] to-[#e6f0fa] py-16 px-4">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-16">
          <div className="text-[#e67238] uppercase tracking-widest font-semibold mb-3">
            Our Care Services
          </div>
          <h2 className="font-bold text-3xl md:text-4xl text-[#1663a3] mb-4">
            Special High-Quality Services
          </h2>
          <div className="w-24 h-1 bg-[#e67238] mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
            Comprehensive care solutions tailored to individual needs with compassion and expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}

function ServiceCard({ service, index }: { 
  service: Service; 
  index: number;
}) {
  // Get the appropriate icon component for this service
  const IconComponent = serviceIcons[service.title as keyof typeof serviceIcons];
  
  return (
    <div className="bg-white relative w-full rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="relative">        
        {/* Icon header */}
        <div className={`${index % 2 === 0 ? 'bg-[#1663a3]' : 'bg-[#e67238]'} p-6 flex justify-center`}>
          {IconComponent && (
            <div className={`${index % 2 === 0 ? 'bg-[#e67238]' : 'bg-[#1663a3]'} text-white w-14 h-14 font-bold rounded-full flex items-center justify-center`}>
              <IconComponent className="text-white text-4xl" />
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-xl text-[#1663a3] mb-4">
          {service.title}
        </h3>
        
        <div className="text-gray-600 text-sm leading-relaxed mb-10">
          {service.description ? parse(service.description) : '---'}
        </div>
        
        <div className="absolute left-0 bottom-7 flex flex-col items-center w-full">
          <div className={`${index % 2 === 0 ? 'bg-[#e67238]' : 'bg-[#1663a3]'} w-12 h-1`}></div>
        </div>
      </div>
    </div>
  );
}