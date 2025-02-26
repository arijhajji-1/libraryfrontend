// src/components/PrivateRoute.tsx
import type { FC, JSX } from 'react';

import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const userData = localStorage.getItem('user');
  // If no user data exists, redirect to sign-in page
  if (!userData) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

export default PrivateRoute;
