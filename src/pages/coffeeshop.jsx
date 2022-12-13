import NavBar from "../Components/Header/NavBar";
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
    </>
  );
}
