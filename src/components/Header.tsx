import React, { useState } from "react";
import Logo from "./Logo";

/**
 * A navigation header component for the Hexnode Kiosk Clone.
 *
 * @remarks
 *
 * This component contains the following elements:
 * 1. A logo with a link to the Hexnode website.
 * 2. A hamburger button that toggles the visibility of the navigation menu.
 * 3. A navigation menu that contains a "14 Day Free Trial" button.
 *
 * The navigation menu is hidden on mobile devices and can be toggled using the
 * hamburger button. The menu is displayed as a horizontal menu on desktop
 * devices.
 *
 * @returns The navigation header component.
 */
const Header: React.FC = () => {
  //constants
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //functionalities
  const handleTrialClick = () => {
    window.location.href =
      "https://www.hexnode.com/mobile-device-management/cloud/signup/";
  };


  return (
    <header className="w-full z-[102] left-0 relative top-0 bg-[#020A19] sticky">
      <div className="relative w-[88%] mx-auto md:max-w-[1300px]">
        <nav className="flex items-center justify-between py-4 min-h-[65px]">
          <a
            className="inline-block max-w-[121px] relative z-[100]"
            aria-label="Hexnode"
          >
            <Logo />
          </a>

          <button
            className="xl:hidden text-white p-2 rounded-md focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <span className="text-2xl">✖</span> 
            ) : (
              <span className="text-2xl">☰</span> 
            )}
          </button>

    
          <div
            className={`absolute top-[65px] left-0 w-full bg-[#020A19] xl:static xl:flex xl:items-center xl:w-auto xl:bg-transparent transition-all duration-300 ease-in-out ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col xl:flex-row items-center space-y-4 xl:space-y-0 xl:space-x-6 w-full xl:w-auto px-6 xl:px-0 py-4 xl:py-0">
              <button
                onClick={handleTrialClick}
                aria-label="14 Day Free Trial"
                className="text-[12px] leading-[24px] text-white uppercase rounded-[3px] p-[10px_26px] transition duration-200 ease-linear bg-[#dd0735] hover:bg-[#bb022a] focus:outline-none"
              >
                14 Day Free Trial
              </button>
              
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
