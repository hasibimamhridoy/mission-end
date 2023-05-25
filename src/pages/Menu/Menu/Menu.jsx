import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/pizza-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Menu = () => {
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      {/**Main cover */}
      <Cover title="OUR MENU" desc="" img={menuImg}></Cover>
     
      <SectionTitle
        heading="Today's Offer "
        subHeading="Dont Miss"
      ></SectionTitle>
       {/**Offerd Manu items */}
      <MenuCategory items={offered}></MenuCategory>

       {/**desert Manu items */}
      <MenuCategory title="dessert" coverImg={dessertImg} items={dessert}></MenuCategory>
      <MenuCategory title="soup" coverImg={soupImg} items={soup}></MenuCategory>
      <MenuCategory title="salad" coverImg={saladImg} items={salad}></MenuCategory>
      <MenuCategory title="pizza" coverImg={pizzaImg} items={pizza}></MenuCategory>
    </div>
  );
};

export default Menu;
