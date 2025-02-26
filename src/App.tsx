import './App.css';
import AuthPage from './pages/Auth';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<p>Home Page</p>} />
        </Route>
        <Route path="/signup" element={<AuthPage mode="signup" />} />
        <Route path="/signin" element={<AuthPage mode="signin" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
