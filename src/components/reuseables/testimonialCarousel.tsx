import { useEffect, useState } from "react";
import { testimonalsQuery } from "../../utils/data";
import { client } from "../../utils/client";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa6";
import { quoteIcon } from "../../constant/images";

interface Testimonial {
  logo: string;
  quote: string;
  author: string;
}

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await client.fetch(testimonalsQuery());
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (testimonials.length > 0) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [testimonials]);

  const prevSlide = () => 
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const nextSlide = () => 
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  // Calculate indices for dual-column display
  const secondIndex = (currentIndex + 1) % testimonials.length;
  const isSingleColumn = testimonials.length === 1;

  return (
    <div className="w-full flex justify-center lg:py-40 py-16 px-4 bg-blue-100/30">
      <div className="flex flex-col items-center w-full max-w-7xl">
        <div className="lg:text-left text-center w-full mb-20">
          <div className="text-[#e67238] uppercase tracking-widest font-semibold mb-2">
            Testimonial
          </div>
          <h2 className="font-bold tracking-wide text-2xl lg:text-4xl text-[#1663a3] mb-4">
            What Our Client Say
          </h2>
        </div>

        <div className="w-full relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden lg:block absolute -left-4 lg:top-1/2 -translate-y-1/2 z-10 bg-[#e67238] text-white p-3 rounded-full shadow-lg hover:bg-[#1663a3] transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <FaArrowLeft size={16} />
          </button>

          <button
            onClick={nextSlide}
            className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-[#e67238] text-white p-3 rounded-full shadow-lg hover:bg-[#1663a3] transition-all duration-300"
            aria-label="Next testimonial"
          >
            <FaArrowRight size={16} />
          </button>

          {/* Dual Column Testimonials */}
          <div className={`grid grid-cols-1 ${isSingleColumn ? '' : 'md:grid-cols-2'} lg:gap-6 md:gap-10 gap-20 transition-all duration-500`}>
            {/* First Column */}  
            <TestimonialCard 
              testimonial={testimonials[currentIndex]} 
              isActive={true}
            />
            
            {/* Second Column (hidden on mobile when only one testimonial) */}
            {!isSingleColumn && (
              <TestimonialCard 
                testimonial={testimonials[secondIndex]} 
                isActive={true}
              />
            )}
          </div>
        </div>
        <div className="w-full lg:hidden flex justify-end mt-7 gap-2">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="z-10 bg-[#e67238] text-white p-3 rounded-full shadow-lg hover:bg-[#1663a3] transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <FaArrowLeft size={16} />
          </button>

          <button
            onClick={nextSlide}
            className="z-10 bg-[#e67238] text-white p-3 rounded-full shadow-lg hover:bg-[#1663a3] transition-all duration-300"
            aria-label="Next testimonial"
          >
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial, isActive }: { 
  testimonial: Testimonial, 
  isActive: boolean 
}) {
  if (!testimonial) return null;
  
  return (
    <div className={`bg-transparent relative rounded-lg shadow-lg p-6 py-10 border-4 border-[#1663a3] transition-all duration-500 ${
      isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    }`}>
      <div className="absolute -top-16 left-2 w-24 h-24 p-2 bg-white rounded-full">
        <img 
          src={testimonial.logo} 
          alt="logo of the testimonial author" 
          className="h-full rounded-full object-cover object-top"
        />
      </div>
      <img 
        src={quoteIcon}
        alt="Quote icon" 
        className="h-6 absolute right-5 top-0 opacity-40"
      />
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-lg" />
        ))}
      </div>
      
      <p className="text-gray-600 text-lg leading-relaxed mb-4">
        "{testimonial.quote}"
      </p>
      
      <div className="absolute bottom-5 font-bold text-[#1663a3] text-xl">
        - {testimonial.author}
      </div>
    </div>
  );
}