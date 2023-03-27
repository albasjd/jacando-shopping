import React from "react";
import { ProductType } from "../types/Product";
import { BiMinus, BiPlus } from "react-icons/all";

type CartItemProps = {
  product: ProductType;
  quantity: number;
  decrementQuantity: (id: string) => void;
  incrementQuantity: (id: string) => void;
};

export default function CartItem({
  product,
  quantity,
  incrementQuantity,
  decrementQuantity,
}: CartItemProps) {
  return (
    <div
      key={product.id}
      className="flex justify-between items-center w-full max-w-max p-4 border-b dark:border-gray-200 border-gray-700"
      style={{ minWidth: "25rem" }}
    >
      <div className="flex-row items-start justify-start ">
        <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
          {product.productName}
        </span>
        &nbsp; &nbsp;
        <span className="text-base text-gray-500 dark:text-gray-300">
          (EUR {product.price})
        </span>
      </div>

      <div className="flex-row">
        <button
          className="text-gray-500 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:focus:text-gray-400"
          onClick={() => decrementQuantity(product.id)}
        >
          <BiMinus className="font-bold text-xl" />
        </button>
        <span className="text-gray-700 dark:text-gray-100 mx-2 text-2xl">
          {quantity}
        </span>
        <button
          className="text-gray-500 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:focus:text-gray-400"
          onClick={() => incrementQuantity(product.id)}
        >
          <BiPlus className="font-bold text-xl" />
        </button>
      </div>
    </div>
  );
}
