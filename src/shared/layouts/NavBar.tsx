import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../features/Themetoggle';
import avatar from '../../assets/image.png';

type NavBarProps = object;

const NavBar: FC<NavBarProps> = () => {
  const navigate = useNavigate();

  const handleLogout = (): void => {
    localStorage.removeItem('user');
    navigate('/signin');
  };

  return (
    <div className="navbar w-full p-4 flex justify-between items-center fixed top-0 left-0 shadow-md z-50 backdrop-blur-lg">
      {/* Avatar & Title */}
      <div className="flex items-center gap-3">
        <div className="avatar border-2 border-base-200 rounded-full">
          <div className="w-14 rounded-full">
            <img src={avatar} alt="User Avatar" />
          </div>
        </div>
        <button onClick={() => navigate(-1)} className="text-lg font-bold">
          Zlib
        </button>
      </div>

      {/* SearchInput, Theme Toggle and Logout */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="btn btn-primary btn-sm" onClick={handleLogout}>
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
