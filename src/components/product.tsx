import React from "react";
import CartAddButon from "./buttons/cart-add";
import CartRemoveButon from "./buttons/cart-remove";

type ProductType = {
  product: {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
  };
};

export default function Product({ product }: ProductType) {
  return (
    <div className="w-[400px] h-[400px] rounded-md border sm:w-[300px]">
      <img
        src={product.image}
        className="h-[200px] w-[300px] rounded-t-md object-contain"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {product.title}
        </h1>
        <p className="mt-3 text-sm text-gray-600">{`Price: $ ${product.price}`}</p>
        <div className="mt-3 flex gap-3">
          <CartAddButon
            id={product.id}
            description={product.description}
            price={product.price}
            title={product.title}
            image={product.image}
          />
          <CartRemoveButon
            id={product.id}
            description={product.description}
            price={product.price}
            title={product.title}
            image={product.image}
          />
        </div>
      </div>
    </div>
  );
}
