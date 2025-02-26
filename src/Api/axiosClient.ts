// src/api/axiosClient.ts
import axios from 'axios';

// Vite exposes env variables with the VITE_ prefix.
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optionally, add interceptors here (for request or response)
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handling (if needed)
    return Promise.reject(error instanceof Error ? error : new Error(error));
  }
);

export default axiosClient;
