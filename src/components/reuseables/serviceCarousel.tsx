import { ComplexCare, DementiaCare, EndofLifeCare, LiveInCare, PersonalCare, RespiteCare } from "../../constant/images";

interface Service {
  icon: string;
  description: string;
  title: string;
}

const serviceList: Service[] = [
  {
    icon: PersonalCare,
    description: "Our personal care services are designed to support you with daily activities such as bathing, dressing, meal preparation, and mobility. We focus on maintaining your dignity and independence while ensuring your safety and well-being at home.",
    title: "Personal Care",
  },
  {
    icon: DementiaCare,
    description: "We provide specialized dementia care tailored to the unique needs of individuals living with dementia. Our compassionate caregivers are trained to promote safety, comfort, and quality of life, helping clients and their families navigate this journey with confidence.",
    title: "Dementia Care",
  },
  {
    icon: LiveInCare,
    description: "For round-the-clock support, our live-in care services offer a dedicated caregiver who lives with you in your home. This ensures continuous care, companionship, and peace of mind for you and your loved ones. We have the right staff for you at all times.",
    title: "Live-in Care",
  },
  {
    icon: RespiteCare,
    description: "Caring for a loved one can be rewarding but challenging. Our respite care services provide temporary relief for family caregivers, ensuring your loved one continues to receive high-quality care while you take a well-deserved break.",
    title: "Respite Care",
  },
  {
    icon: ComplexCare,
    description: "We specialize in providing complex care for individuals with chronic illnesses, disabilities, or medical conditions that require specialized attention. Our highly trained staff work closely with healthcare professionals to deliver quality care.",
    title: "Complex Care",
  },
  {
    icon: EndofLifeCare,
    description: "Our end-of-life care services focus on providing comfort, dignity, and emotional support during life’s final stages. We work closely with families and healthcare providers to ensure compassionate care that honors your loved one’s wishes.",
    title: "End-of-life Care",
  },
]

export default function ServiceCarousel() {
  return (
    <div className="w-full flex justify-center bg-[#f4e8e3] mt-10 py-14">
      <div className="flex flex-col gap-10 lg:w-8/12 w-11/12">
        <div className="font-semibold tracking-wider lg:text-[2.8rem] text-4xl lg:leading-[3rem] leading-7 text-[#1663a3]"><span className="block lg:text-3xl text-xl text-[#e67238]">Our</span>Service</div>           
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-nowrap relative items-center justify-center lg:space-x-4 w-full overflow-hidden">
            <div className="grid lg:grid-cols-3  gap-5 w-full relative duration-300">
              {serviceList.length > 0 && serviceList?.map((service, index) =>  (
                <div key={index} className="bg-white text-[#1663a3] hover:text-[#1663a3] hover:bg-[#e67238] flex flex-col items-center translate-1/4 border border-gray-300 rounded-lg gap-5 p-5 lg:h-[25rem] h-[22rem] shadow-lg shadow-slate-350 relative">
                  <img
                    src={service?.icon}
                    alt="Company Logo"
                    className="h-20"
                  />
                  <div className="text-[1rem] text-black text-center">
                    {service?.description}
                  </div>
                  <div className="absolute mt-10 bottom-3 left-4 font-bold text-left text-2xl w-full">
                    {service?.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
