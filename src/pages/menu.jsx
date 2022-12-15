import NavBar from "../Components/Header/NavBar";
import OurShop from "../Components/OurShop";

export default function Menu() {
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
    </>
  );
}
