import axiosClient from "."
import { LoginDto } from "./types"
import { ProductDto } from "./types"

export const logIn = async (loginData:LoginDto) =>{
    return await axiosClient.post("/auth/login", loginData) 
}

export const register = async(registerData:LoginDto) =>{
    return await axiosClient.post("/auth/register", registerData)
}

export const refresh = async () =>{
    const token = localStorage.getItem("refreshToken")
return await axiosClient.get("/auth/refresh",{
    headers:{
        Authorization:`Bearer ${token}`
    }
})
}

export const getProducts=async(order:'ASC'|'DESC',page:number,take:number)=>{
return await axiosClient.get(`/product?order=${order}&$page=${page}&take=${take}`)
}

export const postProducts=async(productData:ProductDto):Promise<ProductDto>=>{
    return await axiosClient.post(`/product`,productData)
    }