import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCircleCheck, FaHandHoldingHeart, FaUsers } from "react-icons/fa6";
import { isMobile } from "react-device-detect";
import parse from 'html-react-parser';
import Disclaimer from "../reuseables/disclaimer";

import { useAlert } from "../../utils/notification/alertcontext";
import { EMAIL_REGEX } from "../../utils/regex";
import { client } from "../../utils/client";
import { awsImage, azureImage, databrickImage, dbtImage, elderlyCare, gcloudImage, lookerImage, powerbiImage, qlikImage, sapImage, tableauImage } from "../../constant/images";
import TestimonialCarousel from "../reuseables/testimonialCarousel";


interface ContactDocument {
  _type: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const { addAlert } = useAlert();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [handleDisclaimerPopUp, setHandleDisclaimerPopUp] = useState(false);
  const [formInfo, setFormInfo] = useState({name: '', email: '', phone: '', message:''});

  const handleToggleModal = (newValue : boolean) => {    
    setHandleDisclaimerPopUp(newValue);
  };

  const handleSubmit = async () => {  
    setIsSubmitting(true);
    const { name, email, phone, message} = formInfo;
  
    const requiredFields = [
      { field: email, message: 'Please add email' },
      { field: phone, message: 'Please add mobile' },
      { field: name, message: 'Please add price' },
      { field: message, message: 'Please select message' },
    ];
  
    for (const { field, message } of requiredFields) {
      if (!field) {
        setIsSubmitting(false);
        return addAlert({ message, type: 'error' });
      }
    }

    if(!EMAIL_REGEX.test(email)) {
      setIsSubmitting(false);
      return addAlert({ message:'Invalid email provided', type: 'error' });
    }
    
    
    let doc: ContactDocument = {
      _type: 'contact',
      name,
      email,
      phone,
      message
    };  
    
    try {
      await client.create(doc)
      setFormInfo({name: '', email: '', phone: '', message:''})
      setIsSubmitting(false);
      addAlert({ message: 'Contact form submitted successfully', type: 'success' });
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      addAlert({ message:'error occurred while submitting form', type: 'error' });
    }
  };

  if (handleDisclaimerPopUp) {
    return <Disclaimer handleToggleModal={handleToggleModal}/>
  }
  
  return (
    <div className='flex flex-col items-center w-full'>
      <div className="relative w-full h-[54rem]">
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
              Contact Us  
            </div>
            <div className="text-4xl lg:text-[2.6rem] hover:text-white text-[#1663a3] font-semibold tracking-widest text-center">
              We Listen and We Care
            </div>
            <div className="text-lg text-center lg:w-3/5">
              If you feel it’s time for you or your loved one to receive care at home, we want to make sure you receive the personalised service we pride ourselves upon. For us to truly understand your needs and the level of care required, please take your time filling in the form below. We want to ensure we have all the information required to provide you with the perfect home care service.
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

      <div className={`flex flex-col items-center w-full bg-[#1663a3] lg:mb-[5rem]`}>
        <div className={`grid lg:grid-cols-2 gap-8 items-center lg:w-8/12 w-11/12 lg:my-[7rem] my-10`}>
          <div className={`flex flex-col gap-3 items-start`}>
            <div className={`${isMobile ? 'hidden' : ''} font-semibold tracking-wider lg:text-4xl text-[1.4rem] capitalize text-center text-white`}>contact us</div>
            <div className='grid grid-cols-2 gap-3 lg:text-lg lg:mt-14 mt-7 items-center text-white'>
              <div className='flex flex-col gap-2 text-sm'>
                <div className='font-semibold uppercase tracking-wider'>Head Office</div>
                <div className='flex flex-col w-4/5'>White Building Studios, 1-4 Cumberland Place, Southampton, Hampshire,SO15 2NP</div>
              </div>
              <div className='flex flex-col gap-2 text-sm'>
                <div className='font-semibold uppercase tracking-wider '>CQC Registered Office</div>
                <div className='flex flex-col w-4/5'>White Building Studios, 1-4 Cumberland Place, Southampton, Hampshire,SO15 2NP</div>
              </div>
            </div>
          </div>
          
          <div className='flex flex-col w-full justify-between relative'>            
            <div className='flex flex-col gap-6 lg:-mt-20 z-30 w-full p-10 rounded-lg lg:absolute lg:-top-[15rem] bg-white shadow-md shadow-black'>
              <div className="font-bold tracking-widest uppercase text-center text-3xl text-[#e67238]">
                Homecare <span className="text-[#1663a3]">Enquiry</span> form
              </div>
              <div className='flex flex-col w-full gap-5 items-center'>
                <div className='flex flex-col gap-2 w-full'>
                  <label className='text-sm opacity-60'>Your name</label>
                  <input value={formInfo.name} onChange={({ target}) => {setFormInfo({ ...formInfo, name: target.value })}} className='bg-neutral-300 outline-none placeholder:text-white p-2 rounded-md' type='text'/>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                  <label className='text-sm opacity-60'>Your email</label>
                  <input value={formInfo.email} onChange={({ target}) => {setFormInfo({ ...formInfo, email: target.value })}} className='bg-neutral-300 outline-none placeholder:text-white p-2 rounded-md' type='text'/>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                  <label className='text-sm opacity-60'>Your Phone number</label>
                  <input value={formInfo.phone} onChange={({ target}) => {setFormInfo({ ...formInfo, phone: target.value })}} className='bg-neutral-300 outline-none placeholder:text-white p-2 rounded-md' type='text'/>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                  <label className='text-sm opacity-60'>Your Phone number</label>
                  <textarea value={formInfo.message} onChange={({ target}) => {setFormInfo({ ...formInfo, message: target.value })}} className='bg-neutral-300 outline-none placeholder:text-white p-2 rounded-md' placeholder='Message *'/>
                </div>
              </div>
              <div className='flex flex-col  lg:items-start items-center mt-3 w-full'>
                <div onClick={handleSubmit} className='lg:w-1/3 w-1/2 bg-[#1663a3] p-3 cursor-pointer text-center text-white uppercase font-semibold text-sm lg:text-xl'>{!isSubmitting ? 'SUBMIT' : 'Submitting ....'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <TestimonialCarousel/>

      <div className="grid lg:grid-cols-3 lg:w-8/12 w-11/12 mt-10 items-center">
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
      {/* <div className='bg-contact flex flex-col items-center w-full'>
        <div className='h-full lg:w-8/12 w-11/12'>
          <Navbar/>
          <div className='flex flex-row  lg:justify-start justify-center  gap-2 w-full lg:text-lg text-sm text-white pt-10 lg:pt-[4rem] lg:mb-[25rem]'>
            <NavLink className='text-[#B39659]' to='/'>
              HOMEPAGE
            </NavLink>/
            <div className='font-semibold uppercase'>Contact Us</div>
          </div>
          <div className={`${isMobile ? '' : 'hidden'} flex flex-col w-full items-center lg:mt-[5rem] lg:mb-[20rem] mb-[10rem]`}>
            <div className={`tracking-wider text-white lg:text-[2.8rem] text-3xl my-5 font-bold text-center lg:w-1/3 w-4/6`}>
              Contact Us
            </div>
          </div>
        </div>
      </div>

      <div className={`${isMobile ? 'flex-col' : 'flex-row items-start'} flex lg:w-8/12 w-11/12 lg:mt-[-25rem] mt-[-10rem]`}>
        <div className={`flex flex-col lg:w-1/4 gap-3 items-start pt-1 w-3/4`}>
          <div className='text-white lg:text-[1.7rem]  w-1/2 text-lg font-medium  tracking-wide'>
            ENQUIRE
            <div className='border-b-2 border-[#B39659] w-4/12 pt-3'></div>
          </div>
          <div className='flex flex-row gap-3 lg:text-lg lg:mt-14 mt-7 items-center text-[#D1D0CF]'>
            <AiOutlineMail />
            <div className='underline'>info@ectc.ltd</div>
          </div>
        </div>
        
        <div className='flex flex-col lg:w-3/5 justify-between gap-5 lg:mt-0 mt-5 text-white'>
          <div className={`${isMobile ? 'hidden' : ''} font-semibold tracking-wider lg:text-[2.8rem] text-[1.4rem] capitalize text-center `}>contact us</div>
          
          <div className='flex flex-col gap-6 lg:mt-20 w-full text-white'>
          <div className='grid lg:grid-cols-2 grid-cols-1  gap-5 items-center'>
              <div className='flex flex-col'>
                <input value={formInfo.name} onChange={({ target}) => {setFormInfo({ ...formInfo, name: target.value })}} className='bg-transparent outline-none text-white placeholder:text-white border-b-2 border-[#B39659] py-5 px-3' placeholder='Name *' type='text'/>
              </div>
              <div className='flex flex-col'>
                <input value={formInfo.email} onChange={({ target}) => {setFormInfo({ ...formInfo, email: target.value })}} className='bg-transparent outline-none text-white placeholder:text-white border-b-2 border-[#B39659] py-5 px-3' placeholder='Email *' type='email'/>
              </div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1  gap-4 items-center'>
              <div className='flex flex-col'>
                <input value={formInfo.phone} onChange={({ target}) => {setFormInfo({ ...formInfo, phone: target.value })}} className='bg-transparent outline-none text-white placeholder:text-white border-b-2 border-[#B39659] py-5 px-3' placeholder='Phone *' type='text'/>
              </div>
            </div>
            <div className='flex flex-col '>
              <textarea value={formInfo.message} onChange={({ target}) => {setFormInfo({ ...formInfo, message: target.value })}} className='bg-transparent outline-none text-white placeholder:text-white border-b-2 border-[#B39659] py-5 px-3' placeholder='Message *'/>
            </div>
            <div className='flex flex-col  lg:items-start items-center mt-7 w-full'>
              <div onClick={handleSubmit} className='lg:w-1/3 w-1/2 border border-white p-3 cursor-pointer text-center text-white uppercase font-semibold text-sm lg:text-xl'>{!isSubmitting ? 'SUBMIT' : 'Submitting ....'}</div>
            </div>
            <div onClick={() => setHandleDisclaimerPopUp(!handleDisclaimerPopUp)} className='flex flex-row gap-3 lg:mt-9 mt-4 lg:mb-0 mb-14 items-center cursor-pointer'>
              <FaAsterisk />
              <div className=''>Read disclaimer</div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className={`flex-col flex lg:w-8/12 w-11/12 mb-10`}>
        <div className='grid 2xl:grid-cols-3 lg:grid-cols-2 gap-10 place-content-center'>
          <div className='bg-[#383838] flex flex-col text-white gap-4 p-10'>
            <img alt="" className='w-full object-fill grayscale' src={contact_one}/>
            <div className=' font-medium text-center text-[1.9rem]'>
              London, United Kingdom
            </div>
            <div className='text-center '>
              Central London
            </div>
            
          </div>
          <div className='bg-[#383838] flex flex-col text-white gap-4 p-10'>
            <img alt="" className='w-full object-fill grayscale' src={contact_two}/>
            <div className=' font-medium text-center text-[1.9rem]'>
            Lagos, Nigeria
            </div>
            <div className='text-center '>
              Victoria Island
            </div>
            
          </div>
          <div className='bg-[#383838] flex flex-col text-white gap-4 p-10'>
            <img alt="" className='w-full object-fill grayscale' src={contact_three}/>
            <div className=' font-medium text-center text-[1.9rem]'>
              New York, United States
            </div>
            <div className='text-center '>
              Manhattan
            </div>
            
          </div>
        </div>
      </div> */}

      
    </div>
  )
}

export default Contact;
