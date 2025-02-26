import axiosClient from './axiosClient';
import type { Book } from './bookServices';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  _id: string;
  name: string;
  email: string;
  token: string;
}

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await axiosClient.post<LoginResponse>(
    '/users/login',
    payload,
  );
  return response.data;
};

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  _id: string;
  name: string;
  email: string;
}

export const register = async (
  payload: RegisterPayload,
): Promise<RegisterResponse> => {
  const response = await axiosClient.post<RegisterResponse>(
    '/users/register',
    payload,
  );
  return response.data;
};

export const addFavoriteBook = async (
  bookId: string,
  token: string,
): Promise<Book> => {
  const response = await axiosClient.put<Book>(
    `/users/favorites/add/${bookId}`,
    null,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  return response.data;
};

export const getFavoriteBooks = async (token: string): Promise<Book[]> => {
  const response = await axiosClient.get<Book[]>('/users/favorites', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const removeFavoriteBook = async (
  bookId: string,
  token: string,
): Promise<Book> => {
  const response = await axiosClient.put<Book>(
    `/users/favorites/remove/${bookId}`,
    null,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  return response.data;
};
