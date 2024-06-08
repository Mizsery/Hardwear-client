import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { OrderFormSchema } from './OrderFormSchema';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useLazyCartQuery, useProductToOrderMutation } from '@/utils/api/services/productsApi';

interface OrderFormProps {
  amount?: number;
}

export const OrderForm = ({ amount }: OrderFormProps) => {
  const navigate = useNavigate();
  const [addToOrder, { isLoading }] = useProductToOrderMutation();
  const [triggerCart] = useLazyCartQuery();

  const form = useForm<z.infer<typeof OrderFormSchema>>({
    resolver: zodResolver(OrderFormSchema),
    defaultValues: {
      street: '',
      city: '',
      state: '',
      zip: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof OrderFormSchema>) => {
    try {
      await addToOrder(values).unwrap();
      await triggerCart().unwrap();
      navigate('/profile');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='street'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Адрес</FormLabel>
              <FormControl>
                <Input placeholder='Пушкина, 1, кв. 1' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='city'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Город</FormLabel>
              <FormControl>
                <Input placeholder='Город' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='state'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Регион</FormLabel>
              <FormControl>
                <Input placeholder='Регион' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='zip'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Почтовый индекс</FormLabel>
              <FormControl>
                <Input placeholder='Почтовый индекс' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>Сумма заказа: {amount} руб.</div>
        <Button type='submit' className='w-full' disabled={isLoading}>
          Заказать
        </Button>
      </form>
    </Form>
  );
};
