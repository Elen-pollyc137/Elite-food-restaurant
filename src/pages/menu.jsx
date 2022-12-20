import NavBar from "../Components/Header/NavBar";
import OurShop from "../Components/OurShop";
import MenuTemplate from "../styles-page/menu/MenuTemplate";
import { Options1 } from "../Components/data/menutemplate";
import MeetOurCheef from "../styles-page/MeetOurCheef";
import Clientsus from "../styles-page/Clientsus";
import Partners from "../styles-page/restaurant-page/Partners";
import Footer from "../Components/Footer";

export default function Menu() {
  const data = [
    {
      title: <>Starter Menu</>,
      option1: { name: "Alder Grilled Chinook Salmon", price: <>32$</> },
    },
  ];
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
      <OurShop title="Our Menu" link="Menu" />
      <MenuTemplate
        title="Starter Menu"
        data={Options1}
        img="Assets/menu/menutemplate/image01.png"
      />
      <MenuTemplate
        title="Main Course"
        data={Options1}
        imgright="Assets/menu/menutemplate/image02.png"
      />
      <Clientsus />
      <MenuTemplate
        title="Dessert"
        data={Options1}
        img="Assets/menu/menutemplate/image03.png"
      />
      <MenuTemplate
        title="Drinks"
        data={Options1}
        imgright="Assets/menu/menutemplate/image04.png"
      />
      <Partners />
      <Footer />
    </>
  );
}
