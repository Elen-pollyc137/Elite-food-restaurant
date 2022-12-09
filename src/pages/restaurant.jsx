import NavBar from "../Components/Header/NavBar";
import { IconLogoSecond } from "../Components/Header/NavBar/Icons";
import FoodWhyus from "../styles-page/restaurant-page/FoodWhyus";
import HeaderHeroWhite from "../styles-page/restaurant-page/HeaderHeroWhite";

export default function Restaurant() {
  return (
    <>
      <NavBar
        home="Home"
        menu="Menu"
        blog="Blog"
        page="Pages"
        about="About"
        shop="Shop"
        contact="Contact"
        IconSecondary={<IconLogoSecond />}
      />
      <HeaderHeroWhite />
      <FoodWhyus />
    </>
  );
}
