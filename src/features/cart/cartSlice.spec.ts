import { IProduce } from "immer/dist/internal";
import productReducer, {
  IProductDetail,
  IProduct,
  CartState,
  cartSlice,
  addProduct,
} from "./cartSlice";

const productDetail: IProductDetail = {
  id: 0,
  name: "product",
  price: 10,
};

const product: IProduct = {
  productDetail: productDetail,
  quantity: 1,
};

describe("cart", () => {
  const initialState: CartState = {
    products: [],
  };
  it("should add products", () => {
    const actualState = productReducer(initialState, addProduct(product));
    expect(actualState.products.length).toEqual(1);
    expect(actualState.products[0].productDetail.name).toEqual("product");
  });
});
