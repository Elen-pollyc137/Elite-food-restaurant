import HeaderHero from "../styles-page/HeaderHero";
import NavBar from "../Components/Header/NavBar/index";
import Aboutus from "../styles-page/Aboutus";
import FoodCategory from "../styles-page/FoodCategory";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeaderHero />
      <Aboutus />
      <FoodCategory />
    </>
  );
}
