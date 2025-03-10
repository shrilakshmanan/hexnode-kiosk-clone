import { useState } from "react";

/**
 * WhyChooseHexnodeSlider component
 *
 * A slider component that displays a list of testimonials from satisfied customers.
 *
 * The component displays a single testimonial at a time and includes navigation
 * buttons to move to the previous or next testimonial. The component also includes
 * a dots navigation system to jump to any specific testimonial.
 *
 * @returns The WhyChooseHexnodeSlider component
 */

import firstTetimonal from "../../public/assets/testimonals/Testimonal-person-1.webp"
import secondTetimonal from "../../public/assets/testimonals/Testimonal-person-2.webp"
import thirdTetimonal from "../../public/assets/testimonals/Testimonal-person-3.webp"

const Testimonals = () => {
  interface ISlide {
    id: number;
    image: string;
    alt: string;
    quote: string;
    reviewer: string;
    reviewerTitle?: string;
    reviewerCompany?: string;
  }

  const slides: ISlide[] = [
    {
      id: 1,
      image: firstTetimonal,
      alt: "Dalibor Kruljac image",
      quote: "“Most complete MDM solution I found, and I tested many of them, including major names”",
      reviewer: "Dalibor Kruljac",
      reviewerCompany: "KAMELEYA LTD",
    },
    {
      id: 2,
      image: secondTetimonal,
      alt: "Justin Modrak image",
      quote: "“Hexnode is of great value. Works great with Android and iOS!”",
      reviewer: "Justin Modrak",
      reviewerTitle: "Technology Coordinator",
      reviewerCompany: "East Troy Community School District",
    },
    {
      id: 3,
      image: thirdTetimonal,
      alt: "Chris Robinson image",
      quote: "“It seemed to be in-line with everything we were looking at.”",
      reviewer: "Chris Robinson",
      reviewerTitle: "Executive Account Manager, NCS",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const goToPrevious = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const goToNext = () => setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  return (
    <section className="bg-gray-100 py-10 px-5 md:py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-900">
          Why should you choose Hexnode?
        </h2>

        <div className="relative mt-10 bg-white rounded-lg shadow-md">

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-none flex flex-col md:flex-row items-center p-5">

                  <div className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left ">
                    <p className="text-lg md:text-xl font-semibold text-gray-800">{slide.quote}</p>
                    <div className="mt-3">
                      <p className="text-sm font-bold text-gray-900">{slide.reviewer}</p>
                      {slide.reviewerTitle && <p className="text-sm text-gray-700">{slide.reviewerTitle}</p>}
                      {slide.reviewerCompany && <p className="text-sm text-gray-600">{slide.reviewerCompany}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <button
            onClick={goToPrevious}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white p-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200 ease-in-out block"
            aria-label="Previous slide"
          >
            <img src="https://static.hexnode.com/v2/assets/img/ads-pages/prev-arrow-icon-black.svg" alt="Previous" width="10" />
          </button>

          <button
            onClick={goToNext}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white p-3 rounded-lg shadow-md hover:bg-gray-200 transition block"
            aria-label="Next slide"
          >
            <img src="https://static.hexnode.com/v2/assets/img/ads-pages/next-arrow-icon-black.svg" alt="Next" width="10" />
          </button>
        </div>


        <div className="flex justify-center mt-5">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-gray-900 w-4" : "bg-gray-400"
                }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonals;
