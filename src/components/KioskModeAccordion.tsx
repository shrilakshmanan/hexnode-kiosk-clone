import { useEffect, useRef, useState } from "react";
import KioskAccordionfirstImg from "../../public/assets/kioskAccordian/KioskAccordion-first-img.webp";
import KioskAccordionsecondImg from "../../public/assets/kioskAccordian/KioskAccordion-second-img.webp";
import KioskAccordionthirdImg from "../../public/assets/kioskAccordian/KioskAccordion-third-img.webp";
import KioskAccordionfourthImg from "../../public/assets/kioskAccordian/KioskAccordion-fourth-img.webp";
import KioskAccordionfifthImg from "../../public/assets/kioskAccordian/KioskAccordion-fifth-img.webp";

const accordionItems = [
  {
    title: "Effortless kiosk deployment & management",
    description:
      "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox, or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
    img: KioskAccordionfirstImg,
  },
  {
    title: "Customized interface for brand visibility",
    description:
      "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
    img: KioskAccordionsecondImg,
  },
  {
    title: "What more can you do with Hexnode kiosk?",
    description:
      "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
    img: KioskAccordionthirdImg,
  },
  {
    title: "Secure and update your app ecosystem",
    description:
      "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
    img: KioskAccordionfourthImg,
  },
  {
    title: "Provide an easy-to-use interface for end-users",
    description:
      "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
    img: KioskAccordionfifthImg,
  },
];

/**
 * KioskAccordion component
 *
 * This component renders an accordion section with multiple items, each with a
 * title and description. The accordion allows users to toggle the visibility
 * of each item's content. When an item is active, its associated image is
 * displayed alongside the accordion.
 * 
 * The component utilizes the useState hook to manage the active accordion
 * index, and the useRef hook to maintain references to the accordion content
 * elements for dynamic styling. The useEffect hook is used to handle
 * content animation transitions based on the active index.
 *
 * @returns {JSX.Element} The KioskAccordion component
 */

export default function KioskAccordion() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleAccordionhandler = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? prevIndex : index));
  };


  useEffect(() => {
    if (activeIndex === null) return; 

    contentRefs.current.forEach((content, index) => {
      if (content) {
        if (activeIndex === index) {
          content.style.maxHeight = `${content.scrollHeight}px`;
          content.style.opacity = "1";
        } else {
          content.style.maxHeight = "0px";
          content.style.opacity = "0";
        }
      }
    });

  }, [activeIndex]);

  useEffect(() => {
    if (contentRefs.current[0]) {
      contentRefs.current[0].style.maxHeight = `${contentRefs.current[0].scrollHeight}px`;
    }
  }, []);

  return (
    <section className="py-8 lg:py-14">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
        {/* Left  Section */}
        <div className="hidden lg:block lg:w-2/5">
          <img
            src={accordionItems[activeIndex]?.img}
            alt="Kiosk Mode"
            className="rounded-lg shadow-md w-full h-auto object-cover max-h-100 transition-opacity duration-500 ease-in-out"
          />
        </div>

        {/* Right  Section */}
        <div className="w-full lg:w-3/5">
          <h2 className="text-xl lg:text-2xl font-bold text-[#020a19] mb-4">
            What additional possibilities does the Kiosk mode offer?
          </h2>

          <div className="space-y-2">
            {accordionItems.map((item, index) => (
              <div key={index} className="border-b">
                <button
                  className="w-full text-left py-2 font-medium text-base flex justify-between items-center hover:text-blue-600 transition hover:cursor-pointer"
                  onClick={() => toggleAccordionhandler(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`accordion-content-${index}`}
                >
                  {item.title}
                  <span className="text-lg">{activeIndex === index ? "−" : "+"}</span>
                </button>

                <div
                  ref={(el) => {
                    contentRefs.current[index] = el; 
                  }}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight:
                      activeIndex === index && contentRefs.current[index]
                        ? `${contentRefs.current[index]!.scrollHeight}px`
                        : "0px",
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  role="region"
                  aria-labelledby={`accordion-button-${index}`}
                >
                  <p className="text-gray-600 py-1 text-sm">{item.description}</p>
                  <div className="flex items-center justify-between mt-1">
                    <a
                      href="https://www.hexnode.com/signup/"
                      className="text-red-600 hover:underline text-sm font-bold p-2"
                    >
                      Try for free
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
