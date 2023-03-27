import { FaCarrot, FaCheese } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";

type ProductsLinks = {
  name: string;
  link: string;
  icon: JSX.Element;
};

export const ProductsCategory: ProductsLinks[] = [
  {
    name: "Vegetables",
    link: "vegetables",
    icon: <FaCarrot />,
  },
  {
    name: "Fruits",
    link: "fruits",
    icon: <GiFruitBowl />,
  },
  {
    name: "Cheese",
    link: "cheese",
    icon: <FaCheese />,
  },
];
