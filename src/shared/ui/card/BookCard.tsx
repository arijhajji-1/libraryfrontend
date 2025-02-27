// src/components/BookCard.tsx
import React from 'react';
import { Heart, Edit, Trash2 } from 'lucide-react';
import img from '../../../assets/jonas-jacobsson-0FRJ2SCuY4k-unsplash.jpg';
import { Link } from 'react-router-dom';

type BookCardProps = {
  book: Book;
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
  onFavorite: (id: string) => void;
  currentUserId: string;
};

// URL for the default book cover image
const defaultCover = img;

const BookCard: React.FC<BookCardProps> = ({
  book,
  onDelete,
  onUpdate,
  onFavorite,
  currentUserId,
}) => {
  return (
    <div className="card bg-base-200 shadow-xl">
      {/* Add a figure element for the book cover */}
      <figure>
        <img
          src={defaultCover}
          alt="Default Book Cover"
          className="object-cover h-48 w-full"
        />
      </figure>
      <div className="card-body">
        <Link to={`/books/${book._id}`}>
          <h2 className="card-title">{book.title}</h2>
          <p className="text-sm text-gray-500">{book.author}</p>
        </Link>
        <div className="card-actions justify-end mt-4 space-x-2">
          <button
            className="btn btn-ghost text-green-500"
            onClick={() => onFavorite(book._id)}
            title="Favorite"
          >
            <Heart size={20} />
          </button>
          {book.user === currentUserId && (
            <>
              <button
                className="btn btn-ghost text-yellow-500"
                onClick={() => onUpdate(book._id)}
                title="Mettre à jour"
              >
                <Edit size={20} />
              </button>
              <button
                className="btn btn-ghost text-red-500"
                onClick={() => onDelete(book._id)}
                title="Supprimer"
              >
                <Trash2 size={20} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
