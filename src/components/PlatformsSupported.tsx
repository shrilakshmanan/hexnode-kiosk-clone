import platform1 from "../../public/assets/platforms/platform-img1.svg"
import platform2 from "../../public/assets/platforms/platform-img2.svg"
import platform3 from "../../public/assets/platforms/platform-img3.svg"
import platform4 from "../../public/assets/platforms/platform-img4.svg"
import platform5 from "../../public/assets/platforms/platform-img5.svg"
import platform6 from "../../public/assets/platforms/platform-img6.png"
/**
 * A section component for the Hexnode Kiosk Clone.
 *
 * This component renders a section with a heading and a list of logos
 * representing the platforms supported by Hexnode UEM. The logos are wrapped
 * in a flex container and are evenly spaced.
 *
 * The component is responsive and will stack the logos on smaller screens.
 *
 * @returns The PlatformsSupported component
 */
const PlatformsSupported = () => {
  const platforms = [
    { name: 'Android', src: platform1, alt: 'Android' },
    { name: 'Windows', src: platform2, alt: 'Windows' },
    { name: 'iOS', src: platform3, alt: 'iOS' },
    { name: 'Android TV', src: platform4, alt: 'Android TV' },
    { name: 'Apple TV', src: platform5, alt: 'Apple TV' },
    { name: 'Amazon Fire', src: platform6, alt: 'Amazon Fire' },
  ];

  return (
    <section className="pt-[60px] lg:pt-[120px] pb-[60px] lg:pb-[120px] flex justify-center items-center text-center flex-col" aria-labelledby="platforms-title">
      <div className="mx-auto max-w-[1300px] w-[88%]">
        <h2 className="text-center mb-[40px] text-[#020a19] text-[32px] leading-[40px] font-[700] md:mb-[60px] sm:text-[40px] sm:leading-[1.3]" id="platforms-title">
          Platforms Supported
        </h2>
        <div className="flex items-center flex-wrap">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="block shrink-0 basis-1/2 md:basis-1/3 lg:basis-[calc(100%/6)] rounded-[10px] mb-[25px] sm:mb-[15px] px-[12px] max-xs:even:pr-0 max-xs:odd:pl-0"
              role="listitem"
              aria-label={`Platform: ${platform.alt}`}
            >
              <div className="flex items-center justify-center shrink-0 relative mx-auto max-w-[150px] h-[60px] sm:max-w-[190px] sm:h-[72px] rounded-[10px]"    aria-hidden="true">
                <img
                  src={platform.src}
                  alt={platform.alt}
                  className="block w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSupported;
