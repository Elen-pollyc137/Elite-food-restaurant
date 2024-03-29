import Footer from "../Components/Footer";
import NavBar from "../Components/Header/NavBar";
import OurShop from "../Components/OurShop";
import Discription from "../styles-page/shopdetails/Discrption";
import SimilarProducts from "../styles-page/shopdetails/SimilarProducts";
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
      <Discription />
      <SimilarProducts />
      <Footer />
    </>
  );
}
