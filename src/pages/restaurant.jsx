import { dataTestimonials } from "../Components/data/costumerrewiew";
import NavBar from "../Components/Header/NavBar";
import { IconLogoSecond } from "../Components/Header/NavBar/Icons";
import CostumerRewiew from "../styles-page/restaurant-page/CostumerRewiew";
import FoodMenu from "../styles-page/restaurant-page/FoodMenu";
import FoodWhyus from "../styles-page/restaurant-page/FoodWhyus";
import HeaderHeroWhite from "../styles-page/restaurant-page/HeaderHeroWhite";
import LatestBlog from "../styles-page/restaurant-page/LatestBlog";
import Partners from "../styles-page/restaurant-page/Partners";
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
      <CostumerRewiew data={dataTestimonials} />
      <LatestBlog />
      <Partners />
    </>
  );
}
