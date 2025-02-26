// src/components/BookList.tsx
import React from 'react';
import BookCard from '../shared/ui/card/BookCard';
import type { Book } from '../shared/ui/card/BookCard';
export interface BookListProps {
  books: Book[];
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
  onFavorite: (id: string) => void;
  currentUserId: string;
}

const BookList: React.FC<BookListProps> = ({
  books,
  onDelete,
  onUpdate,
  onFavorite,
  currentUserId,
}) => {
  return (
    <div className="container mx-auto p-4">
      {/* Responsive grid: 1 column on small, 2 on medium, 3 on large screens */}
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
