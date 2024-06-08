import { Link } from 'react-router-dom';
import { MenuIcon } from 'lucide-react';

import { ModeToggle } from '../ModeToggle/ModeToggle';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

interface MobileNavbarProps {
  isAuthenticated: boolean;
  handleLogout: () => void;
}

export const MobileNavbar = ({ isAuthenticated, handleLogout }: MobileNavbarProps) => {
  return (
    <div className='flex items-center justify-center md:hidden'>
      <div className='pl-4'>
        <ModeToggle size='icon' variant='secondary' />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button size='icon' variant='ghost'>
            <MenuIcon className='h-6 w-6' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side='top'>
          <div className='flex'>
            <div className='grid w-[200px] p-4'>
              <Link className='text-xl font-medium underline-offset-4 hover:underline' to='/'>
                Одежда
              </Link>
              <Link
                className='text-xl font-medium underline-offset-4 hover:underline'
                to='/accessories'
              >
                Аксессуары
              </Link>
              <Link
                className='text-xl font-medium underline-offset-4 hover:underline'
                to='/about-us'
              >
                О нас
              </Link>
              <Link
                className='text-xl font-medium underline-offset-4 hover:underline'
                to='/contact'
              >
                Контакты
              </Link>
            </div>

            <div className='grid w-[200px] p-4'>
              <Link
                className='text-xl font-medium underline-offset-4 hover:underline'
                to='/profile'
              >
                Профиль
              </Link>
              <Link
                className='text-xl font-medium underline-offset-4 hover:underline'
                to='/wishlist'
              >
                Вишлист
              </Link>
              <Link className='text-xl font-medium underline-offset-4 hover:underline' to='/cart'>
                Корзина
              </Link>

              {isAuthenticated ? (
                <Button
                  variant='link'
                  onClick={handleLogout}
                  className='justify-start p-0 text-xl font-medium text-foreground underline-offset-4 hover:underline'
                >
                  Выход
                </Button>
              ) : (
                <Link className='text-xl font-medium underline-offset-4 hover:underline' to='/auth'>
                  Вход
                </Link>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
