import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import { Layout } from '@/components/Layout/Layout.tsx';
import { ThemeProvider } from '@/features/theme/ThemeProvider.tsx';
import { Accessories } from '@/pages/Accessories/Accessories';
import { Wear } from '@/pages/Wear/Wear';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Wear />
      },
      {
        path: '/accessories',
        element: <Accessories />
      },
      {
        path: '/about-us',
        element: <h1>AboutUs Page</h1>
      },
      {
        path: '/contact',
        element: <h1>Contact Page</h1>
      },
      {
        path: '/cart',
        element: <h1>Cart</h1>
      },
      {
        path: '/wishlist',
        element: <h1>Wishlist</h1>
      }
    ]
  },
  {
    path: '/login',
    element: <h1>login page</h1>,
    children: []
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
