/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

interface ProductState {
  product: any;
  products: any[];
  count: number;
  addCount: () => void;
  setProduct: (product: any) => void
}
const useProduct = create<ProductState>((set) => ({
  product: null,
  products: [],
  count: 5,
  addCount: () => {
    set(() => ({
      count: 10,
    }));
  },
  setProduct: (product) => {
    set(() => ({
        product:  product,
    }));
  },
}));

export default useProduct;
