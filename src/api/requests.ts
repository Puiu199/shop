import axiosClient from "."
import { LoginDto } from "./types"

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