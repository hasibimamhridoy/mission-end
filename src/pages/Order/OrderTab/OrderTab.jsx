import React from "react";
import FoodCard from "../../../components/SectionTitle/FoodCard/FoodCard";

const OrderTab = ({item}) => {
  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {item.map((item) => (
        <FoodCard key={item.name} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
