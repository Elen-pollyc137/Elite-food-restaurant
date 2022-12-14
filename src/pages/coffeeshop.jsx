import NavBar from "../Components/Header/NavBar";
import BestMaker from "../styles-page/coffeeshop/BestMaker";
import CategoryCoffee from "../styles-page/coffeeshop/CategoryCoffee/indes";
import CoffeeMaker from "../styles-page/coffeeshop/CoffeeMaker";
import HeaderCoffee from "../styles-page/coffeeshop/HeaderCoffee";

export default function Coffeeshop() {
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
        dark="dark"
      />
      <HeaderCoffee />
      <CoffeeMaker />
      <CategoryCoffee />
      <BestMaker />
    </>
  );
}
