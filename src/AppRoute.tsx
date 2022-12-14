import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import AuthLayout from './layouts/auth-layout/AuthLayout';
import MainLayout from './layouts/main-layout/MainLayout';

const Login = React.lazy(() => import('./views/login/Login'));
const Register = React.lazy(() => import('./views/register/Register'));
const Home = React.lazy(() => import('./views/home/Home'));
const NftMode = React.lazy(() => import('./views/nft-mode/NftMode'));
const VideoDetail = React.lazy(() => import('./views/video-detail/VideoDetail'));
const UploadVideo = React.lazy(() => import('./views/upload-video/UploadVideo'));
const Playlist = React.lazy(() => import('./views/playlist/Playlist'));
const AnalyticsMode = React.lazy(() => import('./views/analytics-mode/AnalyticsMode'));
const Subscriber = React.lazy(() => import('./views/subscriber/Subscriber'));
const ShortClip = React.lazy(() => import('./views/short-clip/ShortClip'));
const Studio = React.lazy(() => import('./views/studio/Studio'));
const PremiumMember = React.lazy(() => import('./views/premium-member/PremiumMember'));

interface IAppRoutes {
  path?: string;
  index?: boolean;
  isLazyLoad?: boolean;
  element: React.ReactElement;
  children?: IAppRoutes[];
}

const routes: IAppRoutes[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        isLazyLoad: true,
        element: <Home />
      },
      {
        path: '/home',
        isLazyLoad: true,
        element: <Home />
      },
      {
        path: '/nft-mode',
        isLazyLoad: true,
        element: <NftMode />
      },
      {
        path: '/watch/:video_id',
        isLazyLoad: true,
        element: <VideoDetail />
      },
      {
        path: '/upload-video',
        isLazyLoad: true,
        element: <UploadVideo isNft={false} />
      },
      {
        path: '/upload-nft',
        isLazyLoad: true,
        element: <UploadVideo isNft={true} />
      },
      {
        path: '/playlist',
        isLazyLoad: true,
        element: <Playlist />
      },
      {
        path: '/analytics-mode',
        isLazyLoad: true,
        element: <AnalyticsMode />
      },
      {
        path: '/subscriber',
        isLazyLoad: true,
        element: <Subscriber />
      },
      {
        path: '/short-clip',
        isLazyLoad: true,
        element: <ShortClip />
      },
      {
        path: '/studio',
        isLazyLoad: true,
        element: <Studio />
      },
      {
        path: '/premium-member',
        isLazyLoad: true,
        element: <PremiumMember />
      },
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        isLazyLoad: true,
        element: <Login />
      },
      {
        path: 'register',
        isLazyLoad: true,
        element: <Register />
      }
    ]
  }
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
                element={childrenRoute.isLazyLoad === true ? (
                  <Suspense>
                    {childrenRoute.element}
                  </Suspense>
                ) : childrenRoute.element}
              />
            )) : null}
          </Route>
        ))}
      </Routes>
    </>
  );
};

export default AppRoute;
