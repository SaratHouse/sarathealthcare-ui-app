import { useEffect, useState } from "react";
import { testimonalsQuery } from "../../utils/data";
import { client } from "../../utils/client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { quoteIcon } from "../../constant/images";

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

  useEffect(() => {
      let interval: NodeJS.Timeout;
  
      interval = setInterval(() => {
        setCurrent((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, [testimonials]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full flex justify-center mt-5">
      <div className="flex flex-col gap-3 lg:w-8/12 w-11/12 items-center">
        <div className="font-semibold tracking-wider lg:text-[2.8rem] text-4xl lg:leading-[4rem] leading-7 text-[#1663a3]">What Clients Say</div>
        <div className="uppercase tracking-widest">Client's opinions matter to us</div>
        <div className="flex items-center justify-center mt-5 w-full">
          <div className="flex flex-nowrap relative items-center justify-center lg:space-x-4 w-full overflow-hidden">
            <div className="w-[30rem] opacity-60 transition-opacity duration-300 hidden md:block">
              {testimonials.length > 0 && (
                <div className="bg-[#fefcfc] flex flex-col items-center border border-gray-300 rounded-lg p-4 shadow-md">
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
                <div className="w-full flex justify-end">
                  <div className="border hover:border-[#1663a3] hover:border-l-8 rounded-md p-5 py-7 text-sm flex flex-col relative gap-4">
                    <div className="max-w-[430px] leading-6 text-lg lg:text-left text-center">
                      {testimonials[current]?.quote}
                    </div>
                    <div className="font-bold text-[#1663a3] text-xl">{testimonials[current]?.author}</div>
                    <img
                      alt="[object Object] Illustration"
                      loading="lazy"
                      className="h-5 absolute right-4 top-3"
                      decoding="async"
                      data-nimg="1"
                      src={quoteIcon}
                    />
                  </div>
                </div>
                // <div className="bg-[#fefcfc] flex flex-col items-center border border-gray-300 rounded-lg p-5 shadow-lg">
                //   <p className="text-gray-700 italic text-center text-sm w-4/5">
                //     "{testimonials[current]?.quote}"
                //   </p>
                //   <p className="text-[#1663a3] font-semibold mt-4 text-center">
                //     {testimonials[current]?.author}
                //   </p>
                // </div>
              )}
              <button
                onClick={prevSlide}
                className="absolute left-0 lg:-left-6 top-1/2 transform -translate-y-1/2 bg-[#e67238] text-white p-2 rounded-full z-10 shadow-md hover:bg-[#1663a3] transition"
              >
                <FaArrowLeft size={10} />
              </button>


              <button
                onClick={nextSlide}
                className="absolute right-0 lg:-right-6 top-1/2 transform -translate-y-1/2 bg-[#e67238] text-white p-2 rounded-full z-20 shadow-md hover:bg-[#1663a3] transition"
              >
                <FaArrowRight size={10} />
              </button>
            </div>

            {/* Next Testimonial */}
            <div className="w-[30rem] opacity-60 transition-opacity duration-300 hidden md:block">
              {testimonials.length > 0 && (
                <div className="bg-[#fefcfc] flex flex-col items-center border border-gray-300 rounded-lg p-4 shadow-md">
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
      </div>
    </div>
  );
}
