import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_PRODUCTS } from "../gql/products";
import { Product } from "../components/Product";
import Spinner from "../components/Spinner";
import { ProductType } from "../types/Product";
import { useCurrentColor } from "../store/themeStore";
import useCart from "../store/cartStore";
import { BsArrowLeft, BsArrowRight } from "react-icons/all";

export default function Products({ category }: { category: string }) {
  const [page, setPage] = useState(0);

  const currentColor = useCurrentColor((state) => state.currentColor);
  const addProductToCart = useCart((state) => state.addToCart);

  const { data, loading } = useQuery(GET_PRODUCTS, {
    variables: { category, pagination: { pageIndex: page, limit: 5 } },
    fetchPolicy: "cache-first",
  });

  const incrementPage = () => {
    setPage(page + 1);
  };

  const decrementPage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    setPage(0);
  }, [category]);

  if (loading) return <Spinner />;

  return (
    <div className="bg-main-bg dark:bg-main-dark-bg">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data?.productsByCategory?.products.map((product: ProductType) => (
            <Product
              key={product.id}
              product={product}
              addProductToCart={addProductToCart}
              currentColor={currentColor}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between px-24 mb-12">
        <button
          type="button"
          className="uppercase rounded-md px-3 py-2 text-sm font-semibold text-gray-100 shadow-sm hover:opacity-90 sm:mt-0 sm:w-auto disabled:opacity-50"
          onClick={decrementPage}
          style={{ background: currentColor }}
          disabled={page === 0}
        >
          <BsArrowLeft className="mr-2 inline text-2xl" /> Previous Page
        </button>
        <button
          type="button"
          className="uppercase rounded-md px-3 py-2 text-sm font-semibold text-gray-100 shadow-sm hover:opacity-90 sm:mt-0 sm:w-auto disabled:opacity-50"
          onClick={incrementPage}
          style={{ background: currentColor }}
          disabled={!data?.productsByCategory?.hasMore}
        >
          Next Page <BsArrowRight className="ml-2 inline text-2xl" />
        </button>
      </div>
    </div>
  );
}
