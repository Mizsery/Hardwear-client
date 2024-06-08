import { Link } from 'react-router-dom';
import { Bookmark, LogIn, LogOut, ShoppingCart, User } from 'lucide-react';

import { Logo } from '../Logo/Logo';
import { ModeToggle } from '../ModeToggle/ModeToggle';
import { Button } from '../ui/button';

import { MobileNavbar } from './MobileNavbar';

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
          <Link className='flex items-center gap-2' to='/profile'>
            <User className='h-6 w-6 stroke-primary' />
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

        {isAuthenticated ? (
          <Button size='icon' variant='ghost' onClick={handleLogout}>
            <LogOut className='h-6 w-6 stroke-primary' />
          </Button>
        ) : (
          <Button size='icon' variant='ghost'>
            <Link className='flex items-center gap-2 ' to='/auth'>
              <LogIn className='h-6 w-6 stroke-primary' />
            </Link>
          </Button>
        )}
      </div>

      <MobileNavbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
    </header>
  );
};
