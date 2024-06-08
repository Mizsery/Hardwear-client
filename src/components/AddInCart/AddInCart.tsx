import { Toast } from '../Toast/Toast';

import { Loading } from '@/components/Loading/Loading';
import { useCartQuery } from '@/utils/api/services/cartApi';

export const AddInCart = () => {
  const { data: cart, isLoading } = useCartQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='w-1/2 md:w-2/5'>
      {cart ? (
        <Toast
          full='w-full'
          type='submit'
          variant='default'
          size='default'
          actionLink='/cart'
          altText='В корзину'
          toastTitle='Товар добавлен в корзину'
          actionText='В корзину'
        >
          В корзину
        </Toast>
      ) : (
        <Toast
          toastVariant='destructive'
          full='w-full'
          type='submit'
          variant='default'
          size='lg'
          actionLink='/auth'
          altText='Авторизация'
          toastTitle='Авторизуйтесь, чтобы добавить товар'
          actionText='Авторизация'
        >
          В корзину
        </Toast>
      )}
    </div>
  );
};
