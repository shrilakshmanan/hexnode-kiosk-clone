import { useState, useEffect } from "react";
import firstImg from "../../public/assets/kioskModes/kiosk-mode-section-first-img.webp"
import secondImg from "../../public/assets/kioskModes/kiosk-mode-section-second-img.webp"
import thirdImg from "../../public/assets/kioskModes/kiosk-mode-section-third-img.webp"
import fourthImg from "../../public/assets/kioskModes/kiosk-mode-section-fourth-img.webp"
import fifthImg from "../../public/assets/kioskModes/kiosk-mode-section-fifth-img.webp"
/**
 * KioskModesSection component
 *
 * This component provides a section that highlights various kiosk modes
 * available for different use cases. It includes tabs for each mode 
 * such as Single App Kiosk, Multi-App Kiosk, Web-based Kiosk, Digital Signages, 
 * and ASAM Kiosk, each with its own description, bullet points and image.
 * 
 * The component is responsive, displaying an accordion for mobile devices
 * and tabbed navigation for desktop. It uses state to manage the active 
 * tab and adapts its layout based on the screen size.
 *
 * @returns {JSX.Element} The KioskModesSection component
 */

const KioskModesSection = () => {
 
  interface IKioskTab {
    title: string;
    heading: string;
    bulletList: string[];
    image: string;
    alt: string;
  }
  

  const tabs:IKioskTab[] = [
    {
      title: "Single App Kiosk",
      heading: "Powerful Single-App Kiosk solutions for enhanced control",
      bulletList: [
        "Provision the devices to run one specialized application, with limited functionalities.",
        "Customize the device settings to cater to a specific use-case each time.",
        "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
        "Empower your administrators with full control over the kiosk devices.",
      ],
      image: firstImg,
      alt: "A mobile phone just running one app under Single-App Kiosk mode.",
    },
    {
      title: "Multi-App Kiosk",
      heading: "Elevate efficiency with Multi-App Kiosk",
      bulletList: [
        "Limit device access to approved apps, ensuring focus and productivity.",
        "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
        "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
        "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
      ],
      image: secondImg,
      alt: "An illustration of multi-app kiosk functionality.",
    },
    {
      title: "Web-based Kiosk",
      heading: "Explore the new way to manage web apps and websites",
      bulletList: [
        "Let users access essential and approved web apps, website and files only.",
        "Make the best use of website kiosk with Hexnode's advanced settings.",
        "Tailor your experience to match your unique use case.",
        "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
      ],
      image: thirdImg,
      alt: "Image representing web-based kiosk mode.",
    },
    {
      title: "Digital Signages",
      heading: "Capture attention with Digital Signage Kiosks",
      bulletList: [
        "Transform your devices into captivating digital signage kiosks that grab attention.",
        "Engage your audience with vibrant images and seamless video streaming.",
        "Customize media files with trimming, muting, and background music.",
        "Advertise and show off your brand aesthetics to attract customers in different ways.",
        "Take control with Hexnode to reestablish your brand's presence.",
      ],
      image: fourthImg,
      alt: "Digital signage display image.",
    },
    {
      title: "ASAM Kiosk",
      heading: "Unlock the power of Autonomous Single App Mode (ASAM)",
      bulletList: [
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
        "Create focused, efficient and secure digital environments to match your requirements.",
        "Configure ASAM effortlessly and elevate your user experience like never before.",
      ],
      image: fifthImg,
      alt: "Illustration of ASAM-based kiosk usage.",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-[60px] flex justify-center items-center text-center flex-col lg:py-[60px]">
      <div className="mx-auto max-w-[1300px] w-[88%]">
        <h2 className="mx-auto text-[#020a19] text-[22px] leading-[1.25] font-[700] antialiased sm:text-[28px] max-w-[900px]">
          Specific kiosk modes for unique use cases
        </h2>
        
        <div className="pt-[40px] sm:pt-[60px]">
          {isMobile ? (
        
        <div className="flex flex-col">
        {tabs.map((tab, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full text-left p-4 font-bold bg-gray-200 flex justify-between items-center"
              onClick={() => setActiveTab(activeTab === index ? -1 : index)}
              aria-expanded={activeTab === index}
              aria-controls={`tab-panel-${index}`}
              id={`tab-button-${index}`}
            >
              {tab.title}
              <span className="text-xl transition-transform duration-300">
                {activeTab === index ? "−" : "+"}
              </span>
            </button>
            
            <div
             id={`tab-panel-${index}`}
             role="region"
             aria-labelledby={`tab-button-${index}`}
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeTab === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 bg-gray-100">
                <h3 className="font-bold text-lg">{tab.heading}</h3>
                <ul className="mt-2">
                  {tab.bulletList.map((item, idx) => (
                    <li key={idx} className="mb-2 text-sm">{item}</li>
                  ))}
                </ul>
                <img src={tab.image} alt={tab.alt} className="mt-4 w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
          ) : (
           
            <div className="relative hidden sm:block">
              <div className="flex bg-white justify-center relative">
                <div className="w-full relative border border-solid border-[#f7f7f7] rounded-t-[4px] overflow-hidden overflow-x-auto scroll-smooth">
                  <div className="relative inline-block w-full">
                    <div
                      className="absolute bottom-0 h-[80px] transition-all duration-600 ease-[cubic-bezier(0.25,0.1,0.25,1)] bg-[#020a19] rounded-[4px]"
                      style={{
                        width: `${100 / tabs.length}%`,
                        left: `${activeTab * (100 / tabs.length)}%`,
                      }}
                    ></div>
                    <ul className="flex duration-300 ease-in justify-between items-center scroll-smooth whitespace-nowrap cursor-pointer md:flex-wrap md:justify-center">
                      {tabs.map((tab, index) => (
                        <li
                          key={index}
                          onClick={() => setActiveTab(index)}
                          className="flex-1 min-h-[60px] px-[20px] sm:px-[30px] md:w-[49%] md:px-[15px] relative text-center whitespace-normal transition-all duration-400 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                        >
                          <p
                            className={`p-[15px_0] h-[60px] w-full flex justify-center items-center text-[18px] sm:text-[20px] font-[600] leading-[1.25] transition-all duration-400 ${
                              activeTab === index ? "text-[#fff]" : "text-[#020a19]/50"
                            }`}
                          >
                            {tab.title}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

          
              <div className="p-[40px] bg-[#f7f7f7] overflow-hidden">
                <div className="flex flex-col-reverse lg:flex-row justify-between transition-all duration-500 ease-in-out">
                  <div className="mb-[20px] lg:mb-0 flex-1 text-left max-w-[760px] sm:mx-auto lg:pr-[40px] transition-all duration-500 ease-in-out">
                    <h3 className="text-[#020A19] font-bold text-[20px] leading-[26px] pb-[15px] lg:pb-[40px] sm:text-[28px] sm:leading-[40px] transition-all duration-500 ease-in-out">
                      {tabs[activeTab]?.heading}
                    </h3>
                    <ul className="transition-all duration-500 ease-in-out">
                      {tabs[activeTab].bulletList.map((item, index) => (
                        <li key={index} className="relative mb-[10px] lg:mb-[25px] flex items-center transition-all duration-500 ease-in-out">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 transition-all duration-500 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-[14px] leading-[20px] sm:text-[16px] sm:leading-[22px] font-normal text-[#333333] transition-all duration-500 ease-in-out">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full max-w-[308px] flex-1 sm:max-w-[460px] transition-all duration-500 ease-in-out">
                    <img
                      alt={tabs[activeTab].alt}
                      loading="lazy"
                      width="570"
                      height="387"
                      decoding="async"
                      src={tabs[activeTab].image}
                      className="w-full object-cover rounded-lg transition-all duration-500 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default KioskModesSection;
