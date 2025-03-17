import axiosClient from "."
import { LoginDto } from "./types"




export const logIn = async (loginData:LoginDto) =>{

    return await axiosClient.post("/auth/login", loginData) 

}


export const register = async(registerData:LoginDto) =>{
    return await axiosClient.post("/auth/register", registerData)
}