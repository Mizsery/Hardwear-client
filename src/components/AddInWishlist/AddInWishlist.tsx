/* eslint-disable no-nested-ternary */
import { useParams } from 'react-router-dom';
import { Bookmark } from 'lucide-react';

import { Toast } from '../Toast/Toast';

import { Loading } from '@/components/Loading/Loading';
import {
  useDeleteProductInWishlistMutation,
  useLazyWishlistQuery,
  useProductToWishlistMutation,
  useWishlistQuery
} from '@/utils/api/services/wishlistApi';

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
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      checkInWishlist
        ? await deleteInWishlist(productId).unwrap()
        : await addToWishlist({ productId }).unwrap();

      await triggerWishlist().unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {wishlist ? (
        checkInWishlist ? (
          <Bookmark className='h-8 w-8 fill-primary stroke-primary ' onClick={handleClick} />
        ) : (
          <Toast
            actionLink='/wishlist'
            altText='Вишлист'
            toastTitle='Товар добавлен в вишлист'
            actionText='Вишлист'
          >
            <Bookmark className='h-8 w-8 stroke-primary' onClick={handleClick} />
          </Toast>
        )
      ) : (
        <Toast
          actionLink='/auth'
          altText='Авторизация'
          toastTitle='Авторизуйтесь, чтобы добавить товар'
          actionText='Авторизация'
          toastVariant='destructive'
        >
          <Bookmark className='h-8 w-8  stroke-primary' />
        </Toast>
      )}
    </>
  );
};
