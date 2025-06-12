import { bgPattern, SendUpIcon } from "../../constant/images";
import InputField from "../reuseables/input";
import { useRef, useState } from "react";
import TextareaField from "../reuseables/textarea";
import { client } from "../../utils/client";
import { useAlert } from "../../utils/notification/alertcontext";
import { validateEmail } from "../../utils/common";
import { errorMessageMap, ErrorTypes } from "../../constant";
import { ERROR_EMAIL_INVALID } from "../../constant/errors";
// Removed invalid import of createDocument from '@sanity/client'

const Booking = () => {
  const { addAlert } = useAlert();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async () => {  
    setIsSubmitting(true);
    const newBody = {
      firstname: firstNameRef.current?.value || "",
      lastname: lastNameRef.current?.value || "",
      mobile: mobileRef.current?.value || "",
      email: emailRef.current?.value || "",
      company: companyRef.current?.value || "",
      message: messageRef.current?.value || "",
    };

    const errors: string[] = []; // Collect all error messages
    
    Object.entries(newBody).forEach(([key, value]) => {
      if (!value) errors.push(errorMessageMap[key as ErrorTypes]);
      if (key === "email" && value && !validateEmail(value)) errors.push(ERROR_EMAIL_INVALID);
    });
        
    if (errors.length > 0) {
      errors.forEach((msg, index) => addAlert({ message: msg, type: "error" }));
      setIsSubmitting(false);
      return;
    }
    
    
    let doc = {
      _type: 'contact',
      ...newBody
    };  
    
    try {
      await client.create(doc);

      setIsSubmitting(false);
      if (firstNameRef.current) firstNameRef.current.value = "";
      if (lastNameRef.current) lastNameRef.current.value = "";
      if (companyRef.current) companyRef.current.value = "";
      if (mobileRef.current) mobileRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
      addAlert({ message: 'Booked a session successfully', type: 'success' });
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      addAlert({ message:'error occurred while submitting form', type: 'error' });
    }
  };

  return (
    <div className="flex flex-col items-center lg:gap-[5rem] gap-10 w-full">
      <div className="grid scroll-mt-32 grid-cols-1 items-center gap-16 lg:grid-cols-2 md:gap-16 lg:w-8/12 w-11/12 py-[5rem] !pt-[7rem]">
        <div className="lg:flex justify-center items-center hidden">
          <img src={bgPattern} className="object-fill" alt="background" />
        </div>
        <div className="flex flex-col gap-5 items-center">
          <div className="grid lg:grid-cols-2 gap-7 w-full">
            <InputField
              type="text"
              placeholder="First Name"
              title="First Name"
              isRequired={true}
              ref={firstNameRef}
            />
            <InputField
              type="text"
              placeholder="Last Name"
              title="Last Name"
              isRequired={true}
              ref={lastNameRef}
            />
          </div>
          <InputField
            type="email"
            placeholder="Email Address"
            title="Email"
            isRequired={true}
            ref={emailRef}
          />
          <InputField
            type="number"
            placeholder="Phone Number"
            title="Phone"
            isRequired={true}
            ref={mobileRef}
          />
          <InputField
            type="text"
            placeholder="Company"
            title="Company"
            isRequired={true}
            ref={companyRef}
            />
          <TextareaField
            title="Message"
            isRequired={true}
            placeholder="Your enquiry"
            ref={messageRef}
          />
          <p className="text-xs w-full">
            We use your contact info to share details about our services. <br/>
            You can unsubscribe anytime.
          </p>

          <div className="flex w-full mt-5">
            <button
              className="flex cursor-pointer h-[40px] items-center justify-center rounded-[4px] px-4 text-sm  text-white bg-[#006dad] hover:!bg-[#006dad] hover:shadow-inner shadow-sm space-x-2"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              <span className="opacity-80">{!isSubmitting ? 'Book a session' : 'Booking you a session ....'}</span>{" "}
              <img src={SendUpIcon} className="h-2" alt="SendUpIcon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

