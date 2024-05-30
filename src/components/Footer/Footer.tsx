import { AtSign, Instagram } from 'lucide-react';

import { LogosWhatsappMonochromeIcon } from '../Icon/Whatsapp';
import { Logo } from '../Logo/Logo';
import { Button } from '../ui/button';

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center gap-4 px-8 py-4'>
      <div>
        <p className='text-2xl'>Мы в инстаграмм</p>
        <div className='flex items-center justify-center'>
          <AtSign className='h-4 w-4 ' />
          <span className='text-bold text-xl'>hardwear_yakutsk</span>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <Logo />
      </div>
      <div className='flex'>
        <Button variant='link' className=''>
          <a href='https://www.instagram.com/hardwear_yakutsk?igsh=MTlvdmprNjlhcGR3dA=='>
            <Instagram className='h-6 w-6 stroke-foreground ' />
          </a>
        </Button>
        <Button variant='link' className=''>
          <a href='https://wa.me/+79969152137'>
            <LogosWhatsappMonochromeIcon className='h-6 w-6 fill-foreground stroke-foreground' />
          </a>
        </Button>
      </div>
    </footer>
  );
};
