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
  lastModified: string;
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
