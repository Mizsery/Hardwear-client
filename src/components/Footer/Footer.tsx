import { AtSign } from 'lucide-react';

import { Logo } from '../Logo/Logo';

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center gap-4 px-8 py-4'>
      <div>
        <p className='text-2xl'>Мы в соц.сетях</p>
        <div className='flex items-center justify-center'>
          <AtSign className='h-4 w-4 ' />
          <span className='text-bold text-xl'>hardwear_yakutsk</span>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <Logo />
      </div>
    </footer>
  );
};
