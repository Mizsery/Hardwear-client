import { GoBack } from '@/components/GoBack/GoBack';

export const ErrorPage = () => {
  return (
    <div className='mx-auto h-full max-w-screen-2xl px-4 py-4'>
      <div className='flex flex-col items-center'>
        <p className='text-2xl  md:text-lg'> Этой страницы не существует</p>
        <GoBack />
      </div>
    </div>
  );
};
