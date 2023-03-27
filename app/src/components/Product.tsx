import { ProductType } from "../types/Product";

type ProductProps = {
  product: ProductType;
  currentColor: string;
  addProductToCart: (product: ProductType) => void;
};

export function Product({
  product,
  currentColor,
  addProductToCart,
}: ProductProps) {
  function handleAddToCart() {
    addProductToCart(product);
  }

  return (
    <div key={product.id}>
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={`https://picsum.photos/640/360.jpg`}
          alt={product.productName}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>

      <div className="flex-col">
        <div className="flex justify-between">
          <h3 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">
            {product.productName}
          </h3>
          <p className="mt-1 text-lg font-medium text-gray-800 dark:text-gray-200 items-end flex">
            EUR {product.price}
          </p>
        </div>

        <h4 className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {product.description}
        </h4>

        <h4 className="mt-2 text-sm font-bold right-0 text-center text-gray-700 dark:text-gray-300">
          Available: {product.stockAvailable}
        </h4>

        <button
          type="button"
          className="mt-2 w-full border-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          style={{ color: currentColor, borderColor: currentColor }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
