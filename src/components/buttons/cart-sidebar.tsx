"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import CartCheckout from "../cart-checkout";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state: any) => state.cartReducer.cart);
  let totalItems = 0;
  cart.forEach((item: any) => (totalItems += item.quantity));

  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className="cursor-pointer flex gap-1">
          <ShoppingCart />
          {totalItems > 0 && <span>{totalItems}</span>}
        </span>
      </SheetTrigger>
      <SheetContent className="overflow-x-hidden overflow-y-auto">
        <CartCheckout />
      </SheetContent>
    </Sheet>
  );
}
