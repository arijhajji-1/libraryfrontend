import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../features/Search';
import ThemeToggle from '../features/Themetoggle';
import avatar from '../../assets/image.png';

// Import the Book type from your shared types file
import type { Book } from '../ui/card/BookCard';

interface NavBarProps {
  items: Book[];
  onSearch: (filtered: Book[]) => void;
}

const NavBar: FC<NavBarProps> = ({ items, onSearch }) => {
  const navigate = useNavigate();

  const handleLogout = (): void => {
    // Clear the user data from localStorage
    localStorage.removeItem('user');
    // Redirect to the login page
    navigate('/signin');
  };

  return (
    <div className="navbar bg-base-200 w-full p-4 flex justify-between items-center shadow-md">
      {/* Avatar & Title */}
      <div className="flex items-center gap-3">
        <div className="avatar border-2 border-base-200 rounded-full">
          <div className="w-14 rounded-full">
            <img src={avatar} alt="User Avatar" />
          </div>
        </div>
        <span className="text-lg font-bold">Zlib</span>
      </div>

      {/* SearchInput, Theme Toggle and Logout */}
      <div className="flex items-center gap-4">
        <SearchInput items={items} onSearch={onSearch} />
        <ThemeToggle />
        <button className="btn btn-outline btn-sm" onClick={handleLogout}>
          Déconnexion
        </button>
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="User"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
