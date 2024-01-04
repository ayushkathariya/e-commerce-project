import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [] as CartItem[],
  } as CartState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ attributes?: Product }>) => {
      const product = action.payload.attributes;
      const curItem = product
        ? {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            description: product.description,
          }
        : { id: 0, title: "", price: 0, image: "", description: "" };

      const index = state.cart.findIndex((item) => item.id === curItem.id);

      if (index === -1) {
        state.cart.push({ ...curItem, quantity: 1 });
      } else {
        state.cart[index].quantity += 1;
      }
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ attributes?: Product }>
    ) => {
      const curId =
        ("attributes" in action.payload
          ? action.payload.attributes?.id
          : action.payload) || 0;

      const index = state.cart.findIndex((item) => item.id === curId);
      if (index === -1) return;
      if (state.cart[index].quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== curId);
      } else {
        state.cart[index].quantity -= 1;
      }
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
