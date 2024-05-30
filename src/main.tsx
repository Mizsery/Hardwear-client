import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { store } from './utils/api/store';

import './index.css';

import { Layout } from '@/components/Layout/Layout.tsx';
import { ThemeProvider } from '@/features/theme/ThemeProvider.tsx';
import { Accessories } from '@/pages/Accessories/Accessories';
import { Auth } from '@/pages/Auth/Auth';
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
    path: '/auth',
    element: <Auth />,
    children: []
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
