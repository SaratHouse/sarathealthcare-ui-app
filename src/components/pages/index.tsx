// import { NavLink } from "react-router-dom";
import {
  // awsImage,
  // azureImage,
  // databrickImage,
  // dbtImage,
  // elderlyCare,
  // gcloudImage,
  Logo,
  // lookerImage,
  // powerbiImage,
  // qlikImage,
  // sapImage,
  // tableauImage,
} from "../../constant/images";
// import { FaUsers , FaHandHoldingHeart, FaCircleCheck } from "react-icons/fa6";
// import ServiceCarousel from "../reuseables/serviceCarousel";
// import TestimonialCarousel from "../reuseables/testimonialCarousel";
// import parse from 'html-react-parser';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-background h-screen">
      <div className="flex flex-col items-center p-5 lg:p-10 lg:px-24 gap-6 w-11/12 lg:w-2/5 bg-white rounded-lg">
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
    </div>
  );
};

export default Home;