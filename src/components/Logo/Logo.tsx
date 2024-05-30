import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link className='flex flex-col items-center justify-center' to='/'>
      <span className='text-4xl font-bold uppercase tracking-widest'>hardwear</span>
      <div className='flex w-full items-center'>
        <hr className='my-2 h-1 w-28 border-0 border-none bg-primary' />
        <span className='absolute ml-9 translate-x-1/2  pl-4 font-medium text-primary'>
          униформа улиц
        </span>
      </div>
    </Link>
  );
};
