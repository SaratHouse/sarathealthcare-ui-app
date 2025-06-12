import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  arrowIcon,
  BarclayLogo,
  GskLogo,
  IconNine,
  IconSeven,
  IconTen,
  quoteIcon,
  SendUpIcon,
} from "../../constant/images";
import { FaCircle } from "react-icons/fa6";

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
    <div className="flex flex-col gap-10 items-center w-full">
      <div className="flex flex-col bg-black w-full items-center border-b">
        <div className="flex flex-col lg:w-8/12 w-11/12">
          <div className="flex flex-col w-full justify-center items-center text-white gap-7 bg-pattern">
            <div className="relative flex justify-center py-8 md:py-[9rem] lg:py-[11rem]">
              <div className="md:px-8 lg:w-4/5 text-center">
                <div className="relative z-40 flex flex-col space-y-3">
                  <div className="flex flex-col space-y-4 ">
                    <h2 className="flex items-center justify-center pb-4 text-sm">
                      ~/about us
                    </h2>
                    <h1 className="heading-1 !mt-2 text-3xl leading-tight md:!mb-2 md:text-[48px] lg:whitespace-pre-wrap">
                      Experienced. Approachable. Versatile
                    </h1>
                  </div>
                  <div className="flex flex-col items-center gap-8">
                    <p className="lg:text-lg md:w-4/5">
                      <span className="md:whitespace-pre-wrap">
                        Our team of savvy industry leaders is committed to your
                        success. Harness our data expertise built on 20+ years
                        of experience across multiple sectors.
                      </span>
                    </p>
                    <div className="flex">
                      <NavLink
                        className="flex h-[40px] items-center justify-center rounded-[4px] px-4 text-sm  text-white bg-[#006dad] hover:!bg-[#006dad] hover:shadow-inner shadow-sm space-x-2"
                        to="/booking"
                      >
                        <span className="opacity-80">
                          {" "}
                          Book a free discovery session{" "}
                        </span>{" "}
                        <img
                          src={SendUpIcon}
                          className="h-2"
                          alt="SendUpIcon"
                        />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:w-8/12 w-11/12 py-10 lg:py-[6rem]">
        <div className="flex lg:flex-row flex-col w-full items-center gap-16">
          <div className="flex flex-col lg:w-1/3 w-full text-center lg:items-start lg:text-left">
            <h2 className="mb-3 text-2xl text-gray-12 md:text-3xl lg:text-3xl font-mono !leading-normal !text-gray-12">
              Over 50
              <br /> clients served
            </h2>
            <p className="text-sm leading-6 mx-auto max-w-[320px] text-gray-600 lg:mx-0">
              From start-ups to small & medium businesses and Fortune 500
              companies, we have assisted teams in health, education, finance,
              customer service, energy, automotive, manufacturing, telecom,
              government, and more.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:w-2/3 w-full">
            <div className="w-full flex justify-end">
              <div className="lg:w-4/5 border border-gray-300 border-l-8 rounded-md p-5 py-7 text-sm flex flex-col relative gap-4">
                <div className="max-w-[430px] leading-6">
                  Sarathealthcare consultants quickly adapted, kept the project on track,
                  and excelled in technical skills and stakeholder engagement
                  for data collection and validation.
                </div>
                <div className="">Ashir Sajid | Lead Consultant, GSK group</div>
                <img
                  alt="[object Object] Illustration"
                  loading="lazy"
                  className="h-5 absolute right-4 top-3"
                  decoding="async"
                  data-nimg="1"
                  src={quoteIcon}
                />
                <img
                  alt="[object Object] Illustration"
                  loading="lazy"
                  className="absolute lg:bottom-4 bottom-11 right-4 h-7"
                  decoding="async"
                  data-nimg="1"
                  src={GskLogo}
                />
              </div>
            </div>
            <div className="w-full flex">
              <div className="lg:w-4/5 border border-[#b3e6c7] border-l-8 rounded-md p-5 py-7 text-sm flex flex-col relative gap-4">
                <div className="max-w-[500px] leading-6">
                  Sarathealthcare's AI-driven approach was a game-changer for us.Their team
                  not only analysed our data but also implemented machine
                  learning models that gave us predictive insights, allowing
                  proactive business decisions.
                </div>
                <div className="">Petra Donka | Senior Engineering Manager</div>
                <img
                  alt="[object Object] Illustration"
                  loading="lazy"
                  className="h-5 absolute right-4 top-3"
                  decoding="async"
                  data-nimg="1"
                  src={quoteIcon}
                />
                <img
                  alt="[object Object] Illustration"
                  loading="lazy"
                  className="absolute lg:bottom-4 bottom-11 right-4 h-5"
                  decoding="async"
                  data-nimg="1"
                  src={BarclayLogo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] relative w-full flex flex-col items-center">
        <div className="flex flex-col gap-5 relative items-center lg:w-8/12 w-11/12 my-16">
          <h2 className="w-full lg:w-3/4 text-center text-3xl lg:text-4xl lg:leading-[48px]">
            Our <span className="text-[#006dad]">custom delivery</span> approach
            ensures project success from the get-go
          </h2>
          <p className="text-sm md:w-1/2 text-center">
            <span className="text-gray-600 leading-6 md:whitespace-pre-wrap">
              General IT projects and data analytics projects are very
              different, and a one-size-fits-all methodology is often doomed to
              failure. Avoid spiralling costs, delays, and endless bugs with our
              flexible and fully customised data solution strategies.
            </span>
          </p>
          <div className="relative flex flex-col item-center w-full">
            <div className="hidden absolute w-2/5 lg:flex justify-between items-center top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={arrowIcon} className="" alt="arrowIcon" />
              <img src={arrowIcon} className="" alt="arrowIcon" />
            </div>
            <div className="grid lg:grid-cols-3 mt-4 gap-5 w-full">
              <div className="flex flex-col items-center w-full gap-4 p-5">
                <img src={IconSeven} className="" alt="IconSeven" />
                <span className="font-semibold text-sm">Strategy planning</span>
                <div className="text-gray-500 text-center text-sm lg:text-xs leading-6 w-9/12">
                  We first analyse your business, objectives, and challenges and
                  then plan the optimum technologies, resources, and processes
                  needed to improve data maturity.
                </div>
              </div>
              <div className="flex flex-col items-center w-full gap-4 p-5">
                <img src={IconNine} className="" alt="IconNine" />
                <span className="font-semibold text-sm">Project work</span>
                <div className="text-gray-500 text-center text-sm lg:text-xs leading-6 w-9/12">
                  Our specialists build your data ecosystem in phases for quick
                  value, handling modelling, architecture, pipelines, reports,
                  governance, and security.
                </div>
              </div>
              <div className="flex flex-col items-center w-full gap-4 p-5">
                <img src={IconTen} className="" alt="IconTen" />
                <span className="font-semibold text-sm">Ongoing support</span>
                <div className="text-gray-500 text-center text-sm lg:text-xs leading-6 w-9/12">
                  We first analyse your business, objectives, and challenges and
                  then plan the optimum technologies, resources, and processes
                  needed to improve data maturity.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7 lg:w-8/12 w-11/12 pb-20">
        <div className="flex flex-col gap-4 w-full">
          <div className="text-center text-3xl lg:text-left lg:text-[2.4rem] lg:leading-[3rem]">
            Why Sarathealthcare?
          </div>
          <div className="text-base lg:text-left text-center text-gray-500 max-w-[400px] leading-6">
            Sarathealthcare delivers quick wins while building practical, long-term
            solutions that stand the test of time.
          </div>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-10 w-full border-y border-gray-200">
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full gap-10 pt-10 lg:py-10">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-5">
                  <FaCircle className="text-[#006dad] text-sm" />
                  <span className="font-medium">
                    Data experts, not generalists
                  </span>
                </div>
                <div className="text-gray-500 text-sm leading-6 lg:w-4/5">
                  We started our data analytics career long before they became
                  trending buzzwords and silver-bullet solutions. Our approach
                  is grounded in solid data engineering fundamentals and
                  practices.
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-5">
                  <FaCircle className="text-[#006dad] text-sm" />
                  <span className="font-medium">Agile for data</span>
                </div>
                <div className="text-gray-500 text-sm leading-6 lg:w-4/5">
                  We bring Agile experience to your data and analytics. By
                  focusing on clear priorities, adaptive planning, and
                  stakeholder alignment, we ensure your data projects deliver
                  real value—fast
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-5">
                  <FaCircle className="text-[#006dad] text-sm" />
                  <span className="font-medium">Data tech mastery</span>
                </div>
                <div className="text-gray-500 text-sm leading-6 lg:w-4/5">
                  We bring deep technical expertise in various cloud data
                  platforms, analytics tools, and automation. From data
                  integration to advanced analytics and AI/ML, we engineer
                  solutions to any problem thrown our way.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end w-full lg:border-l border-gray-200">
            <div className="flex flex-col lg:w-3/4 gap-10 lg:py-10">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-5">
                  <FaCircle className="text-[#006dad] text-sm" />
                  <span className="font-medium">Vendor independence</span>
                </div>
                <div className="text-gray-500 text-sm leading-6">
                  We know our tech, but we don’t chase trends blindly. Our
                  recommendations are driven by your needs and the technology’s
                  capabilities, not by vendor influence.
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-5">
                  <FaCircle className="text-[#006dad] text-sm" />
                  <span className="font-medium">Business-first philosophy</span>
                </div>
                <div className="text-gray-500 text-sm leading-6">
                  We learn your business, customers, and data domain before we
                  write any code. Our goal is to develop practical data
                  analytics solutions that are laser-focused on what you really
                  need.
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-5">
                  <FaCircle className="text-[#006dad] text-sm" />
                  <span className="font-medium">Long-term strategy</span>
                </div>
                <div className="text-gray-500 text-sm leading-6">
                  Quick fixes may seem tempting, but costs escalate if
                  underlying issues are not resolved. We take a holistic view,
                  ensuring our solution supports current and future needs so
                  you're not stuck in an endless cycle of tool replacements and
                  recurring data expenses
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
