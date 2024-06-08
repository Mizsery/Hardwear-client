import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { store } from './utils/api/store';

import './index.css';

import { Layout } from '@/components/Layout/Layout.tsx';
import { ThemeProvider } from '@/features/theme/ThemeProvider.tsx';
import { AboutUs } from '@/pages/Abouts-us/AboutUs';
import { Accessories } from '@/pages/Accessories/Accessories';
import { Auth } from '@/pages/Auth/Auth';
import { Cart } from '@/pages/Cart/Cart';
import { CategoryAccessories } from '@/pages/Category/CategoryAccessories';
import { CategoryWear } from '@/pages/Category/CategoryWear';
import { Contact } from '@/pages/Contact/Contact';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage';
import { Order } from '@/pages/Order/Order';
import { ProductItem } from '@/pages/ProductItem/ProductItem';
import { Profile } from '@/pages/Profile/Profile';
import { Wear } from '@/pages/Wear/Wear';
import { Wishlist } from '@/pages/Wishlist/Wishlist';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '/',
        element: <Wear />
      },
      {
        path: '/:categoryId/:productId',
        element: <ProductItem />
      },
      {
        path: '/wear/:categoryId',
        element: <CategoryWear />
      },
      {
        path: '/accessories/:categoryId',
        element: <CategoryAccessories />
      },
      {
        path: '/accessories',
        element: <Accessories />
      },
      {
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/order/:id',
        element: <Order />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/wishlist',
        element: <Wishlist />
      },
      {
        path: '/profile',
        element: <Profile />
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
