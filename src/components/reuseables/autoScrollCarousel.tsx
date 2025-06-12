import React, { useEffect, useRef } from 'react';

interface AutoScrollCarouselProps {
  images: string[];  // Array of image URLs
  height?: string;   // Optionally, the height of the carousel
}

const AutoScrollCarousel: React.FC<AutoScrollCarouselProps> = ({ images, height = '200px' }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Function to start auto-scrolling the carousel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollStep = 1; // How many pixels to scroll at each interval
    const delay = 10; // Delay in ms between each scroll step

    const autoScroll = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0; // Reset to start for infinite scroll
      } else {
        carousel.scrollLeft += scrollStep;
      }
    };

    const intervalId = setInterval(autoScroll, delay);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="carousel-wrapper items-center" ref={carouselRef}>
      <div className="carousel-images gap-5">
        {images.concat(images).map((image, index) => (
          <img key={index} src={image} alt={`carousel-img-${index}`} className="carousel-image h-10" />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollCarousel;
