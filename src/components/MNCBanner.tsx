import forrester from "../../public/assets/mncLogos/forrester-logo-Photoroom.jpg";
import gartner from "../../public/assets/mncLogos/Gartner-logo-Photoroom.jpg";
import idc from "../../public/assets/mncLogos/idc-logo-Photoroom.jpg";

/**
 * AccoladesBanner component
 * 
 * This component renders a section with three accolades from notable organizations like IDC, Gartner, and Forrester.
 * Each accolade is represented by a logo and a short description.
 * The section is responsive and will stack the accolades on smaller screens.
 * The component is used in the homepage.
 * 
 * @returns {JSX.Element} The AccoladesBanner component
 */
const MNCBanner = () => {
    return (
        <div className="md:py-[30px]" aria-label="Accolades section">
            <div className="w-[88%] max-w-[1300px] mx-auto">
                <div className="flex flex-col max-md:items-center md:flex-row justify-center mx-[0px] md:justify-between md:mx-[-10px] lg:mx-[-25px] xl:mx-[-45px]">
                    {/* First  */}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/"
                        className="group max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px] banner_accolades-wrap__r_Utd"
                    >
                        <div className="flex flex-col items-center md:items-baseline banner_accolades-content__tfXj3">
                            <div className="flex mb-[15px]">
                                <div className="flex items-center min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full">
                                    <img
                                        alt="IDC"
                                        loading="lazy"
                                        width="83"
                                        height="25"
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-full max-w-full h-[25px] object-cover"
                                        srcSet={idc}
                                        src={idc}
                                        aria-hidden="true"
                                    />

                                </div>
                            </div>
                            <div>
                                <p className="text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] text-center md:text-left">
                                    Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.
                                </p>
                            </div>
                        </div>
                    </a>

                    {/* Divider */}
                    <div className="w-[107px] md:w-[1px] bg-[rgba(0,0,0,0.2)] basis-[1px] last:hidden"></div>

                    {/* Second  */}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.hexnode.com/blogs/hexnode-listed-as-a-notable-vendor-in-gartner-midmarket-context-magic-quadranttm-for-unified-endpoint-management-tools/"
                        className="group max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px] banner_accolades-wrap__r_Utd"
                    >
                        <div className="flex flex-col items-center md:items-baseline banner_accolades-content__tfXj3">
                            <div className="flex mb-[15px]">
                                <div className="flex items-center min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full">
                                    <img
                                        alt="Gartner"
                                        loading="lazy"
                                        width="110"
                                        height="25"
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-full max-w-full h-[25px] object-cover"
                                        style={{ color: "transparent" }}
                                        srcSet={gartner}
                                        src={gartner}
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] text-center md:text-left">
                                    Hexnode was recognized in the 2023 Gartner® Market Guide for Unified Endpoint Management Tools.
                                </p>
                            </div>
                        </div>
                    </a>

                    {/* Divider */}
                    <div className="w-[107px] md:w-[1px] bg-[rgba(0,0,0,0.2)] basis-[1px] last:hidden"></div>

                    {/* Third  */}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.hexnode.com/blogs/hexnode-included-in-the-unified-endpoint-management-landscape-report/"
                        className="group max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px] banner_accolades-wrap__r_Utd"
                    >
                        <div className="flex flex-col items-center md:items-baseline banner_accolades-content__tfXj3">
                            <div className="flex mb-[15px]">
                                <div className="flex items-center min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full">
                                    <img
                                        alt="Forrester"
                                        loading="lazy"
                                        width="156"
                                        height="25"
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-full max-w-full h-[25px] object-cover"
                                        style={{ color: "transparent" }}
                                        srcSet={forrester}
                                        src={forrester}
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="text-[14px] leading-[22px] text-[rgba(0,0,0,0.6)] text-center md:text-left">
                                    Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
                                </p>
                            </div>
                        </div>
                    </a>


                    <div className="w-[107px] md:w-[1px] bg-[rgb(255,255,255,20%)] basis-[1px] last:hidden"></div>
                </div>
            </div>

        </div>

    );
};

export default MNCBanner;
