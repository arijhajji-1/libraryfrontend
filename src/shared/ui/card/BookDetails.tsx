// src/components/BookDetails.tsx
import React from 'react';
import PDFViewer from '../pdf/pdfViewer';

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  return (
    <div className="card shadow-xl rounded-2xl bg-base-200 p-4">
      <h2 className="card-title text-3xl font-bold">{book.title}</h2>
      <p className="text-xl text-gray-600 mb-4">{book.author}</p>
      <p className="text-lg text-gray-500 mb-4">
        {new Date(book.modified).toLocaleString()}
      </p>
      {book.note && <p className="mb-4">{book.note}</p>}
      <div className="mt-4">
        <h3 className="text-2xl font-semibold mb-2">Lecture du PDF</h3>
        <div className="border p-4 rounded">
          <PDFViewer
            fileUrl={`http://localhost:3000/${book.pdfUrl.replace(/\\/g, '/')}`}
          />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
