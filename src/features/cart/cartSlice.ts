import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProductDetail {
  id: number;
  name: string;
  price: number;
}

export interface IProduct {
  productDetail: IProductDetail;
  quantity: number;
}

export interface CartState {
  products: IProduct[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state: CartState, action: PayloadAction<IProduct>) => {
      const findProduct = state.products.find(
        (p) => p.productDetail.id === action.payload.productDetail.id
      );
      if (findProduct) {
        findProduct.quantity += action.payload.quantity;
      } else {
        state.products = [...state.products, action.payload];
      }
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
