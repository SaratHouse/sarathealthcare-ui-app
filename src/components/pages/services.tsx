import {
  AIGif,
  architectureGif,
  awsImage,
  azureImage,
  biAnalysisGif,
  CloudDataGif,
  databrickImage,
  dbtImage,
  ectcGif,
  fivetranImage,
  gcloudImage,
  IconEight,
  IconNine,
  IconSeven,
  IconTen,
  lookerImage,
  microsoftImage,
  powerbiImage,
  qlikImage,
  sapImage,
  SendUpIcon,
  sigmaImage,
  snowflakeImage,
  tableauImage,
} from "../../constant/images";
import { FaCircleCheck } from "react-icons/fa6";
import TestimonialCarousel from "../reuseables/testimonialCarousel";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div className="flex flex-col items-center lg:gap-[5rem] gap-10 w-full">
      <div className="flex flex-col w-full items-center border-b">
        <div className="flex flex-col lg:w-8/12 w-11/12">
          <div className="flex flex-col w-full justify-center items-center text-gray gap-7 bg-pattern">
            <div className="relative flex justify-center py-8 md:py-[9rem] lg:py-[5rem] !pt-[10rem]">
              <div className="bg-white md:px-8 lg:w-4/5 text-center">
                <div className="relative z-40 flex flex-col space-y-3">
                  <div className="flex flex-col space-y-4 ">
                    <h2 className="flex items-center justify-center pb-4 text-sm text-gray-11">
                      ~/services
                    </h2>
                    <h1 className="heading-1 !mt-2 text-3xl leading-tight text-gray-12 md:!mb-2 md:text-[48px] lg:whitespace-pre-wrap">
                      Different industries, same data roadblocks
                    </h1>
                  </div>
                  <div className="flex flex-col items-center gap-8">
                    <p className="lg:text-lg md:w-10/12">
                      <span className="text-gray-600 md:whitespace-pre-wrap">
                        Every data puzzle has similar patterns, and we’ve
                        mastered them all. Our data consultants combine deep
                        expertise with cutting-edge technology to customise
                        proven solutions for your specific use case.
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
      <div className="grid scroll-mt-32 grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-16 lg:w-8/12 w-11/12">
        <div className="order-1 md:order-1 flex justify-center items-center">
          <img
            src={architectureGif}
            className="opacity-50 max-h-[20rem] lg:max-h-[25rem]"
            alt="background"
          />
        </div>
        <div className="order-0 md:order-0">
          <h2 className="text-2xl text-gray-12 lg:text-[35px] lg:leading-[42px]">
            Data Architecture Consulting
          </h2>
          <p className="whitespace-pre-wrap pt-4 text-sm text-gray-600">
            A flexible, secure, and scalable data architecture is the foundation
            for maximising the potential of all your data.
          </p>
          <p className="whitespace-pre-wrap pt-4 text-sm text-gray-600">
            We advise where your data should reside and provide full data
            modelling, preparation, and transfer support for any architectural
            change. We help you build:
          </p>

          <div className="flex flex-col text-sm mx-auto max-w-[480px] my-6 space-y-2 lg:mx-0 lg:max-w-none">
            {[
              "Data warehouses and lakes with ETL/ELT pipelines.",
              "Data fabric and mesh layers to democratise data assets",
              "Data catalogs for centralised data governance",
              "Structured and unstructured data management systems",
            ].map((text, index) => (
              <div
                key={index}
                className="flex flex-row relative gap-2 items-start"
              >
                <span className="top-1 absolute">
                  <FaCircleCheck className="text-[#006dad]" size={16} />
                </span>
                <div className="ml-7 -pt-2">{text}</div>
              </div>
            ))}
          </div>

          <div className="flex">
            <NavLink
              className="flex h-[40px] items-center justify-center rounded-[4px] px-4 text-sm  text-white bg-[#006dad] hover:!bg-[#006dad] hover:shadow-inner shadow-sm space-x-2"
              to="/booking"
            >
              <span className="opacity-80">
                {" "}
                Book a free discovery session{" "}
              </span>{" "}
              <img src={SendUpIcon} className="h-2" alt="SendUpIcon" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#fefcfc] gap-3 w-full py-16">
        <div className="grid scroll-mt-32 grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-16 lg:w-8/12 w-11/12">
          <div className="flex flex-col text-sm mx-auto lg:max-w-[480px] space-y-2 lg:mx-0 lg:max-w-none order-1 md:order-1">
            {[
              "Integrate data from a multitude of data sources and types",
              "Handle complex data like images, videos, documents, or a combination of these.",
              "Process data in real-time or near real-time.",
              "Reconcile discrepancies in how data is collected, processed, and used.",
              "Build the infrastructure needed to support advanced analytics.",
              "Plan and implement future-focused data strategy and governance.",
            ].map((text, index) => (
              <div
                key={index}
                className="flex flex-row relative gap-2 items-start"
              >
                <span className="top-1 absolute">
                  <FaCircleCheck className="text-[#006dad]" size={16} />
                </span>
                <div className="ml-7 -pt-2">{text}</div>
              </div>
            ))}
          </div>
          <div className="order-0 md:order-0">
            <h2 className="text-2xl text-gray-12 lg:text-[35px] lg:leading-[42px]">
              Business value proposition
            </h2>
            <p className="whitespace-pre-wrap pt-4 text-sm text-gray-600 lg:w-4/5">
              Our data architecture consulting services are best suited for
              organisations looking to:
            </p>
          </div>
        </div>
      </div>
      <div className="grid scroll-mt-32 grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-16 lg:w-8/12 w-11/12">
        <div className="order-1 md:order-1 flex justify-center items-center">
          <img
            src={biAnalysisGif}
            className="opacity-50 max-h-[20rem] lg:max-h-[25rem]"
            alt="background"
          />
        </div>
        <div className="order-0 md:order-0">
          <h2 className="text-2xl text-gray-12 lg:text-[35px] lg:leading-[42px]">
            BI and Analytics Consulting
          </h2>
          <p className="whitespace-pre-wrap pt-4 text-sm text-gray-600">
            The right analytics tools and processes can help extract meaning
            from your data and transform your business.
          </p>
          <p className="whitespace-pre-wrap pt-4 text-sm text-gray-600">
            We work with your business stakeholders to collect requirements and
            match you with the best analytics tools for your dashboards and
            reports. We help you:
          </p>

          <div className="flex flex-col text-sm mx-auto max-w-[480px] space-y-2 my-6 lg:mx-0 lg:max-w-none">
            {[
              "Build intuitive and interactive dashboards and reports across diverse data sources",
              "Embed analytics in existing corporate applications",
              "Analyse geospatial, time-series, or other complex data.",
              "Move from descriptive to diagnostic, predictive, and prescriptive analytics",
            ].map((text, index) => (
              <div
                key={index}
                className="flex flex-row relative gap-2 items-start"
              >
                <span className="top-1 absolute">
                  <FaCircleCheck className="text-[#006dad]" size={16} />
                </span>
                <div className="ml-7 -pt-2">{text}</div>
              </div>
            ))}
          </div>

          <div className="flex">
            <NavLink
              className="flex h-[40px] items-center justify-center rounded-[4px] px-4 text-sm  text-white bg-[#006dad] hover:!bg-[#006dad] hover:shadow-inner shadow-sm space-x-2"
              to="/booking"
            >
              <span className="opacity-80">
                {" "}
                Book a free discovery session{" "}
              </span>{" "}
              <img src={SendUpIcon} className="h-2" alt="SendUpIcon" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#fefcfc] gap-3 w-full py-16">
        <div className="grid scroll-mt-32 grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-16 lg:w-8/12 w-11/12">
          <div className="flex flex-col text-sm mx-auto max-w-[480px] space-y-2 lg:mx-0 lg:max-w-none order-1 md:order-1">
            {[
              "Enable faster and smarter decision-making",
              "Accelerate existing tool adoption and usage.",
              "Process data in real-time or near real-time.",
              "Enable data discovery and self-service",
              "Automate existing reporting processes and reduce operational costs",
              "Solve current analytics challenges around system speed, complexity, and scale",
            ].map((text, index) => (
              <div
                key={index}
                className="flex flex-row relative gap-2 items-start"
              >
                <span className="top-1 absolute">
                  <FaCircleCheck className="text-[#006dad]" size={16} />
                </span>
                <div className="ml-7 -pt-2">{text}</div>
              </div>
            ))}
          </div>
          <div className="order-0 md:order-0">
            <h2 className="text-2xl text-gray-12 lg:text-[35px] lg:leading-[42px]">
              Business value proposition
            </h2>
            <p className="whitespace-pre-wrap pt-4 text-sm text-gray-600 lg:w-4/5">
              Our BI and analytics consulting services are best suited for
              organisations looking to:
            </p>
          </div>
        </div>
      </div>
      <div className="grid scroll-mt-32 grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-16 lg:w-8/12 w-11/12">
        <div className="order-1 md:order-1 flex justify-center items-center">
          <img
            src={CloudDataGif}
            className="opacity-50 max-h-[20rem] lg:max-h-[25rem]"
            alt="background"
          />
        </div>
        <div className="order-0 md:order-0">
          <h2 className="text-2xl text-gray-12 lg:text-[35px] lg:leading-[42px]">
            Cloud Data <br /> Migration Services
          </h2>
          <p className="whitespace-pre-wrap pt-4 text-sm text-gray-600">
            Moving assets to the cloud brings unprecedented cost savings,
            security, and flexibility in data management.
          </p>
          <p className="whitespace-pre-wrap pt-4 text-sm text-gray-600">
            We provide everything from cloud readiness assessments to solution
            design, data migration, and cloud cost optimisation. We help you:
          </p>

          <div className="flex flex-col text-sm mx-auto max-w-[480px] space-y-2 my-6 lg:mx-0 lg:max-w-none">
            {[
              "Build single or hybrid cloud solutions that meet operational requirements",
              "Develop a custom cloud migration plan with platform, deployment, and architecture recommendations.",
              "Switch to serverless or other managed data infrastructure.",
              "Enhance cloud configurations to meet security and privacy regulations",
            ].map((text, index) => (
              <div
                key={index}
                className="flex flex-row relative gap-2 items-start"
              >
                <span className="top-1 absolute">
                  <FaCircleCheck className="text-[#006dad]" size={16} />
                </span>
                <div className="ml-7 -pt-2">{text}</div>
              </div>
            ))}
          </div>

          <div className="flex">
            <NavLink
              className="flex h-[40px] items-center justify-center rounded-[4px] px-4 text-sm  text-white bg-[#006dad] hover:!bg-[#006dad] hover:shadow-inner shadow-sm space-x-2"
              to="/booking"
            >
              <span className="opacity-80">
                {" "}
                Book a free discovery session{" "}
              </span>{" "}
              <img src={SendUpIcon} className="h-2" alt="SendUpIcon" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#fefcfc] gap-3 w-full py-16">
        <div className="grid scroll-mt-32 grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-16 lg:w-8/12 w-11/12">
          <div className="flex flex-col text-sm mx-auto max-w-[480px] space-y-2 lg:mx-0 lg:max-w-none order-1 md:order-1">
            {[
              "Move from legacy to modern analytic solutions to meet modern demands.",
              "Define a cloud migration strategy to guide the move to the cloud",
              "Accelerate data and analytics migration with minimal business downtime.",
              "Optimise existing cloud resources to reduce ongoing expenditure",
              "Automate cloud data access, backup, and storage.",
              "Set up and implement or integrate multi-cloud environments.",
            ].map((text, index) => (
              <div
                key={index}
                className="flex flex-row relative gap-2 items-start"
              >
                <span className="top-1 absolute">
                  <FaCircleCheck className="text-[#006dad]" size={16} />
                </span>
                <div className="ml-7 -pt-2">{text}</div>
              </div>
            ))}
          </div>
          <div className="order-0 md:order-0">
            <h2 className="text-2xl text-gray-12 lg:text-[35px] lg:leading-[42px]">
              Business value proposition
            </h2>
            <p className="whitespace-pre-wrap pt-4 text-sm text-gray-600 lg:w-4/5">
              Our cloud consulting services are best suited for organisations
              looking to:
            </p>
          </div>
        </div>
      </div>
      <div className="grid scroll-mt-32 grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-16 lg:w-8/12 w-11/12">
        <div className="order-1 md:order-1 flex justify-center items-center">
          <img
            src={AIGif}
            className="opacity-50 max-h-[20rem] lg:max-h-[25rem]"
            alt="background"
          />
        </div>
        <div className="order-0 md:order-0">
          <h2 className="text-2xl text-gray-12 lg:text-[35px] lg:leading-[42px]">
            AI and Machine Learning Services
          </h2>
          <p className="whitespace-pre-wrap pt-4 text-sm text-gray-600">
            Discover how AI and ML automate business processes, optimise
            operations, and support future-focused decision-making.
          </p>
          <p className="whitespace-pre-wrap pt-4 text-sm text-gray-600">
            We identify and implement the processes and technology necessary to
            meet your organisation’s artificial intelligence goals. We help you:
          </p>

          <div className="flex flex-col text-sm mx-auto max-w-[480px] space-y-2 my-6 lg:mx-0 lg:max-w-none">
            {[
              "Implement the data infrastructure that powers successful AI projects.",
              "Experiment, benchmark, and select the best models for your use case.",
              "Train and customise models with internal data without compromising on security",
              "Set up deployment, version control, and other MLOps/AIOps infrastructure",
            ].map((text, index) => (
              <div
                key={index}
                className="flex flex-row relative gap-2 items-start"
              >
                <span className="top-1 absolute">
                  <FaCircleCheck className="text-[#006dad]" size={16} />
                </span>
                <div className="ml-7 -pt-2">{text}</div>
              </div>
            ))}
          </div>

          <div className="flex">
            <NavLink
              className="flex h-[40px] items-center justify-center rounded-[4px] px-4 text-sm  text-white bg-[#006dad] hover:!bg-[#006dad] hover:shadow-inner shadow-sm space-x-2"
              to="/booking"
            >
              <span className="opacity-80">
                {" "}
                Book a free discovery session{" "}
              </span>{" "}
              <img src={SendUpIcon} className="h-2" alt="SendUpIcon" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#fefcfc] gap-3 w-full py-16">
        <div className="grid scroll-mt-32 grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-16 lg:w-8/12 w-11/12">
          <div className="flex flex-col text-sm mx-auto max-w-[480px] space-y-2 lg:mx-0 lg:max-w-none order-1 md:order-1">
            {[
              "Identify and implement AI/ML use cases with measurable business impact.",
              "Build responsible AI solutions with appropriate oversight and scrutiny.",
              "Extend existing data governance policies to AI/ML.",
              "Train employees and executives on the capabilities and possibilities of AI.",
              "Identify and implement best-fit AI tools and solutions within the current ecosystem.",
              "Build and deploy AI/ML applications at scale.",
            ].map((text, index) => (
              <div
                key={index}
                className="flex flex-row relative gap-2 items-start"
              >
                <span className="top-1 absolute">
                  <FaCircleCheck className="text-[#006dad]" size={16} />
                </span>
                <div className="ml-7 -pt-2">{text}</div>
              </div>
            ))}
          </div>
          <div className="order-0 md:order-0">
            <h2 className="text-2xl text-gray-12 lg:text-[35px] lg:leading-[42px]">
              Business value proposition
            </h2>
            <p className="whitespace-pre-wrap pt-4 text-sm text-gray-600 lg:w-4/5">
              Our cloud consulting services are best suited for organisations
              looking to:
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 relative items-center lg:w-8/12 w-11/12 my-10">
        <h2 className="w-full text-center text-3xl lg:text-4xl lg:leading-[48px]">
          Our Project Workflow
        </h2>
        <p className="lg:text-lg md:w-1/2 text-center">
          <span className="text-gray-600 md:whitespace-pre-wrap">
            Every project is different – but a typical engagement with us looks
            like this:
          </span>
        </p>
        <div className="grid grid-cols-1 gap-[5rem] lg:w-1/2 w-full mt-16">
          <div className="flex flex-col gap-4 items-center bg-[#fefcfc] border border-gray-300 rounded-lg p-5">
            <img src={IconSeven} className="-mt-[3rem]" alt="IconSeven" />
            <span className="font-medium text-lg">Initial consultation</span>
            <div className="text-gray-500 text-sm text-center leading-6 pb-7">
              Book a free 30-minute call with our data consultants and discuss
              your requirements. We will outline possible solutions and explain
              what working with us looks like.
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center bg-[#fefcfc] border border-gray-300 rounded-lg p-5">
            <img src={IconEight} className="-mt-[3rem]" alt="IconEight" />
            <span className="font-medium text-lg">Project orientation</span>
            <div className="text-gray-500 text-sm text-center leading-6 pb-7">
              We conduct in-depth meetings with key stakeholders to gather
              detailed requirements and submit a formal proposal, project
              timeline, plan, and quote.
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center bg-[#fefcfc] border border-gray-300 rounded-lg p-5">
            <img src={IconNine} className="-mt-[3rem]" alt="IconNine" />
            <span className="font-medium text-lg">Project delivery</span>
            <div className="text-gray-500 text-sm text-center leading-6 pb-7">
              We work with your business and technical team members to implement
              any technical solutions. We also provide all required project
              deliverables, such as strategy documents and plans, and conduct
              any necessary training sessions and workshops.
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center bg-[#fefcfc] border border-gray-300 rounded-lg p-5">
            <img src={IconTen} className="-mt-[3rem]" alt="IconTen" />
            <span className="font-medium text-lg">Ongoing support</span>
            <div className="text-gray-500 text-sm text-center leading-6 pb-7">
              We provide ongoing support and mentoring until all team members
              are comfortable with the new data solution
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full bg-[#f9f9f9] py-10">
        <div className="flex flex-col gap-10 lg:w-8/12 w-11/12">
          <div className="grid lg:grid-cols-2 gap-10 w-full pb-4 items-center border-gray-200">
            <div className="text-center text-3xl lg:text-left lg:text-[2.4rem] lg:leading-[3rem]">
              Technologies <br /> We Work With
            </div>
            <div className="text-base text-gray-500 lg:mx-4">
              We provide vendor-independent expertise across your entire data
              stack
            </div>
          </div>
          <div className="flex flex-row items-center justify-between lg:justify-start flex-wrap text-sm mx-auto gap-5 w-full space-y-2 mb-6 lg:mx-0 lg:max-w-none">
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
              fivetranImage,
              microsoftImage,
              snowflakeImage,
              sigmaImage,
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

      <div className="grid lg:grid-cols-2 gap-10 lg:w-8/12 w-11/12 items-center">
        <div className="flex flex-col w-full">
          <h2 className="text-center text-3xl lg:text-left lg:text-4xl lg:leading-[50px]">
            Why Sarathealthcare ?
          </h2>
          <p className="text-sm mx-auto max-w-[480px] pt-2 text-center text-gray-500 lg:mx-0 lg:text-left">
            With over 20+ years in the data industry, we have experience solving
            the exact problems you face today. Our AI and data experts bring
            strong technical skills, insider knowledge, and a collaborative
            approach to your data project. We’re passionate about driving your
            business transformation and committed to delivering the results you
            need.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            alt="[object Object] Illustration"
            loading="lazy"
            src={ectcGif}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 lg:w-8/12 w-11/12 ">
        <h2 className="text-2xl text-gray-12 lg:text-[35px] lg:leading-[42px]">
          Customer stories
        </h2>
        <TestimonialCarousel />
      </div>
      <div className="flex flex-col bg-pattern items-center w-full py-10 border-t">
        <div className="flex flex-col items-center gap-3 lg:w-8/12 w-11/12 py-16">
          <div className="text-2xl lg:text-3xl !leading-[3rem] text-center lg:w-3/4">
            Make sense of endless data technologies and approaches without being
            overwhelmed.
          </div>
          <p className="text-base mx-auto pt-2 text-center text-gray-500 lg:text-left">
            Sarathealthcare delivers clarity and results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
