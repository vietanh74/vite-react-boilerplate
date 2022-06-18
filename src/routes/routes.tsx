import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import DefaultLayout from '@/layouts/default';
// import { MainLayout } from '@/shared/layouts';
import Homepage from '@/modules/homepage';

interface IRoute extends RouteObject {
  layout?: string;
  children?: IRoute[];
}

const About = lazy(() => import('@/modules/about'));

export const routes: IRoute[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
        layout: 'noHeader',
      },
    ],
  },
  {
    path: 'about',
    element: <About />,
  },
];
