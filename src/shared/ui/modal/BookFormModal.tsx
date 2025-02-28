// src/components/BookFormModal.tsx
import { useState, useEffect } from 'react';
import type { FC } from 'react';

const BookFormModal: FC<BookFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [title, setTitle] = useState<string>(initialData?.title ?? '');
  const [author, setAuthor] = useState<string>(initialData?.author ?? '');
  const [note, setNote] = useState<string>(initialData?.note ?? '');
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setTitle(initialData?.title ?? '');
    setAuthor(initialData?.author ?? '');
    setNote(initialData?.note ?? '');
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (!title || !author || (!file && !initialData)) {
      setError(
        'Veuillez remplir les champs requis et sélectionner un fichier PDF.',
      );
      return;
    }
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('note', note);
    if (file) {
      formData.append('pdfUrl', file);
    }
    try {
      await onSubmit(formData);
      setTitle('');
      setAuthor('');
      setNote('');
      setFile(null);
      onClose();
    } catch {
      setError('Une erreur est survenue.');
    }
  };

  return (
    <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box relative">
        <h3 className="font-bold text-lg mb-4">
          {initialData ? 'Modifier le livre' : 'Ajouter un nouveau livre'}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="Title" className="label">
              <span className="label-text">Titre</span>
            </label>
            <input
              type="text"
              placeholder="Titre du livre"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label htmlFor="author" className="label">
              <span className="label-text">Auteur</span>
            </label>
            <input
              type="text"
              placeholder="Nom de l'auteur"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label htmlFor="Note" className="label">
              <span className="label-text">Note</span>
            </label>
            <textarea
              placeholder="Ajouter une note (optionnel)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="textarea textarea-bordered w-full"
            />
          </div>
          <div>
            <label htmlFor="pdfFile" className="label">
              <span className="label-text">Fichier PDF</span>
            </label>
            <input
              type="file"
              id="pdfFile"
              accept="application/pdf"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setFile(e.target.files[0]);
                }
              }}
              className="file-input file-input-bordered w-full"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              {initialData ? 'Mettre à jour' : 'Ajouter'}
            </button>
            <button type="button" className="btn" onClick={onClose}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookFormModal;
