import { useEffect, useState } from 'react';
import BookList from './ListBooks';
import BookFormModal from '../ui/modal/BookFormModal';
import {
  addBook,
  deleteBook,
  getAllBooks,
  getBooks,
  updateBook,
  addFavoriteBook,
  removeFavoriteBook,
  getFavoriteBooks,
} from '../../service/Bookservices';
import Tabs from '../ui/tabs/Tabs';
import SearchInput from '../features/Search';

function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [activeTab, setActiveTab] = useState<string>('tous');

  const userData = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!)
    : null;
  const token = userData ? userData.token : '';
  const currentUserId = userData ? userData._id : '';
  const [userFavorites, setUserFavorites] = useState<string[]>([]);

  const onTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError('');
      try {
        let data: Book[] = [];
        if (activeTab === 'tous') {
          data = await getAllBooks();
        } else if (activeTab === 'mes') {
          if (!token) {
            setError('Non authentifié');
            return;
          }
          data = await getBooks(token);
        } else if (activeTab === 'favoris') {
          if (!token) {
            setError('Non authentifié');
            return;
          }
          data = await getFavoriteBooks(token);
        }
        setBooks(data);
        setFilteredBooks(data);
      } catch (err) {
        console.error('Erreur lors de la récupération des livres:', err);
        setError('Erreur lors de la récupération des livres');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [activeTab, token]);
  useEffect(() => {
    const fetchFavorites = async () => {
      if (!token) return;
      const favorites = await getFavoriteBooks(token);
      setUserFavorites(favorites.map((book) => book._id));
    };

    fetchFavorites();
  }, [token]);
  const handleDelete = async (bookId: string) => {
    try {
      await deleteBook(bookId, token);
      setBooks((prev) => prev.filter((book) => book._id !== bookId));
      setFilteredBooks((prev) => prev.filter((book) => book._id !== bookId));
    } catch (err) {
      console.error('Erreur lors de la suppression du livre:', err);
    }
  };

  const handleEditClick = (book: Book) => {
    setEditingBook(book);
    setModalOpen(true);
  };

  const handleFavorite = async (bookId: string) => {
    try {
      if (userFavorites.includes(bookId)) {
        await removeFavoriteBook(bookId, token);
        setUserFavorites((prev) => prev.filter((id) => id !== bookId));
      } else {
        // Add to favorites
        await addFavoriteBook(bookId, token);
        setUserFavorites((prev) => [bookId, ...prev]);
      }
    } catch (err) {
      console.error('Error updating favorites:', err);
    }
  };

  const handleModalSubmit = async (formData: FormData) => {
    try {
      if (editingBook) {
        const updatedBookData: Partial<
          Omit<Book, 'user' | '_id' | 'lastModified'>
        > = {
          title: formData.get('title') as string,
          author: formData.get('author') as string,
          note: formData.get('note') as string,
        };
        const updatedBook = await updateBook(
          editingBook._id,
          updatedBookData,
          token,
        );
        setBooks((prev) =>
          prev.map((book) =>
            book._id === editingBook._id ? updatedBook : book,
          ),
        );
        setFilteredBooks((prev) =>
          prev.map((book) =>
            book._id === editingBook._id ? updatedBook : book,
          ),
        );
      } else {
        // Mode ajout
        const newBook = await addBook(formData, token);
        setBooks((prev) => [newBook, ...prev]);
        setFilteredBooks((prev) => [newBook, ...prev]);
      }
    } catch (err) {
      console.error("Erreur lors de l'enregistrement du livre:", err);
    } finally {
      setModalOpen(false);
      setEditingBook(null);
    }
  };

  return (
    <div className="max-h-screen">
      <Tabs activeTab={activeTab} onTabChange={onTabChange} />
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">Tableau de bord des livres</h1>
          <div className="flex items-center">
            <SearchInput items={books} onSearch={setFilteredBooks} />
            <button
              className="btn ml-2 btn-primary btn-outline"
              onClick={() => {
                setEditingBook(null);
                setModalOpen(true);
              }}
            >
              Ajouter un livre
            </button>
          </div>
        </div>
        {loading && <p>Chargement...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && books.length === 0 && <p>Aucun livre trouvé.</p>}
        {books.length > 0 && (
          <BookList
            books={filteredBooks}
            currentUserId={currentUserId}
            userFavorites={userFavorites}
            onDelete={handleDelete}
            onUpdate={(id: string) => {
              const bookToEdit = books.find((b) => b._id === id);
              if (bookToEdit) {
                handleEditClick(bookToEdit);
              }
            }}
            onFavorite={handleFavorite}
          />
        )}
      </div>
      <BookFormModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditingBook(null);
        }}
        onSubmit={handleModalSubmit}
        initialData={
          editingBook
            ? {
                title: editingBook.title,
                author: editingBook.author,
                note: editingBook.note,
              }
            : undefined
        }
      />
    </div>
  );
}

export default Books;
