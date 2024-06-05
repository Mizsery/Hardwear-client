import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

import { Link } from 'react-router-dom';

interface AuthToastProps {
  children: React.ReactElement;
}

export const AuthToast = ({ children }: AuthToastProps) => {
  const { toast } = useToast();

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => {
        toast({
          title: 'Что то пошло не так',
          description: 'Пожалуйста авторизуйтесь',
          action: (
            <ToastAction asChild altText='Авторизация'>
              <Link to={'/auth'}>Авторизация</Link>
            </ToastAction>
          ),
          duration: 5000
        });
      }}
    >
      {children}
    </Button>
  );
};
