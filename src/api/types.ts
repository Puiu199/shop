

export interface LoginDto{
    email:string,
    password: string,
    firstName?:string,
    lastName?:string
}

export interface ProductDto{
    name:string,
    price:number,
    category:string
}