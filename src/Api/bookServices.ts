// src/api/bookServices.ts
import axiosClient from './axiosClient';
// Define the Book type inline
export interface Book {
  _id: string;
  title: string;
  author: string;
  note?: string;
  pdfUrl: string;
  lastModified: string; // using string to represent ISO date strings
  user: string;
}

// get all books
export const getAllBooks = async (): Promise<Book[]> => {
  const response = await axiosClient.get<Book[]>('/books/all');
  return response.data;
};

// Get all books for the authenticated user
export const getBooks = async (token: string): Promise<Book[]> => {
  const response = await axiosClient.get<Book[]>('/books', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Add a new book using FormData (for file upload)
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

// Update an existing book by ID with partial book data
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

// Delete a book by its ID
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

// Get a single book by its ID
export const getBook = async (bookId: string, token: string): Promise<Book> => {
  const response = await axiosClient.get<Book>(`/books/${bookId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
