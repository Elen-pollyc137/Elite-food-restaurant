import NavBar from "../Components/Header/NavBar";
import OurShop from "../Components/OurShop";
import Yummy from "../styles-page/shopdetails/Yummy";

export default function ShopList() {
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
      <OurShop title="Our Menu" link="Details" />
      <Yummy />
    </>
  );
}
