import { useCartQuery } from '@/utils/api/services/productsApi';

import { Loading } from '@/components/Loading/Loading';
import { Toast } from '../Toast/Toast';

export const AddInCart = () => {
  const { data: cart, isLoading } = useCartQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {cart ? (
        <div className='w-1/2 md:w-2/5'>
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
        </div>
      ) : (
        <Toast
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
    </>
  );
};
