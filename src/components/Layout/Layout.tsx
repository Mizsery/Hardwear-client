import { Outlet } from 'react-router-dom';

import { Navbar } from '../Navbar/Navbar';

import { Accordion } from '@/components/Accordion/Accordion';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Accordion />
      <main className='mx-auto flex max-w-screen-lg pt-4'>
        <Outlet />
      </main>
    </>
  );
};
