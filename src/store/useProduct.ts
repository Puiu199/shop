/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

interface ProductState {
  product: any;
  products: any[];
  count: number;
  addCount: () => void;
  setProduct: (product: any) => void;
  setProducts: (productS: any[]) => void;
  setProductName: (name: string) => void;
  setProductPrice: (price: number) => void;
  setProductCategory: (category: string) => void;
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
      product: product,
    }));
  },
  setProducts: (products) => {
    set(() => ({
      products: products,
    }));
  },
  setProductName: (name) => {
    set((state) => ({
      product: {
        ...state.product,
        name: name,
      },
    }));
  },
  setProductPrice: (price) => {
    set((state) => ({
      product: {
        ...state.product,
        price,
      },
    }));
  },
  setProductCategory: (category) => {
    set((state) => ({
      product: {
        ...state.product,
        category,
      },
    }));
  },
}));

export default useProduct;
