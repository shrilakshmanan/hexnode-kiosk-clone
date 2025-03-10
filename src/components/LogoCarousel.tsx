import { useEffect, useRef } from "react";
import slider1 from "../../public/assets/sliders/Slider1-img.svg";
import slider2 from "../../public/assets/sliders/Slider2-img.svg";
import slider3 from "../../public/assets/sliders/Slider3-img.svg";
import slider4 from "../../public/assets/sliders/Slider4-img.svg";
import slider5 from "../../public/assets/sliders/Slider5-img.svg";
import slider6 from "../../public/assets/sliders/Slider6-img.svg";
import slider7 from "../../public/assets/sliders/Slider7-img.svg";
import slider8 from "../../public/assets/sliders/Slider8-img.svg";
import slider9 from "../../public/assets/sliders/Slider9-img.svg";
import slider10 from "../../public/assets/sliders/Slider10-img.webp";

/**
 * Slider component
 * 
 * A slider component that showcases logos of companies that use Hexnode.
 * The component is infinitely scrollable and automatically scrolls horizontally.
 * The component is used in the homepage.
 * 
 * @returns {JSX.Element} The Slider component
 */


const LogoCarousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current as HTMLDivElement | null;

    const scroll = () => {
      if (slider) {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollTo({ left: 0, behavior: "instant" });
        } else {
          slider.scrollBy({ left: 1, behavior: "smooth" });
        }
      }
    };

    const interval = setInterval(scroll, 20);

    return () => clearInterval(interval);
  }, []);

  const logos = [
    { name: "Costco", src: slider1 },
    { name: "SAIC", src: slider2 },
    { name: "Hilton", src: slider3 },
    { name: "Group 1 Automotive", src: slider4 },
    { name: "Lowe’s", src: slider5 },
    { name: "Polaris", src: slider6 },
    { name: "Gorillas", src: slider7 },
    { name: "Wolt", src: slider8 },
    { name: "Marriott", src: slider9 },
    { name: "Merck", src: slider10 },
  ];

  const infiniteLogos = [...logos, ...logos];

  return (
    <section className="relative bg-[#F7F7F7] py-10" aria-label="Partner logos carousel">
      <div className="w-[88%] mx-auto max-w-[1300px] relative overflow-hidden">

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth whitespace-nowrap custom-scrollbar-hide"
        >
          {infiniteLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-40">
              <figure className="block w-full">
                <img
                  alt={logo.name}
                  src={logo.src}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  aria-hidden="true"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
