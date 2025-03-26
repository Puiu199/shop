import axiosClient from ".";
import { ChangeProductDto, LoginDto, UserDto } from "./types";
import { ProductDto } from "./types";

export const logIn = async (loginData: LoginDto) => {
  return await axiosClient.post("/auth/login", loginData);
};

export const register = async (registerData: LoginDto) => {
  return await axiosClient.post("/auth/register", registerData);
};

export const refresh = async () => {
  const token = localStorage.getItem("refreshToken");
  return await axiosClient.get("/auth/refresh", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getProducts = async (order: "ASC" | "DESC", page: number, take: number) => {
  return await axiosClient.get(`/product?order=${order}&page=${page}&take=${take}`);
};

export const createProduct = async (productData: ProductDto): Promise<ProductDto> => {
  return await axiosClient.post("/product", productData);
};


export const getUser = async (): Promise<UserDto> => {
    return await axiosClient.get("/user/profile/myself").then(response => response.data)
}

export const changeProduct = async (productId:string,productData: ChangeProductDto): Promise<ChangeProductDto> => {
  return await axiosClient.patch(`/product/${productId}`, productData);
};