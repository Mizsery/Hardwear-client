import { useParams } from 'react-router-dom';

import { Accordion } from '@/components/Accordion/Accordion';
import { Loading } from '@/components/Loading/Loading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useOrderByIdQuery } from '@/utils/api/services/orderApi';
import { BASE_URL } from '@/utils/constant/api';
import { formatToLocaleDate } from '@/utils/helpers/formatToLocaleDate';

export const Order = () => {
  const { id } = useParams();
  const { data: order, isLoading } = useOrderByIdQuery(id ?? '');

  if (isLoading) {
    <Loading />;
  }

  return (
    <>
      <Accordion hidden='hidden' title={`Заказ № ${order?.id}`} />
      <Card>
        {order && (
          <>
            <CardHeader>
              <CardTitle className='flex justify-between'>
                <div>
                  <p>
                    {order.address.state} {order.address.city}
                  </p>
                  <p>
                    {order.address.street} {order.address.zip}
                  </p>
                </div>
                <div className='md:text-md flex flex-col items-end font-bold md:gap-2'>
                  <p className='flex text-end'>Сумма заказа:</p>
                  <p>{order.netAmount} руб.</p>
                </div>
              </CardTitle>
              <CardDescription>Дата заказа: {formatToLocaleDate(order?.createdAt)}</CardDescription>
            </CardHeader>
            <CardContent>
              <div>Детали заказа:</div>
              {order.productInOrder.map((prod) => (
                <div
                  key={prod.id}
                  className='m-2 mx-auto items-center justify-around md:grid md:grid-cols-3'
                >
                  <div className='flex justify-center md:p-4'>
                    <img
                      src={`${BASE_URL}${prod.product.image}`}
                      alt={prod.product.name}
                      className='h-auto w-[340px] rounded-xl shadow-xl md:max-w-full'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center gap-0'>
                    <div className='text-wrap text-center font-bold md:text-lg'>
                      {prod.product.name}
                    </div>
                    {prod.size && <div className='font-semibold'>Размер: {prod.size}</div>}
                    <div className='font-semibold'>Количество: {prod.quantity}</div>
                  </div>
                  <div className='flex justify-center font-bold md:text-xl'>
                    {prod.product.price} руб.
                  </div>
                </div>
              ))}
            </CardContent>
          </>
        )}
      </Card>
    </>
  );
};
