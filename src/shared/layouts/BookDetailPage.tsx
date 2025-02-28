// src/pages/BookDetailsPage.tsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BookDetails from '../ui/card/BookDetails';
import { getBook } from '../../service/Bookservices';
import LoadingOrError from './LoadingOrError';
const BookDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  // Récupérer le token depuis le localStorage
  const token = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!).token
    : '';

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      try {
        if (!id) return;
        const data = await getBook(id, token);
        setBook(data);
      } catch (err) {
        console.error('Erreur lors de la récupération du livre:', err);
        setError('Erreur lors de la récupération du livre.');
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id, token]);

  return (
    <div className="min-h-screen py-8">
      <LoadingOrError loading={loading} error={error} gotBooks={!!book} />
      {book && <BookDetails book={book} />}
    </div>
  );
};

export default BookDetailsPage;
