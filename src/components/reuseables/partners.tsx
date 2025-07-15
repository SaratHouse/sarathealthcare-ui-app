import { barkImage, connectingBritainImage, carelineImage, atlasImage, NHSImage, newhamImage, QCSImage, CQCRatings, trainHealthcareImage, towergateImage } from "../../constant/images";
import AutoScrollCarousel from "./autoScrollCarousel";

const imageList = [
    barkImage,
    connectingBritainImage,
    carelineImage,
    atlasImage,
    NHSImage,
    newhamImage,
    QCSImage,
    trainHealthcareImage,
    towergateImage
  ]
export default function Partners() {
  return (
    <div className="w-full flex justify-center bg-white py-16 px-4">
      <div className="w-full max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          {/* <div className="text-[#e67238] uppercase tracking-widest font-semibold mb-3">
            Trusted Partnerships
          </div> */}
          <h2 className="font-bold text-3xl md:text-4xl text-[#1663a3] mb-4">
            Trusted Partnerships
          </h2>
          <div className="w-24 h-1 bg-[#e67238] mx-auto"></div>
        </div>

        <div className="mb-16">
          <AutoScrollCarousel images={imageList} />
        </div>

        
        {/* Logos Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center mb-16 slide-in-right">
          {[
            { src: barkImage, name: "Bark" },
            { src: connectingBritainImage, name: "Connecting Britain" },
            { src: carelineImage, name: "Careline" },
            { src: atlasImage, name: "Atlas" },
            { src: cronerImage, name: "Croner" },
            { src: homecareImage, name: "Homecare" },
            { src: NHSImage, name: "NHS" },
            { src: nourishImage, name: "Nourish" },
            { src: newhamImage, name: "Newham" },
            { src: towerHamletsImage, name: "Tower Hamlets" },
            { src: QCSImage, name: "QCS" },
            { src: skillsImage, name: "Skills for Care" },
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-[#1663a3]"
            >
              <img
                src={item.src}
                alt={item.name}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div> */}
        
        {/* CQC Accreditation */}
        <div className="bg-gradient-to-r from-[#f4e8e3] to-[#e6f0fa] rounded-2xl overflow-hidden border border-[#e67238]/30">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center p-8">
            <div className="flex flex-col">
              <div className="text-[#1663a3] font-bold text-lg mb-2">
                Quality Assurance
              </div>
              <h3 className="font-bold text-2xl text-[#1663a3]">
                CQC Regulated & Rated "Good"
              </h3>
              <div className="w-16 h-1 bg-[#e67238] my-4"></div>
            </div>
            
            <p className="text-gray-700 lg:col-span-2">
              We are Care Quality Commission regulated and our services are rated as Good. 
              We are committed to providing the highest standards of care and support to our clients, 
              with rigorous quality assurance processes that ensure excellence in every aspect of our service.
            </p>
            
            <a 
              href="https://www.cqc.org.uk/location/1-11817828876" 
              target="_blank" 
              rel="noreferrer"
              className="flex flex-col items-center lg:items-start"
            >
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex lg:flex-row flex-col items-center w-full lg:w-auto">
                <img 
                  src={CQCRatings} 
                  alt="Care Quality Commission" 
                  className="h-24"
                />
                <div className="ml-4">
                  <div className="font-bold text-[#1663a3]">View Our Rating</div>
                  <div className="flex items-center text-sm text-[#e67238] font-medium mt-1">
                    <span>Visit CQC Website</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { value: "98%", label: "Client Satisfaction" },
            { value: "30+", label: "Trained Professionals" },
            { value: "24/7", label: "Support Availability" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-xl text-center border border-gray-200"
            >
              <div className="text-4xl font-bold text-[#1663a3] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
