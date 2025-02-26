import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Book } from '../shared/ui/card/BookCard';
import PDFTronViewer from '../shared/ui/pdf/pdfViewer';

interface BookDetailsProps {
  book: Book;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="container mx-auto">
        <button onClick={() => navigate(-1)} className="btn btn-sm mb-4">
          Retour
        </button>
        <div className="card bg-base-100 shadow-xl mx-auto max-w-3xl">
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold">{book.title}</h2>
            <p className="text-xl text-gray-600 mb-4">{book.author}</p>
            {book.note && <p className="mb-4">{book.note}</p>}
            <div className="mt-4">
              <h3 className="text-2xl font-semibold mb-2">Lecture du PDF</h3>
              <div className="border p-4 rounded">
                <PDFTronViewer fileUrl={book.pdfUrl} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
