export interface ProductDto {
  name: string;
  price: number;
  category: string;
}

export interface LoginDto {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface LoginDto {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface ProductDto {
  name: string;
  price: number;
  category: string;
}

export interface ChangeProductDto {
  name?: string;
  price?: number;
  category?: string;
}
export interface UserDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: string;
}
