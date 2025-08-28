import { AboutUs } from "../Components/AboutUs"
import { Blog } from "../Components/Blog"
import { ContactUs } from "../Components/ContactUs"
import { Footer } from "../Components/Footer"
import { HeroSection } from "../Components/HeroSection"
import { LogoSection } from "../Components/LogoSection"
import { MyExpertAreas } from "../Components/MyExpertAreas"
import { MyPotfolio } from "../Components/MyPotfolio"
import { Testimonial } from "../Components/Testimonial"
import { Navbar } from "../Components/UI/Navbar"

export const Home = () => {
  return (
    <div >
    <Navbar/> 
    <HeroSection/>
    <LogoSection/>
    <AboutUs/>
    <MyExpertAreas/>
    <MyPotfolio/>
    <Testimonial/>
    <Blog/>
    <ContactUs/>
     <Footer/>
    </div>
  )
}
