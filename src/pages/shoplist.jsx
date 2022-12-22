import NavBar from "../Components/Header/NavBar";
import OurShop from "../Components/OurShop";
import { datashoplist } from "../Components/data/shoplist";
import MenuShop from "../styles-page/shoplist/MenuShop";

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
      <OurShop title="Our Menu" link="Shop" />
      <MenuShop data={datashoplist} />
    </>
  );
}
