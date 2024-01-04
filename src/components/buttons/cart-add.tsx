"use client";

import { Button } from "../ui/button";
import { addToCart } from "@/redux/slices/cart-slice";
import { useDispatch } from "react-redux";

type CardAddButtonProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

export default function CartAddButon({
  id,
  title,
  price,
  image,
  description,
}: CardAddButtonProps) {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() =>
        dispatch(
          addToCart({
            attributes: { id, title, price, description, image },
          })
        )
      }
    >
      Add to Cart
    </Button>
  );
}
