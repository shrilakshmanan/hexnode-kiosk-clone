import React from 'react';

/**
 * Footer component
 * 
 * This component renders a footer section with links to the Hexnode website's terms of use, privacy policy, and cookies policy.
 * It also renders a copyright statement.
 * The component is responsive and will stack the links and copyright statement on smaller screens.
 * The component is used in the homepage.
 * 
 * @returns {JSX.Element} The Footer component
 */
const Footer: React.FC = () => {
  return (
    <footer>
      <nav>
        <div className="bg-[#f2f2f2] py-[30px] sm:py-[20px]">
          <div className="w-[88%] mx-auto md:max-w-[1300px]">
            <div className="flex flex-col flex-wrap justify-center items-center w-full sm:flex-row sm:justify-between">
             
              <div className="flex flex-col sm:flex-row">
                <div className="mb-[20px] sm:mb-0 sm:order-2">
                  <ul className="flex flex-row flex-wrap p-0 m-0">
                    <li className="inline-block list-none after:content-['-'] after:text-[14px] after:leading-1 after:inline-flex after:py-0 after:px-[5px] after:opacity-80 last:after:hidden">
                      <a
                        href="https://www.hexnode.com/legal/terms-of-use/"
                        role="link"
                        className="text-[12px] leading-[24px] text-text-default font-medium transition-all duration-[0.3s] ease-in-out cursor-pointer hover:text-[#020a19]"
                      aria-label="Terms of Use"
                    >
                        Terms of Use
                      </a>
                    </li>
                    <li className="inline-block list-none after:content-['-'] after:text-[14px] after:leading-1 after:inline-flex after:py-0 after:px-[5px] after:opacity-80 last:after:hidden">
                      <a
                        href="https://www.hexnode.com/legal/privacy-policy/"
                        role="link"
                        className="text-[12px] leading-[24px] text-text-default font-medium transition-all duration-[0.3s] ease-in-out cursor-pointer hover:text-[#020a19]"
                      >
                        Privacy
                      </a>
                    </li>
                    <li className="inline-block list-none after:content-['-'] after:text-[14px] after:leading-1 after:inline-flex after:py-0 after:px-[5px] after:opacity-80 last:after:hidden">
                      <a
                        href="https://www.hexnode.com/legal/cookies-policy/"
                        role="link"
                        className="text-[12px] leading-[24px] text-text-default font-medium transition-all duration-[0.3s] ease-in-out cursor-pointer hover:text-[#020a19]"
                      >
                        Cookies
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
       
              <div className="flex order-3">
                <p className="text-[12px] leading-[24px] text-text-default font-medium m-0">
                  Copyright © 2024 Mitsogo Inc. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
