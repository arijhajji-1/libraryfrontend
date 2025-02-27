// src/components/BookList.tsx
import React from 'react';
import BookCard from '../ui/card/BookCard';

type BookListProps = {
  books: Book[];
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
  onFavorite: (id: string) => void;
  currentUserId: string;
};

const BookList: React.FC<BookListProps> = ({
  books,
  onDelete,
  onUpdate,
  onFavorite,
  currentUserId,
}) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard
            key={book._id}
            book={book}
            currentUserId={currentUserId}
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
