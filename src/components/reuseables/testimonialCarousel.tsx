import { useEffect, useState } from "react";
import { testimonalsQuery } from "../../utils/data";
import { client } from "../../utils/client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface Testimonial {
  logo: string;
  quote: string;
  author: string;
}

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
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

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-nowrap relative items-center justify-center lg:space-x-4 w-full overflow-hidden">
        <div className="w-[30rem] opacity-60 transition-opacity duration-300 hidden md:block">
          {testimonials.length > 0 && (
            <div className="bg-[#fefcfc] flex flex-col items-center border border-gray-300 rounded-lg p-4 shadow-md">
              <img
                src={testimonials[(current - 1 + testimonials.length) % testimonials.length]?.logo}
                alt="Company Logo"
                className="h-6 mb-2"
              />
              <p className="text-gray-500 italic text-xs text-center w-4/5">
                "{testimonials[(current - 1 + testimonials.length) % testimonials.length]?.quote}"
              </p>
              <p className="text-gray-400 mt-2 text-xs text-center">
                {testimonials[(current - 1 + testimonials.length) % testimonials.length]?.author}
              </p>
            </div>
          )}
        </div>

        <div className="lg:w-[50rem] w-full relative transition-opacity duration-300">
          {testimonials.length > 0 && (
            <div className="bg-[#fefcfc] flex flex-col items-center border border-gray-300 rounded-lg p-5 shadow-lg">
              <img
                src={testimonials[current]?.logo}
                alt="Company Logo"
                className="h-6 mb-4"
              />
              <p className="text-gray-700 italic text-center text-sm w-4/5">
                "{testimonials[current]?.quote}"
              </p>
              <p className="text-gray-500 mt-4 text-center">
                {testimonials[current]?.author}
              </p>
            </div>
          )}
          <button
            onClick={prevSlide}
            className="absolute lg:-left-4 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full z-10 shadow-md hover:bg-green-600 transition"
          >
            <FaArrowLeft size={10} />
          </button>


          <button
            onClick={nextSlide}
            className="absolute right-0 lg:-right-4 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full z-20 shadow-md hover:bg-green-600 transition"
          >
            <FaArrowRight size={10} />
          </button>
        </div>

        {/* Next Testimonial */}
        <div className="w-[30rem] opacity-60 transition-opacity duration-300 hidden md:block">
          {testimonials.length > 0 && (
            <div className="bg-[#fefcfc] flex flex-col items-center border border-gray-300 rounded-lg p-4 shadow-md">
              <img
                src={testimonials[(current + 1) % testimonials.length]?.logo}
                alt="Company Logo"
                className="h-6 mb-2"
              />
              <p className="text-gray-500 italic text-xs text-center w-4/5">
                "{testimonials[(current + 1) % testimonials.length]?.quote}"
              </p>
              <p className="text-gray-400 mt-2 text-xs text-center">
                {testimonials[(current + 1) % testimonials.length]?.author}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
