import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import { addProduct, IProduct, IProductDetail, selectCart } from "./cartSlice";
const productDetail: IProductDetail = {
  id: 0,
  name: "product",
  price: 10,
};

const product: IProduct = {
  productDetail: productDetail,
  quantity: 1,
};

export function Cart() {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>name {cart.products[0]?.productDetail.name} </h2>
      <button onClick={() => dispatch(addProduct(product))}> test </button>
    </div>
  );
}

export default Cart;
