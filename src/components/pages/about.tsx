import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  awsImage,
  azureImage,
  databrickImage,
  dbtImage,
  gcloudImage,
  lookerImage,
  powerbiImage,
  qlikImage,
  sapImage,
  tableauImage,
} from "../../constant/images";
import { FaHandHoldingHeart, FaUsers } from "react-icons/fa6";
import ServiceCarousel from "../reuseables/serviceCarousel";
import TestimonialCarousel from "../reuseables/testimonialCarousel";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#careers") {
      const careersSection = document.getElementById("careers");
      if (careersSection) {
        careersSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
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
          <source src="/videos/bgVideoAboutUs.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full bg-black/70 text-white">
          <div className="flex flex-col items-center gap-7 lg:w-8/12 w-11/12">
            <div className="text-lg">
              About Us  
            </div>
            <div className="text-4xl lg:text-[2.6rem] hover:text-white text-[#1663a3] font-semibold tracking-widest">
              Who We are
            </div>
            <div className="text-lg text-center lg:w-3/5">
              Sarat Healthcare is a Domiciliary Care Agency with one main purpose – to provide care and support to the elderly and disabled people from the comfort of their own home. We believe your home is your space, and you are in control of how your care is delivered and how you want things done. It’s your Home, it’s your Space, and we respect that.
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
        <div className="font-semibold tracking-wider capitalize lg:text-[2.8rem] text-4xl text-[#1663a3]">We Listen & We Care</div>
        <div className="text-lg lg:mx-auto lg:w-4/5 pt-2 text-center">
          We provide a range of live-in and visiting homecare services to clients across the United Kingdom. Our clients are primarily the elderly, people with disabilities, and those convalescing from illness or accident. Our homecare staff members provide a wide variety of services, as required, to meet the needs of individual clients. We listen and we care.
        </div>
      </div>

      <ServiceCarousel/>

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

export default About;
