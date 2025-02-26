import { Outlet } from 'react-router-dom';
import NavBar from '../shared/layouts/NavBar';

function Home() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Home;
