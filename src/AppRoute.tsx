import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AuthLayout from './layouts/auth-layout/AuthLayout';
import MainLayout from './layouts/main-layout/MainLayout';

const Login = React.lazy(() => import('./views/login/Login'));
const Register = React.lazy(() => import('./views/register/Register'));
const NftMode = React.lazy(() => import('./views/nft-mode/NftMode'));
const VideoDetail = React.lazy(() => import('./views/video-detail/VideoDetail'));

interface IAppRoutes {
  path?: string;
  index?: boolean;
  element: React.ReactElement;
  children?: IAppRoutes[];
}

const routes: IAppRoutes[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/nft-mode',
        element: (
          <React.Suspense>
            <NftMode />
          </React.Suspense>
        )
      },
      {
        path: '/watch/:video_id',
        element: (
          <React.Suspense>
            <VideoDetail />
          </React.Suspense>
        )
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: (
          <React.Suspense>
            <Login />
          </React.Suspense>
        )
      },
      {
        path: 'register',
        element: (
          <React.Suspense>
            <Register />
          </React.Suspense>
        )
      },
    ]
  },
];

const AppRoute: React.FC = () => {
  return (
    <>
      <Routes>
        {routes.map((parentRoute, i) => (
          <Route
            key={`parent-route-${i}`}
            path={parentRoute.path}
            element={parentRoute.element}
          >
            {parentRoute.children ? parentRoute.children.map((childrenRoute, j) => (
              <Route
                key={`children-route-${j}`}
                path={childrenRoute.path}
                index={childrenRoute.index}
                element={childrenRoute.element}
              />
            )) : null}
          </Route>
        ))}
      </Routes>
    </>
  );
};

export default AppRoute;
