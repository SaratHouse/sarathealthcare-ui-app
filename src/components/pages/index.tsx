// import { FaCircleCheck } from "react-icons/fa6";
// import AutoScrollCarousel from "../reuseables/autoScrollCarousel";
// import TestimonialCarousel from "../reuseables/testimonialCarousel";

import {
  Logo,
} from "../../constant/images";
// import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-background">
      <div className="flex flex-col items-center justify-center w-full bg-black/70  h-screen">
<<<<<<< HEAD
        <div className="flex flex-col items-center p-5 lg:p-10 lg:px-24 gap-6 lg:w-1/2 w-11/12 bg-white rounded-lg">
=======
        <div className="flex flex-col items-center p-5 lg:p-10 lg:px-24 gap-6 w-11/12 lg:w-2/5 bg-white rounded-lg">
>>>>>>> 64f9dd1 (fix: quick push)
          <img
            alt="[object Object] Illustration"
            loading="lazy"
            className="lg:w-40 w-2/5"
            decoding="async"
            data-nimg="1"
            src={Logo}
          />
          <div className="flex flex-col text-center text-[#023f7e]">
            <div className="text-4xl font-bold">Site under Maintenance</div>
            <div className="">We are currently updating our website.</div>
          </div>
        </div>
        {/* <div className="grid lg:grid-cols-2 items-center h-screen">
          <img
            alt="[object Object] Illustration"
            loading="lazy"
            className="h-full object-cover"
            decoding="async"
            data-nimg="1"
            src={bgM}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
