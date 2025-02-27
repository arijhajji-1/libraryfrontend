import axiosClient from './axiosClient';
/**
 *
 * @param payload
 * @returns
 */
export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await axiosClient.post<LoginResponse>(
    '/users/login',
    payload,
  );
  return response.data;
};

/**
 *
 * @param payload
 * @returns
 */

export const register = async (
  payload: RegisterPayload,
): Promise<RegisterResponse> => {
  const response = await axiosClient.post<RegisterResponse>(
    '/users/register',
    payload,
  );
  return response.data;
};
/**
 *
 * @param bookId
 * @param token
 * @returns
 */
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

/**
 *
 * @param token
 * @returns
 */

export const getFavoriteBooks = async (token: string): Promise<Book[]> => {
  const response = await axiosClient.get<Book[]>('/users/favorites', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

/**
 *
 * @param bookId
 * @param token
 * @returns
 */
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
