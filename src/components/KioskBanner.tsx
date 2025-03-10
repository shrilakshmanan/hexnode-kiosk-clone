import React from 'react';
import headerImg from "../../public/assets/hexnode-kiosk-header.webp"
/**
 * A section component for the Hexnode Kiosk Clone.
 *
 * This component renders a banner section that contains a heading, a form, and
 * an image. The heading is "Turn your devices into kiosks in a few minutes with
 * Hexnode UEM". The form contains an email input field and a "Get Started"
 * button. The image is a mobile phone with a kiosk interface.
 *
 * The component is responsive and will stack the content on smaller screens.
 *
 * @returns The KioskBanner component
 */
const KioskBanner: React.FC = () => {
  return (
    <section className="relative p-6 md:p-10 xl:p-16 bg-[#020A19] overflow-hidden pb-16 md:pb-24">
      <div className="w-[90%] max-w-[1000px] mx-auto">
        <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between">


          <div className="flex flex-col w-full xl:w-1/2 text-left xl:pr-8 order-2 xl:order-1">
            <header>
              <h1 className="text-white text-[24px] leading-[32px] sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[40px] xl:text-[36px] xl:leading-[44px] font-bold antialiased">
                Turn your devices into kiosks in a few minutes with Hexnode UEM
              </h1>
            </header>

            <form className="mt-4">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <input
                  placeholder="Your Work Email"
                  aria-describedby="email"
                  type="email"
                  className="w-full sm:w-1/2 text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] focus:outline-none focus:ring-2 shadow-none border border-gray-300 p-3 rounded-md text-white placeholder-white"
                  required
                />
                <button
                  className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-3 text-[14px] sm:text-[11px] leading-[18px] sm:leading-[28px] focus:outline-none focus:ring-2 uppercase text-white bg-[#dd0735] py-2 px-4 rounded-md hover:bg-[#bb022a] transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>


          <div className="w-full xl:w-1/2 max-w-[300px] sm:max-w-[400px] order-1 xl:order-2">
            <img
              alt="Mobile Kiosk"
              className="w-full h-auto object-cover rounded-md"
              src={headerImg}
            />
          </div>
        </div>
      </div>


      <svg
        className="absolute bottom-0 left-0 w-full sm:hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        aria-hidden="true"
      >
        <path
          fill="#fff"
          d="M0,64L30,69.3C60,75,120,85,180,80C240,75,300,53,360,48C420,43,480,64,540,80C600,96,660,96,720,85.3C780,75,840,53,900,48C960,43,1020,53,1080,69.3C1140,85,1200,107,1260,112C1320,117,1380,107,1410,101.3L1440,96V160H0Z"
        />
      </svg>


      <svg
        className="absolute bottom-0 left-0 w-full hidden sm:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 160"
        aria-hidden="true"
      >
        <path
          fill="#fff"
          d="M0,120C80,100,160,80,240,70C320,60,400,70,480,80C560,90,640,100,720,110C800,120,880,130,960,120C1040,110,1120,90,1200,85C1280,80,1360,90,1440,100V160H0Z"
        />
      </svg>
    </section>

  );
};

export default KioskBanner;
