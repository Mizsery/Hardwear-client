import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link className='flex flex-col items-center justify-center' to='/'>
      <span className='text-3xl font-bold uppercase tracking-widest md:text-4xl'>hardwear</span>
      <div className='flex w-full items-center'>
        <hr className='my-2 h-1 w-20 border-0 border-none bg-primary md:w-28' />
        <span className='absolute translate-x-1/2 pl-4 font-medium text-primary md:ml-9'>
          униформа улиц
        </span>
      </div>
    </Link>
  );
};
