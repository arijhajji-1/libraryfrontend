// src/components/BookList.tsx
import React from 'react';
import BookCard from '../ui/card/BookCard';

type BookListProps = {
  books: Book[];
  currentUserId: string;
  userFavorites: string[];
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
  onFavorite: (id: string) => void;
};

const BookList: React.FC<BookListProps> = ({
  books,
  currentUserId,
  userFavorites,
  onDelete,
  onUpdate,
  onFavorite,
}) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard
            key={book._id}
            book={book}
            currentUserId={currentUserId}
            userFavorites={userFavorites}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onFavorite={onFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
