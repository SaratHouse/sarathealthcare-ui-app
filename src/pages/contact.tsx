import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaClock, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import Disclaimer from "../components/reuseables/disclaimer";

import { useAlert } from "../utils/notification/alertcontext";
import { client } from "../utils/client";
import TestimonialCarousel from "../components/reuseables/testimonialCarousel";
import Partners from "../components/reuseables/partners";
import InputField from "../components/reuseables/input";
import TextareaField from "../components/reuseables/textarea";
import { validateEmail } from "../utils/common";
import { errorMessageMap, ErrorTypes } from "../constant";
import { ERROR_EMAIL_INVALID } from "../constant/errors";


interface ContactDocument {
  _type: string;
  fullname: string;
  email: string;
  mobile: string;
  message: string;
}

const Contact = () => {
  const { addAlert } = useAlert();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [handleDisclaimerPopUp, setHandleDisclaimerPopUp] = useState(false);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const handleToggleModal = (newValue : boolean) => {    
    setHandleDisclaimerPopUp(newValue);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const newBody = {
      fullname: fullNameRef.current?.value || "",
      message: messageRef.current?.value || "",
      mobile: mobileRef.current?.value || "",
      email: emailRef.current?.value || "",
    };

    const errors: string[] = []; // Collect all error messages
    
    Object.entries(newBody).forEach(([key, value]) => {      
      if (!value) errors.push(errorMessageMap[key as ErrorTypes]);
      if (key === "email" && value && !validateEmail(value)) errors.push(ERROR_EMAIL_INVALID);
    });
    
    if (errors.length > 0) {
      errors.forEach(msg => addAlert({ message: msg, type: "error" }));
      setIsSubmitting(false);
      return;
    }
  
    
    let doc: ContactDocument = {
      _type: 'contact',
      ...newBody
    };
    
    try {
      await client.create(doc)
      if (fullNameRef.current) fullNameRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
      if (mobileRef.current) mobileRef.current.value = "";
      if (emailRef.current) emailRef.current.value = ""
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
      <div className="w-full h-[35rem] relative">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/bgVideoContact.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay Content */}
        <div className="z-10 absolute flex flex-col justify-center items-center h-full w-full bg-black/30">
          <div className="flex flex-col gap-3 text-white justify-center items-center lg:w-1/2 p-10 text-lg">
            <div className="text-lg text-center font-semibold lg:w-3/5">
              <NavLink to="/">
                <span className="hover:text-white">
                  Home
                </span>
              </NavLink> / Contact Us
            </div>
            <div className="text-4xl text-center text-white lg:px-10 p-4 font-bold tracking-widest">
              Contact Us
            </div>
            <p className="lg:text-lg text-base text-center lg:w-4/5">
              Let’s Talk About Your Needs
            </p>
            <p className="lg:text-lg text-base text-center lg:w-4/5">
              Choosing care is personal, and we are here to guide you every step of the way.
            </p>
            <div className="mt-8 flex md:flex-row flex-col flex-wrap gap-4">
              <NavLink
                to="/careers"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#1663a3] to-[#0d4a7a] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#1663a3]/30"
              >
                <span>Join Our Team</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </NavLink>
              
              <NavLink
                to="/contact-us"
                className="flex items-center justify-center gap-2 border-2 font-semibold py-3 px-8 rounded-lg transition-all duration-300 bg-[#e67238] text-white"
              >
                <span>Book Free Assessment</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className={`flex flex-col lg:flex-row items-center lg:gap-5 gap-10 w-full max-w-7xl px-4 lg:py-24 py-16`}>
          <div className={`flex flex-col gap-7 items-start w-full`}>
            <div className="bg-[#006dad]/10 flex flex-row lg:w-3/4 w-full items-center gap-5 rounded-2xl p-5">
              <div className='bg-[#e67238]/55 p-1 rounded-full flex items-center justify-center'>
                <div className='bg-white p-2 rounded-full flex items-center justify-center'>
                  <FaPhone color='#e67238'/>
                </div>
              </div>
              <div className=''>
                <div className='font-semibold text-lg'>Phone</div>
                <div className='text-black/50 text-sm lg:text-base'>020 3667 3616 , 077 3736 1681</div>
              </div>
            </div>
            <div className="bg-[#006dad]/10 flex flex-row lg:w-3/4 w-full items-center gap-5 rounded-2xl p-5">
              <div className='bg-[#e67238]/55 p-1 rounded-full flex items-center justify-center'>
                <div className='bg-white p-2 rounded-full flex items-center justify-center'>
                  <FaEnvelope color='#e67238'/>
                </div>
              </div>
              <div className=''>
                <div className='font-semibold text-lg'>Email</div>
                <div className='text-black/50 text-sm lg:text-base'>homecare@sarathealthcare.co.uk</div>
              </div>
            </div>
            <div className="bg-[#006dad]/10 flex flex-row lg:w-3/4 w-full items-center gap-5 rounded-2xl p-5">
              <div className='bg-[#e67238]/55 p-1 rounded-full flex items-center justify-center'>
                <div className='bg-white p-2 rounded-full flex items-center justify-center'>
                  <FaLocationDot color='#e67238'/>
                </div>
              </div>
              <div className=''>
                <div className='font-semibold text-lg'>Address</div>
                <div className='text-black/50 text-sm lg:text-base'>Jhumat House, 160 London Road, Barking, IG11 8BB</div>
              </div>
            </div>
            <div className="bg-[#006dad]/10 flex flex-row lg:w-3/4 w-full items-center gap-5 rounded-2xl p-5">
              <div className='bg-[#e67238]/55 p-1 rounded-full flex items-center justify-center'>
                <div className='bg-white p-2 rounded-full flex items-center justify-center'>
                  <FaClock color='#e67238'/>
                </div>
              </div>
              <div className=''>
                <div className='font-semibold text-lg'>Working Hours</div>
                <div className='text-black/50 text-sm lg:text-base'>Mon – Fri: 9:00 AM – 6:00 PM</div>
              </div>
            </div>
          </div>
          
          <div className='flex flex-col w-full justify-between'>            
            <div className='flex flex-col gap-6 w-full rounded-lg bg-white shadow-md shadow-black'>
              <div className="font-bold tracking-widest uppercase text-white text-left text-lg rounded-t-lg lg:px-10 p-5 bg-[#e67238]">
                Get In Touch
              </div>
              <div className='flex flex-col w-full lg:p-10 p-5 gap-5 items-center'>
                <InputField
                  type="text"
                  title="Full Name"
                  iconName="fi-ss-user"
                  placeholder="Enter your full name"
                  ref={fullNameRef}
                />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
                  <InputField
                    type="email"
                    title="Email Address"
                    iconName="fi-sr-envelopes"
                    placeholder="Enter your email"
                    ref={emailRef}
                  />
                  <InputField
                    type="tel"
                    title="Phone Number"
                    iconName="fi-sr-phone-call"
                    placeholder="Enter your phone no."
                    ref={mobileRef}
                  />
                </div>
                <TextareaField
                  title="Message"
                  placeholder="Enter your message."
                  ref={messageRef}
                />
                <div className='flex flex-col  lg:items-start items-center mt-3 w-full'>
                  <div onClick={handleSubmit} className='w-auto bg-[#1663a3] rounded-lg px-5 p-3 cursor-pointer text-center text-white uppercase font-semibold text-sm'>{!isSubmitting ? 'Send message' : 'Sending Message ....'}</div>
                </div>
              </div>
            </div>
          </div>
      </div>


      <TestimonialCarousel/>
      <Partners/>
      
    </div>
  )
}

export default Contact;
