import {
  useDeleteProductInWishlistMutation,
  useLazyWishlistQuery,
  useProductToWishlistMutation,
  useWishlistQuery
} from '@/utils/api/services/productsApi';
import { Bookmark } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Loading } from '@/components/Loading/Loading';
import { Toast } from '../Toast/Toast';

export const AddInWishlist = () => {
  const { productId } = useParams<{ productId: string }>() as { productId: string };
  const { data: wishlist, isLoading } = useWishlistQuery();
  const [addToWishlist] = useProductToWishlistMutation();
  const [deleteInWishlist] = useDeleteProductInWishlistMutation();
  const [triggerWishlist] = useLazyWishlistQuery();

  if (isLoading) {
    return <Loading />;
  }

  const checkInWishlist = wishlist?.some((product) => product.productId === productId);

  const handleClick = async () => {
    try {
      checkInWishlist
        ? await deleteInWishlist(productId).unwrap()
        : await addToWishlist({ productId }).unwrap();

      await triggerWishlist().unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {wishlist ? (
        checkInWishlist ? (
          <Bookmark className='h-8 w-8 fill-primary stroke-primary ' onClick={handleClick} />
        ) : (
          <Bookmark className='h-8 w-8 stroke-primary' onClick={handleClick} />
        )
      ) : (
        <>
          <Toast
            actionLink='/auth'
            altText='Авторизация'
            toastTitle='Авторизуйтесь, чтобы добавить товар'
            actionText='Авторизация'
          >
            <Bookmark className='h-8 w-8 fill-secondary stroke-primary' />
          </Toast>
        </>
      )}
    </>
  );
};
