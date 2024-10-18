export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  blogs: string[];
}

export interface UserSignUpData {
  name: string;
  email: string;
  password: string;
}

export interface UserSignInData {
  email: string;
  password: string;
}

export interface SignUpResponse {
  token: string;
  message: string;
  user: {
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    blogs: [];
    _id: string;
  };
}

export interface SignUpError {
  data: {
    message: string;
    success: boolean;
    status: number;
  };
}

export interface SignInResponse {
  token: string;
  message: string;
  user: {
    email: string;
    createdAt: string;
    updatedAt: string;
    blogs: [];
    _id: string;
  };
}

export interface SignInError {
  data: {
    message: string;
    success: boolean;
    status: number;
  };
}

declare module "*.png" {
  const value: any;
  export = value;
}

export interface CreateBlogResponse {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  userId: string;
  createdAt: string;
  updatedAt: string;
  message: string;
}

export interface Blog {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  userId: string;
  createdAt: string;
  updatedAt: string;
  blogs?: Blog[];
}


export interface AddBlogData {
  title: string;
  description: string;
}

interface ImportMetaEnv {
  VITE_AUTH_URL: string;
  VITE_BLOGS_URL: string;
}
