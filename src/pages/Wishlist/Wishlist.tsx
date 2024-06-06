import { Accordion } from '@/components/Accordion/Accordion';
import { Loading } from '@/components/Loading/Loading';
import { Button } from '@/components/ui/button';
import {
  useDeleteProductInWishlistMutation,
  useLazyWishlistQuery,
  useWishlistQuery
} from '@/utils/api/services/productsApi';
import { Link } from 'react-router-dom';

export const Wishlist = () => {
  const { data: wishlist, isLoading } = useWishlistQuery();
  const [deleteInWishlist] = useDeleteProductInWishlistMutation();
  const [triggerWishlist] = useLazyWishlistQuery();

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

      {wishlist && wishlist.length > 0 ? (
        <>
          {wishlist.map((wish) => (
            <div
              className='m-2 mx-auto items-center justify-around md:grid md:w-3/4 md:grid-cols-4'
              key={wish.id}
            >
              <div className='flex justify-center md:p-4'>
                <img
                  src={`${'http://localhost:3000'}${wish.product.image}`}
                  alt={wish.product.name}
                  className='object-fit h-[250px] w-[200px] rounded-xl'
                />
              </div>

              <div className='md:items-left flex flex-col items-center justify-center gap-0 max-md:flex md:gap-0 '>
                <span className='font-bold md:text-xl'>{wish.product.name}</span>
                <div>
                  {wish.product.sizes.length > 0 ? <span>Размеры: </span> : null}
                  {wish.product.sizes.map((s) => (
                    <span key={s.id}>{s.size} </span>
                  ))}
                </div>
              </div>

              <div className='flex justify-center font-bold  md:text-xl'>
                {wish.product.price} р.
              </div>

              <div className='flex items-center justify-center'>
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
        <div className='flex items-center justify-center'>
          <p className='items-center text-xs md:text-lg'>
            Ваш вишлист пока пуст{' '}
            <Button variant='link' className='px-1 text-xs md:text-lg'>
              <Link to={'/'}>к покупкам</Link>
            </Button>
          </p>
        </div>
      )}
    </>
  );
};