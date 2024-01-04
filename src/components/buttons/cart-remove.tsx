"use client";

import { Button } from "../ui/button";
import { removeFromCart } from "@/redux/slices/cart-slice";
import { useDispatch } from "react-redux";

type CardAddButtonProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

export default function CartRemoveButon({
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
          removeFromCart({
            attributes: { id, title, price, description, image },
          })
        )
      }
    >
      Remove
    </Button>
  );
}
