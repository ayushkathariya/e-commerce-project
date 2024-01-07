"use client";

import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/slices/cart-slice";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function CartCheckout() {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cartReducer.cart);
  let totalAmount = 0;
  cart.forEach((item: any) => (totalAmount += item.quantity * item.price));
  const isCartEmpty = cart.length === 0;
  const session = useSession();
  const router = useRouter();

  const handleCheckout = async () => {
    if (session?.status === "unauthenticated") {
      router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signin`);
    }

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        body: JSON.stringify({
          return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
          website_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
          amount: totalAmount * 100,
          purchase_order_id: "test12",
          purchase_order_name: "test",
          customer_info: {
            name: session?.data?.user.name,
            email: session?.data?.user.email,
            phone: "9804625081",
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      window.location.href = data.data.payment_url;
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        {isCartEmpty ? (
          <>
            <p className="font-semibold text-xl mt-20 text-center ">
              Cart is empty
            </p>
          </>
        ) : (
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="rounded-lg bg-white lg:col-span-8"
            >
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
              <ul role="list" className="divide-y divide-gray-200">
                {cart?.map((product: any) => (
                  <div key={product.id}>
                    <li className="flex py-6 sm:py-6 ">
                      <div className="flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <a
                                  href={product.href}
                                  className="font-semibold text-black"
                                >
                                  {product.title}
                                </a>
                              </h3>
                            </div>
                            <div className="mt-1 flex items-end">
                              <p className="text-sm mt-3 font-medium text-gray-900">
                                price ₹{product.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <div className="mb-2 flex">
                      <div className="min-w-24 flex">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() =>
                            dispatch(
                              removeFromCart({
                                attributes: {
                                  id: product.id,
                                  title: product.title,
                                  description: product.description,
                                  image: product.image,
                                  price: product.price,
                                },
                              })
                            )
                          }
                          className="h-7 w-7"
                        >
                          -
                        </Button>
                        <p className="mx-1">{product.quantity}</p>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() =>
                            dispatch(
                              addToCart({
                                attributes: {
                                  id: product.id,
                                  title: product.title,
                                  description: product.description,
                                  image: product.image,
                                  price: product.price,
                                },
                              })
                            )
                          }
                          className="h-7 w-7"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
              <div className="space-y-1 mt-3">
                <p>
                  Total amount:
                  <span className="font-semibold"> ₹{totalAmount}</span>
                </p>
              </div>
              <div className="flex space-x-4 mt-3">
                <Button type="button" onClick={handleCheckout}>
                  Checkout
                </Button>
              </div>
            </section>
          </form>
        )}
      </div>
    </div>
  );
}
