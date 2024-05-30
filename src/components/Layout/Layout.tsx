import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';

import { Accordion } from '@/components/Accordion/Accordion';
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
      <Navbar />
      <Accordion />
      <main className='mx-auto flex h-screen max-w-screen-lg pt-4'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
