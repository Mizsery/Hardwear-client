import { Link } from 'react-router-dom';
import { Bookmark, MenuIcon, ShoppingCart, User } from 'lucide-react';

import { ModeToggle } from '../ModeToggle/ModeToggle';
import { Button } from '../ui/button';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-secondary px-8 py-4 '>
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

      <Link className='flex flex-col items-center justify-center' to='/'>
        <span className='text-4xl font-bold uppercase tracking-widest'>hardwear</span>
        <div className='flex w-full items-center'>
          <hr className='my-2 h-1 w-52 border-0 border-none bg-primary' />
          <span className='absolute ml-9 translate-x-1/2 bg-secondary pl-4 font-medium text-primary'>
            униформа улиц
          </span>
        </div>
      </Link>

      <div className='hidden items-center gap-4 md:flex md:gap-2'>
        <ModeToggle size='icon' variant='ghost' />
        <Button size='icon' variant='ghost'>
          <Link className='flex items-center gap-2' to='/login'>
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
    </div>
  );
};
