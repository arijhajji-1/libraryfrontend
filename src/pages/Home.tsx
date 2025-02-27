import NavBar from '../shared/layouts/NavBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="container mx-auto flex-1 mt-[92px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
