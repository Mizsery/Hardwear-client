import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Toaster } from '../ui/toaster';

import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
import { useLazyRefreshQuery } from '@/utils/api/services/userApi';

export const Layout = () => {
  const [triggerRefresh] = useLazyRefreshQuery();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      triggerRefresh();
    }
  }, []);

  return (
    <>
      <Toaster />
      <Navbar />
      <main className='max-w-screen mx-auto h-full flex-1 px-4 pb-4 md:px-16 md:pb-16'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
