import { NavLink } from "react-router-dom";
import {
  awsImage,
  azureImage,
  databrickImage,
  dbtImage,
  elderlyCare,
  gcloudImage,
  lookerImage,
  powerbiImage,
  qlikImage,
  sapImage,
  tableauImage,
} from "../../constant/images";
import { FaUsers , FaHandHoldingHeart, FaCircleCheck } from "react-icons/fa6";
import ServiceCarousel from "../reuseables/serviceCarousel";
import TestimonialCarousel from "../reuseables/testimonialCarousel";
import parse from 'html-react-parser';

const Home = () => {
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
            {/* <div className="text-lg">
              Welcome to
            </div> */}
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
      <div className="flex flex-col gap-5 lg:w-8/12 w-11/12 mt-10 items-center">
        <div className="font-semibold tracking-wider capitalize lg:text-[2.8rem] text-4xl text-[#1663a3]">Who we are</div>
        <div className="text-lg lg:mx-auto lg:w-4/5 pt-2 text-center">
          Sarat Healthcare is your trusted care provider for domiciliary care services in Hampshire. We are dedicated to providing personalised, high-quality care that allows you or your loved ones to live independently and comfortably at home. Whether you need support with personal care, dementia care, or companionship, our compassionate and well-trained carers are here to help every step of the way.
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

      <div className="flex flex-col items-center w-full py-10">
        <div className="flex flex-col gap-10 lg:w-8/12 w-11/12">
          <div className="grid lg:grid-cols-2 gap-10 w-full pb-4 items-center border-gray-200">
            <div className="font-semibold tracking-wider capitalize lg:text-[2.8rem] lg:leading-[2.8rem] text-4xl text-[#1663a3]">
              Our <br /> <span className="text-[#e67238]">Partners</span>
            </div>
            <div className="text-lg text-gray-500 lg:mx-4">
              We are Care Quality Commission regulated, Click the button below to see our CQC report.
              <a href="https://www.cqc.org.uk/location/1-11817828876" target="_blank" rel="noreferrer" className="flex flex-col w-1/2 p-3 items-center gap-2 rounded-lg mt-3 bg-[#1663a3] text-white ">
                See CQC Report
              </a>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between lg:justify-center flex-wrap text-sm mx-auto gap-5 w-full space-y-2 mb-6 lg:mx-0 lg:max-w-none">
            {[
              awsImage,
              gcloudImage,
              azureImage,
              powerbiImage,
              databrickImage,
              dbtImage,
              sapImage,
              tableauImage,
              qlikImage,
              lookerImage,
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                className="aspect-square lg:h-[10rem] md:h-[7rem] h-[6rem]"
                alt="client-logo"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;