// src/components/BookFormModal.tsx
import { useState, useEffect } from 'react';
import type { FC } from 'react';
import InputField from '../input/Input';
import { Book, User, FileText } from 'lucide-react';
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
  const [errors, setErrors] = useState<{
    title?: string;
    author?: string;
    file?: string;
  }>({});
  useEffect(() => {
    setTitle(initialData?.title ?? '');
    setAuthor(initialData?.author ?? '');
    setNote(initialData?.note ?? '');
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
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
      setErrors({});
      onClose();
    } catch {
      setErrors({ title: "Une erreur est survenue lors de l'enregistrement." });
    }
  };
  const validateForm = () => {
    const newErrors: { title?: string; author?: string; file?: string } = {};

    if (!title.trim() || title.length < 3) {
      newErrors.title = 'Le titre doit contenir au moins 3 caractères.';
    }
    if (!author.trim() || author.length < 3) {
      newErrors.author = "L'auteur doit contenir au moins 3 caractères.";
    }
    if (!file && !initialData) {
      newErrors.file = 'Veuillez sélectionner un fichier PDF.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box relative">
        <h3 className="font-bold text-lg mb-4">
          {initialData ? 'Modifier le livre' : 'Ajouter un nouveau livre'}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Input */}
          <InputField
            type="text"
            placeholder="Titre du livre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            Icon={Book}
            error={errors.title} // Pass error message
          />

          {/* Author Input */}
          <InputField
            type="text"
            placeholder="Nom de l'auteur"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            Icon={User}
            error={errors.author}
          />

          {/* Note Input */}
          <textarea
            placeholder="Ajouter une note (optionnel)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="textarea textarea-bordered w-full"
          />

          {/* File Input */}
          <label className="label">
            <span className="label-text">Fichier PDF</span>
          </label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
            className="file-input file-input-bordered w-full"
          />
          {errors.file && (
            <p className="text-red-500 text-sm mt-1">{errors.file}</p>
          )}

          {/* Action Buttons */}
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
