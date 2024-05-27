import { useEffect, useState } from 'react';

import { Navbar } from './components/Navbar/Navbar';

import './App.css';

import { Button } from '@/components/ui/button';

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // new Promise(() => setTimeout(() => setIsLoading(false), 3000));
  }, []);

  return (
    <>
      <Navbar />
      <Button variant='default' size='lg' disabled={isLoading} onClick={() => console.log(1)}>
        Shope
      </Button>
    </>
  );
};
