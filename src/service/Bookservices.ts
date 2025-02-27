import axiosClient from './axiosClient';

/**
 *
 * @returns
 */
export const getAllBooks = async (): Promise<Book[]> => {
  const response = await axiosClient.get<Book[]>('/books/all');
  return response.data;
};

/**
 * @param token
 */
export const getBooks = async (token: string): Promise<Book[]> => {
  const response = await axiosClient.get<Book[]>('/books', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

/**
 *
 * @param formData
 * @param token
 * @returns
 */
export const addBook = async (
  formData: FormData,
  token: string,
): Promise<Book> => {
  const response = await axiosClient.post<Book>('/books/add', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

/**
 *
 * @param bookId
 * @param payload
 * @param token
 * @returns
 */
export const updateBook = async (
  bookId: string,
  payload: Partial<Omit<Book, '_id' | 'user' | 'lastModified'>>,
  token: string,
): Promise<Book> => {
  const response = await axiosClient.put<Book>(
    `/books/update/${bookId}`,
    payload,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  return response.data;
};

/**
 *
 * @param bookId
 * @param token
 * @returns message
 */
export const deleteBook = async (
  bookId: string,
  token: string,
): Promise<{ message: string }> => {
  const response = await axiosClient.delete<{ message: string }>(
    `/books/delete/${bookId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  return response.data;
};

/**
 *
 * @param bookId
 * @param token
 * @returns Book
 */
export const getBook = async (bookId: string, token: string): Promise<Book> => {
  const response = await axiosClient.get<Book>(`/books/${bookId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
/**
 * Ajouter un livre aux favoris
 * Utilise l'endpoint PUT /books/favorites/add/:bookId
 * @param bookId
 * @param token
 * @returns Book
 */
export const addFavoriteBook = async (
  bookId: string,
  token: string,
): Promise<Book> => {
  const response = await axiosClient.put<Book>(
    `/books/favorites/add/${bookId}`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  return response.data;
};

/**
 * Récupérer les livres favoris de l'utilisateur
 * @param token
 * @returns Book[]
 */
export const getFavoriteBooks = async (token: string): Promise<Book[]> => {
  const response = await axiosClient.get<Book[]>('/books/favorites', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

/**
 * Supprimer un livre des favoris
 * Utilise l'endpoint PUT /books/favorites/remove/:bookId
 * @param bookId
 * @param token
 * @returns Book
 */
export const removeFavoriteBook = async (
  bookId: string,
  token: string,
): Promise<Book> => {
  const response = await axiosClient.put<Book>(
    `/books/favorites/remove/${bookId}`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  return response.data;
};
