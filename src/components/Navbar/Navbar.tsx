import { Link } from 'react-router-dom';
import { Bookmark, LogOut, MenuIcon, ShoppingCart, User } from 'lucide-react';

import { Logo } from '../Logo/Logo';
import { ModeToggle } from '../ModeToggle/ModeToggle';
import { Button } from '../ui/button';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useAppSelector } from '@/utils/api/hooks';
import { useLogoutMutation } from '@/utils/api/services/userApi';
import { selectIsAuthenticated } from '@/utils/api/slices/userSlice';

export const Navbar = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    await logout().unwrap();
    localStorage.removeItem('token');
  };

  return (
    <header className='flex items-center justify-between bg-secondary px-8 py-4 md:px-3 lg:px-8'>
      <div className='hidden items-center gap-2 md:flex md:gap-2'>
        <Link
          className='text-sm font-medium uppercase underline-offset-4 hover:underline lg:text-lg '
          to='/'
        >
          одежда
        </Link>
        <Link
          className='text-sm font-medium uppercase underline-offset-4 hover:underline lg:text-lg '
          to='/accessories'
        >
          аксессуары
        </Link>
        <Link
          className='text-sm font-medium uppercase underline-offset-4 hover:underline lg:text-lg '
          to='/about-us'
        >
          о нас
        </Link>
        <Link
          className='text-sm font-medium uppercase  underline-offset-4 hover:underline lg:text-lg'
          to='/contact'
        >
          контакты
        </Link>
      </div>

      <Logo />

      <div className='hidden items-center gap-4 md:flex md:gap-2'>
        <ModeToggle size='icon' variant='ghost' />
        <Button size='icon' variant='ghost'>
          <Link className='flex items-center gap-2' to='/auth'>
            <User className='h-6 w-6 stroke-foreground dark:stroke-primary' />
          </Link>
        </Button>

        <Button size='icon' variant='ghost'>
          <Link className='flex items-center gap-2' to='/wishlist'>
            <Bookmark className='h-6 w-6 stroke-primary' />
          </Link>
        </Button>

        <Button size='icon' variant='ghost'>
          <Link className='flex items-center gap-2 ' to='/cart'>
            <ShoppingCart className='h-6 w-6 stroke-primary' />
          </Link>
        </Button>

        {isAuthenticated && (
          <Button size='icon' variant='ghost' onClick={handleLogout}>
            <LogOut className='h-6 w-6 stroke-primary' />
          </Button>
        )}
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button className='md:hidden lg:hidden' size='icon' variant='ghost'>
            <MenuIcon className='h-6 w-6' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side='top'>
          <ModeToggle size='sm' variant='secondary' />
          <div className='flex'>
            <div className='grid w-[200px] p-4'>
              <Link className='text-xl font-medium underline-offset-4 hover:underline' to='/'>
                Главная
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
              <Link className='text-xl font-medium underline-offset-4 hover:underline' to='/'>
                Одежда
              </Link>
              <Link
                className='text-xl font-medium underline-offset-4 hover:underline'
                to='/accessories'
              >
                Аксессуары
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
