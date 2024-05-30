import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { SignUpFormSchema } from './constant/SignUpFormSchema';

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
import { useSignupMutation } from '@/utils/api/services/userApi';

interface SignUpProps {
  setSelectedTab: (value: string) => void;
}

export const SignUp = ({ setSelectedTab }: SignUpProps) => {
  const [signUp, { isLoading }] = useSignupMutation();

  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: '',
      name: '',
      phone: '',
      password: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof SignUpFormSchema>) => {
    try {
      await signUp(values).unwrap();
      setSelectedTab('login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Почта</FormLabel>
              <FormControl>
                <Input placeholder='qwerty@gmail.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ваше имя</FormLabel>
              <FormControl>
                <Input placeholder='ФИО' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Телефон</FormLabel>
              <FormControl>
                <Input placeholder='+7(999)999-99-99' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input placeholder='Минимум 6 символов' type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className='items-center text-xs md:text-sm'>
          Уже есть аккаунт?{' '}
          <Button
            variant='link'
            onClick={() => setSelectedTab('login')}
            className='px-1 text-xs md:text-sm'
          >
            Войти
          </Button>
        </p>

        <Button type='submit' className='w-full' disabled={isLoading}>
          Зарегистрироваться
        </Button>
      </form>
    </Form>
  );
};
