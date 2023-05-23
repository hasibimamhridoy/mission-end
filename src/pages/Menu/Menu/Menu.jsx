import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/pizza-bg.jpg"
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover title='OUR MENU' desc='' img={menuImg}></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
