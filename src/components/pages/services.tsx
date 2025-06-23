import { NavLink } from "react-router-dom";
import parse from 'html-react-parser';
import { FaCircleCheck, FaHandHoldingHeart, FaUsers } from "react-icons/fa6";
import TestimonialCarousel from "../reuseables/testimonialCarousel";
import ServiceCarousel from "../reuseables/serviceCarousel";
import { elderlyCare } from "../../constant/images";

const Services = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full h-[42rem]">
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
        <div className="relative z-10 flex flex-col justify-center items-center h-full bg-black/70 text-white">
          <div className="flex flex-col items-center gap-7 lg:w-8/12 w-11/12">
            <div className="text-lg">
              Services
            </div>
            <div className="text-4xl lg:text-[2.6rem] hover:text-white text-[#1663a3] font-semibold tracking-widest">
              Sarat Healthcare.
            </div>
            <div className="text-lg text-center lg:w-3/5">
              At SaratHealthcare, we provide personalised, compassionate care tailored to meet the unique needs of our clients in Southampton, Hampshire, and surrounding areas. Whether you need support with personal care, live-in care, dementia care, or companionship, we’re here to help you live comfortably, safely, and independently at home.
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <NavLink
                className="flex h-[3rem] tracking-wider items-center justify-center rounded-lg px-10 font-semibold text-lg text-white hover:underline bg-[#e67238] hover:!bg-[#1663a3] space-x-2"
                to="/"
              >
                <FaHandHoldingHeart size={18}/>
                <span className="">
                  Looking for Care
                </span>
              </NavLink>
              <NavLink
                className="flex h-[3rem] tracking-wider items-center justify-center rounded-lg px-10 font-semibold text-lg text-white hover:underline bg-[#1663a3] hover:!bg-[#e67238] space-x-2"
                to="/"
              >
                <FaUsers size={18}/>
                <span className="">
                  Join Our Team
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <ServiceCarousel/>

      <div className="grid lg:grid-cols-3 lg:w-8/12 w-11/12 items-center">
          <img
            alt="[object Object] Illustration"
            loading="lazy"
            className="h-full w-full object-cover"
            decoding="async"
            data-nimg="1"
            src={elderlyCare}
          />
        <div className="flex flex-col lg:col-span-2 w-full bg-[#006dad] h-full py-20 text-white justify-center items-center">
          <h2 className="text-center font-semibold text-3xl lg:text-left lg:text-4xl lg:leading-[50px]">
            Why Choose Us ?
          </h2>
          <div className="text-lg mx-3 max-w-[480px] pt-2 text-center lg:mx-0 lg:text-left">
            At Sarat Healthcare, we believe in providing care that truly makes a difference. Here’s why families in Southampton and Hampshire trust us:
          </div>
          <div className="flex flex-col text-lg mx-3 max-w-[480px] space-y-2 my-5 lg:mx-0 lg:max-w-none">
            {[
              "<span className='font-semibold'> Personalised Care Plans:</span> Tailored to meet your unique needs.",
              "<span className='font-semibold'> Highly Trained Caregivers:</span> Compassionate, skilled, and reliable.",
              "<span className='font-semibold'> Local Expertise:</span> Serving Southampton and surrounding areas with pride.",
              "<span className='font-semibold'> 24/7 Support:</span> Always here when you need us.",
            ].map((text, index) => (
              <div
                key={index}
                className="flex flex-row relative gap-2 items-start"
              >
                <span className="top-1 absolute">
                  <FaCircleCheck className="text-[#e67238]" size={16} />
                </span>
                <div className="ml-7 -pt-2">{text ? parse(text) : '---'}</div>
              </div>
            ))}
          </div>
        </div>
        
      </div>

      <TestimonialCarousel/>

      <div className="flex flex-col items-center bg-[#f4e8e3] gap-3 w-full mt-10 py-16">
        <div className="grid scroll-mt-32 grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-16 lg:w-8/12 w-11/12">
          <div className="flex flex-col text-sm mx-auto space-y-2 lg:mx-0 order-1 md:order-1">
            <p className="whitespace-pre-wrap text-lg text-gray-600 lg:w-4/5">
              Our unique candidate screening and selection process is specifically designed to ensure that our healthcare professionals have the right qualifications and personal specifications to meet the needs of our clients. From NVQ certificates in Health and Social Care to BSc Nursing degrees
            </p>
            <p className="whitespace-pre-wrap pt-4 text-lg text-gray-600 lg:w-4/5">
              Our team members have extensive expertise in the care sector and have all completed mandatory training in Moving & Handling and Basic Life Support. Most importantly all the staff members we recruit demonstrate the core values and basic principles of care such as Compassion, Dignity and Respect, Being included, Responsive care, support, and Well-being.
            </p>
          </div>
          <div className="order-0 md:order-0">
            <h2 className="font-semibold tracking-wider capitalize lg:text-[2.8rem] lg:leading-10 text-4xl text-[#1663a3]">
              Our <span className="text-[#e67238]">Recruitment</span> Process
            </h2>
            <div className="flex flex-col md:flex-row gap-5 mt-10">
              <NavLink
                className="flex h-[3rem] tracking-wider items-center justify-center rounded-lg px-10 font-semibold text-sm  text-white hover:underline bg-[#1663a3] hover:!bg-[#e67238] space-x-2"
                to="/"
              >
                <FaUsers size={18}/>
                <span className="">
                  Join Our Team
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
