import { Link } from 'react-router-dom';

import { Accordion } from '@/components/Accordion/Accordion';
import { AuthCheck } from '@/components/AuthCheck/AuthCheck';
import { Loading } from '@/components/Loading/Loading';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { useAppSelector } from '@/utils/api/hooks';
import { useOrdersQuery } from '@/utils/api/services/orderApi';
import { selectIsAuthenticated, selectUser } from '@/utils/api/slices/userSlice';
import { formatToLocaleDate } from '@/utils/helpers/formatToLocaleDate';

export const Profile = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const user = useAppSelector(selectUser);
  const { data: orders, isLoading } = useOrdersQuery();

  if (isLoading) {
    <Loading />;
  }

  return (
    <>
      <Accordion title='Профиль' hidden='hidden' />
      {isAuthenticated ? (
        <div className='grid gap-4 md:grid-cols-3'>
          <Card className='col-span-2 h-fit md:col-span-1'>
            <CardHeader>
              <p>ФИО: {user?.name}</p>
              <p>Почта: {user?.email}</p>
            </CardHeader>
          </Card>
          {orders && orders?.length > 0 ? (
            <Card className='col-span-2 '>
              {orders?.map((order) => (
                <Card key={order.id} className='m-4'>
                  <Link to={`/order/${order.id}`}>
                    <CardHeader>
                      <CardTitle>№ Заказа: {order.id}</CardTitle>
                      <CardDescription>
                        {order.address.state} {order.address.city} {order.address.street},{' '}
                        {order.address.zip}
                      </CardDescription>
                      <CardContent>
                        <p>Количество товаров: {order.productInOrder.length}</p>
                        <p>Сумма заказа: {order.netAmount} руб.</p>
                      </CardContent>
                      <CardFooter className='flex flex-col items-start'>
                        <p>Дата заказа:</p>
                        <p>{formatToLocaleDate(order.createdAt)}</p>
                      </CardFooter>
                    </CardHeader>
                  </Link>
                </Card>
              ))}
            </Card>
          ) : (
            <AuthCheck link='/' message='Вы пока что ничего не заказали' linkMessage='к покупкам' />
          )}
        </div>
      ) : (
        <AuthCheck link='/auth' message='Вы не вошли в аккаунт' linkMessage='войти' />
      )}
    </>
  );
};
