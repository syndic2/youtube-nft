import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Login = React.lazy(() => import('./views/login/Login'));
const Home = React.lazy(() => import('./views/home/Home'));

const routes: { path: string, element: React.ReactElement }[] = [
  {
    path: '/login',
    element: (
      <React.Suspense>
        <Login />
      </React.Suspense>
    )
  },
  {
    path: '/',
    element: (
      <React.Suspense>
        <Home />
      </React.Suspense>
    )
  }
];

const AppRoute: React.FC = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={`route-${index}`}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};

export default AppRoute;
