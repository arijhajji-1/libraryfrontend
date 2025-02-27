// global.d.ts
// Global environment variables
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // Add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Global Book type (if used everywhere)
declare interface Book {
  _id: string;
  title: string;
  author: string;
  note?: string;
  pdfUrl: string;
  modified: string;
  user: string;
}

// Global User type
declare interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  favorites: string[];
}
declare interface LoginPayload {
  email: string;
  password: string;
}

declare interface LoginResponse {
  _id: string;
  name: string;
  email: string;
  token: string;
}

declare interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

declare interface RegisterResponse {
  _id: string;
  name: string;
  email: string;
}

declare interface InputFieldProps {
  type: string;
  placeholder: string;
  Icon: FC<{ className: string }>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare type BookFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => Promise<void>;
  initialData?: {
    title: string;
    author: string;
    note?: string;
  };
};
declare interface SearchInputProps {
  items: Book[];
  onSearch: (filtered: Book[]) => void;
}
declare type BookListProps = {
  books: Book[];
  currentUserId: string;
  userFavorites: string[];
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
  onFavorite: (id: string) => void;
};
type BookCardProps = {
  book: Book;
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
  onFavorite: (id: string) => void;
  currentUserId: string;
  userFavorites: string[]; // Tableau des IDs de livres favoris de l'utilisateur
};
declare type BookDetailsProps = {
  book: Book;
};
declare type TabsProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

declare type PDFViewerProps = {
  fileUrl: string; // URL of the PDF file
};
