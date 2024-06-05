import { ReloadIcon } from '@radix-ui/react-icons';

export const Loading = () => {
  return (
    <div className='flex items-center justify-center'>
      <ReloadIcon className='mr-2 h-4 w-4 animate-spin stroke-primary' />
      Пожалуйста подождите
    </div>
  );
};
