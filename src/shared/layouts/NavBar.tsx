import { type FC } from 'react';
import SearchInput from '../features/Search';
import ThemeToggle from '../features/Themetoggle';
import avatar from '../../assets/image.png'; // Import the image

const NavBar: FC = () => {
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

      {/* SearchInput & Theme Toggle */}
      <div className="flex items-center gap-4">
        <SearchInput />
        <ThemeToggle />
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
