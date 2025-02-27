import './App.css';
import AuthPage from './pages/Auth';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import BookDetailsPage from './shared/layouts/BookDetailPage';
import Books from './shared/layouts/Books';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        >
          <Route path="/" element={<Books />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />
        </Route>
        <Route path="/signup" element={<AuthPage mode="signup" />} />
        <Route path="/signin" element={<AuthPage mode="signin" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
