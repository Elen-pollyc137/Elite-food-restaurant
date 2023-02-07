import Footer from "../Components/Footer";
import NavBar from "../Components/Header/NavBar";
import OurShop from "../Components/OurShop";
import ProductCart from "../styles-page/shoppingcart/ProductCart";

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
      <OurShop title="Shopping cart" link="Shopping" />
      <ProductCart />
    </>
  );
}
