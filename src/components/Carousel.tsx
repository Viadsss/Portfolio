import { useState, useEffect } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface CarouselProps {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[];
  isActive?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
  isActive = true,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(() => {
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    }, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, slides.length]);

  return (
    <div className={`relative overflow-hidden ${isActive ? "" : "md:hidden"}`}>
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img) => (
          <img key={img} src={img} alt="" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <IconChevronLeft size={32} />
        </button>
        <button
          onClick={next}
          className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <IconChevronRight size={32} />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 cursor-pointer rounded-full bg-white transition-all ${
                curr === index ? "px-4 py-1" : "bg-opacity-50"
              }`}
              onClick={() => setCurr(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
