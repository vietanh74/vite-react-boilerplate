import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import DefaultLayout from '@/layouts/default';
import NoHeaderLayout from '@/layouts/noHeader';
import Homepage from '@/modules/homepage';

const About = lazy(() => import('@/modules/about'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
    ],
  },
  {
    path: '/',
    element: <NoHeaderLayout />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
];
