// src/pages/BookDetailsPage.tsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BookDetails from './bookDetails';
import { getBook } from '../Api/bookServices';
import type { Book } from '../shared/ui/card/BookCard';

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

  if (loading) return <p>Chargement...</p>;
  if (error || !book) return <p>{error || 'Livre non trouvé'}</p>;

  return <BookDetails book={book} />;
};

export default BookDetailsPage;
