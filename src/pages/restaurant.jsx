import NavBar from "../Components/Header/NavBar";
import { IconLogoSecond } from "../Components/Header/NavBar/Icons";
import FoodMenu from "../styles-page/restaurant-page/FoodMenu";
import FoodWhyus from "../styles-page/restaurant-page/FoodWhyus";
import HeaderHeroWhite from "../styles-page/restaurant-page/HeaderHeroWhite";
import TeamMember from "../styles-page/restaurant-page/TeamMember";
import WhyBest from "../styles-page/restaurant-page/WhyBest";

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
      <WhyBest />
      <FoodMenu />
      <TeamMember />
    </>
  );
}
