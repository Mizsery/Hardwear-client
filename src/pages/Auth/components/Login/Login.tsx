import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { LoginFormSchema } from './constant/LoginFormSchema';

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
import { useLoginMutation } from '@/utils/api/services/userApi';

interface LoginProps {
  setSelectedTab: (value: string) => void;
}

export const Login = ({ setSelectedTab }: LoginProps) => {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof LoginFormSchema>) => {
    try {
      await login(values).unwrap();
      navigate('/');
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
          Нет аккаунта?{' '}
          <Button
            variant='link'
            onClick={() => setSelectedTab('signup')}
            className='px-1 text-xs md:text-sm'
          >
            Зарегистрироваться
          </Button>
        </p>

        <Button type='submit' className='w-full' disabled={isLoading}>
          Войти
        </Button>
      </form>
    </Form>
  );
};
