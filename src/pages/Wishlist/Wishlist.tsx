import { Link } from 'react-router-dom';

import { Accordion } from '@/components/Accordion/Accordion';
import { AuthCheck } from '@/components/AuthCheck/AuthCheck';
import { Loading } from '@/components/Loading/Loading';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/utils/api/hooks';
import {
  useDeleteProductInWishlistMutation,
  useLazyWishlistQuery,
  useWishlistQuery
} from '@/utils/api/services/wishlistApi';
import { selectIsAuthenticated } from '@/utils/api/slices/userSlice';
import { BASE_URL } from '@/utils/constant/api';

export const Wishlist = () => {
  const { data: wishlist, isLoading } = useWishlistQuery();
  const [deleteInWishlist] = useDeleteProductInWishlistMutation();
  const [triggerWishlist] = useLazyWishlistQuery();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  if (isLoading) {
    <Loading />;
  }

  const handleDelete = async (productId: string) => {
    try {
      await deleteInWishlist(productId).unwrap();
      await triggerWishlist().unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Accordion title='Вишлист' hidden='hidden' />

      {isAuthenticated && wishlist && wishlist.length > 0 ? (
        <>
          {wishlist.map((wish) => (
            <div
              className='m-2 mx-auto items-center justify-around md:grid md:grid-cols-3 lg:grid-cols-4'
              key={wish.id}
            >
              <div className='flex justify-center md:p-4'>
                <img
                  src={`${BASE_URL}${wish.product.image}`}
                  alt={wish.product.name}
                  className='h-auto w-[340px] rounded-xl shadow-xl md:max-w-full'
                />
              </div>

              <div className='md:items-left flex flex-col items-center justify-center gap-0 max-md:flex md:gap-2 '>
                <div className='text-wrap text-center font-bold md:text-lg'>
                  {wish.product.name}
                </div>
                <div>
                  {wish.product.sizes.length > 0 ? <span>Размеры: </span> : null}
                  {wish.product.sizes.map((s) => (
                    <span key={s.id}>{s.size} </span>
                  ))}
                </div>
              </div>

              <div className='flex justify-center font-bold  md:text-xl'>
                {wish.product.price} руб.
              </div>

              <div className='flex items-center justify-center md:col-span-3 lg:col-span-1 lg:justify-between'>
                <Button
                  className='md:text-lg'
                  variant='link'
                  onClick={() => handleDelete(wish.productId)}
                >
                  Удалить
                </Button>
                <Button variant='link' className='md:text-lg'>
                  <Link to={`/${wish.product.categoryId}/${wish.productId}`}>
                    {wish.product.typeProduct === 'Wear' ? 'Выбрать размер' : 'К покупке'}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <AuthCheck link='/' message='Ваш вишлист пока пуст' linkMessage='к покупкам' />
      )}
    </>
  );
};
