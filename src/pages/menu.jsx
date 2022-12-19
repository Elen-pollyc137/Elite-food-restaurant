import NavBar from "../Components/Header/NavBar";
import OurShop from "../Components/OurShop";
import MenuTemplate from "../styles-page/menu/MenuTemplate";

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
      <MenuTemplate title="polly" />
    </>
  );
}
