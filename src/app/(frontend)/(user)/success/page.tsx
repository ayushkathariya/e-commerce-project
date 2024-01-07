"use client";

import { Button } from "@/components/ui/button";
import { resetCart } from "@/redux/slices/cart-slice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Page() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCart());
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded shadow-md max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-green-600">
          Purchase Successful!
        </h1>
        <p className="text-gray-700 mb-4">
          Thank you for your purchase. Your order has been successfully
          processed.
        </p>
        <div className="text-center">
          <Button onClick={() => router.push("/")}>Home</Button>
        </div>
      </div>
    </div>
  );
}
