import { NavLink } from "react-router-dom";
import { recruitment } from "../../constant/images";


export default function Recruitment() {
  return (
    <div className="bg-white shadow-amber-800/60 shadow-lg p-10 lg:p-24 grid scroll-mt-32 grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-16 w-full max-w-7xl">
        <div className="flex flex-col gap-6 ">
          <h2 className="font-semibold tracking-wider capitalize lg:text-[2.8rem] lg:leading-10 text-4xl text-[#1663a3]">
            Our <span className="text-[#e67238]">Recruitment</span> <br/> Process
          </h2>
          <p className="whitespace-pre-wrap text-lg text-gray-600 lg:w-4/5">
            Our unique screening ensures our healthcare professionals, from NVQ to BSc Nursing graduates, possess the right qualifications, essential training in Moving & Handling and Basic Life Support, and embody core values like Compassion, Dignity, and Respect to perfectly meet client needs.
          </p>
          <div className="flex flex-col md:flex-row gap-5 mt-10">
            
            <NavLink
              className="flex h-[3rem] tracking-wider items-center justify-center rounded-lg px-10 font-semibold text-sm  text-white hover:underline bg-[#1663a3] hover:!bg-[#e67238] space-x-2"
              to="/"
            >
              <span className="">
                Join Our Team
              </span>
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col text-sm mx-auto space-y-2">
          <img
            alt="[object Object] Illustration"
            loading="lazy"
            className="h-full w-full object-cover"
            decoding="async"
            data-nimg="1"
            src={recruitment}
          />
        </div>
      </div>
  );
}
