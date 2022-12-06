import HeaderHero from "../styles-page/HeaderHero";
import NavBar from "../Components/Header/NavBar/index";
import Aboutus from "../styles-page/Aboutus";
import FoodCategory from "../styles-page/FoodCategory";
import WhyChoseus from "../styles-page/WhyChoseus";
import Clientsus from "../styles-page/Clientsus";
import OurMenu from "../styles-page/OurMenu";
import MeetOurCheef from "../styles-page/MeetOurCheef";
import Testimonials from "../styles-page/Testimonials";
import RestraindCreativeus from "../styles-page/RestraindCreativeus";
import LastestBlog from "../styles-page/LastestBlog";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeaderHero />
      <Aboutus />
      <FoodCategory />
      <WhyChoseus />
      <Clientsus />
      <OurMenu />
      <MeetOurCheef />
      <Testimonials />
      <RestraindCreativeus />
      <LastestBlog />
      <Footer />
    </>
  );
}
