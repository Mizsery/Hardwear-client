import { Accordion } from '@/components/Accordion/Accordion';
import { AuthCheck } from '@/components/AuthCheck/AuthCheck';
import { Loading } from '@/components/Loading/Loading';
import { OrderForm } from '@/components/OrderForm/OrderForm';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/utils/api/hooks';
import {
  useCartQuery,
  useDeleteProductInCartMutation,
  useLazyCartQuery,
  useProductToCartMutation
} from '@/utils/api/services/cartApi';
import { selectIsAuthenticated } from '@/utils/api/slices/userSlice';
import { BASE_URL } from '@/utils/constant/api';

export const Cart = () => {
  const { data: cart, isLoading } = useCartQuery();
  const [triggerCart] = useLazyCartQuery();
  const [addToCart] = useProductToCartMutation();
  const [deleteInCart] = useDeleteProductInCartMutation();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  if (isLoading) {
    <Loading />;
  }

  const handleAdd = async (productId: string, productSize: string) => {
    try {
      await addToCart({ productId, size: productSize }).unwrap();
      await triggerCart().unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (productId: string, productSize: string, typeDelete: string) => {
    try {
      await deleteInCart({ body: { productId, size: productSize }, typeDelete }).unwrap();
      await triggerCart().unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  const amount = cart?.reduce((prev, curr) => {
    return prev + curr.quantity * +curr.product.price;
  }, 0);

  return (
    <>
      <Accordion title='корзина' hidden='hidden' />

      {isAuthenticated && cart && cart.length > 0 ? (
        <div className='flex flex-col md:grid md:grid-cols-5'>
          <div className='md:col-span-5 lg:col-span-4'>
            {cart.map((prod) => (
              <div className=' items-center md:grid md:grid-cols-4' key={prod.id}>
                <div className='flex justify-center md:p-4'>
                  <img
                    src={`${BASE_URL}${prod.product.image}`}
                    alt={prod.product.name}
                    className='h-auto w-[340px] rounded-xl shadow-xl md:max-w-full'
                  />
                </div>

                <div className='md:items-left flex flex-col items-center justify-center gap-0 max-md:flex md:gap-2 '>
                  <span className='text-wrap text-center font-bold md:text-lg'>
                    {prod.product.name}
                  </span>
                  <div className='md:text-lg'>
                    {prod.size ? <div>Размер {prod.size}</div> : null}
                  </div>
                  <div className='flex flex-col items-center gap-2 md:gap-2'>
                    <span>Количество:</span>
                    <div className='flex items-center justify-center gap-2'>
                      <Button
                        variant='outline'
                        onClick={() => handleDelete(prod.productId, prod.size, 'one')}
                        className='lg:text-xl'
                      >
                        -
                      </Button>
                      <Button variant='secondary' disabled>
                        {prod.quantity}
                      </Button>
                      <Button
                        variant='outline'
                        onClick={() => handleAdd(prod.productId, prod.size)}
                        className='lg:text-xl'
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>

                <div className='mt-2 flex justify-center font-bold md:text-xl'>
                  {prod.product.price} руб.
                </div>

                <div className='flex items-center justify-center'>
                  <Button
                    className='md:text-lg'
                    variant='link'
                    onClick={() => handleDelete(prod.productId, prod.size, 'product')}
                  >
                    Удалить
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className='md:col-span-5 lg:col-span-1'>
            <OrderForm amount={amount} />
          </div>
        </div>
      ) : (
        <AuthCheck link='/' message='Ваша корзина пуста' linkMessage='к покупкам' />
      )}
    </>
  );
};
