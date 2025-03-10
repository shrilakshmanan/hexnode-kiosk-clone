/**
 * App Component
 * 
 * This is the main application component that serves as the root of the application.
 * It includes various sections and components that make up the Hexnode Kiosk Clone webpage.
 * 
 * Author: SL
 */

import MNCBanner from "./components/MNCBanner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import KioskBanner from "./components/KioskBanner"
import KioskMode from "./components/KioskModeAccordion"
import KioskModesSection from "./components/KioskModesSection"
import LogoCarousel from "./components/LogoCarousel"
import PlatformsSupported from "./components/PlatformsSupported"
import SignUpSection from "./components/SignUpSection"
import Testimonals from "./components/Testimonals"

/**
 * App is the main application component that serves as the root of the application.
 * It returns a JSX element that contains all the sections and components that make up the Hexnode Kiosk Clone webpage.
 * The sections include the header, kiosk banner, accolades banner, kiosk modes section, kiosk mode accordion, customer testimonals slider, logo slider, platforms supported section, sign up section, and the footer.
 * @returns {ReactElement} The main application component.
 */
function App() {

  return (
    <>

      <Header />
      <KioskBanner />
      <MNCBanner />
      <KioskModesSection />
      <KioskMode />
      <Testimonals />
      <LogoCarousel />
      <PlatformsSupported />
      <SignUpSection />
      <Footer />
    </>
  )
}

export default App
