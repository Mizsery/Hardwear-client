import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

interface ToastProps {
  children?: React.ReactElement | string;
  toastTitle: string;
  actionLink: string;
  actionText: string;
  altText: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | null;
  size?: 'default' | 'sm' | 'lg' | 'icon' | null;
  type?: 'submit' | 'reset' | 'button';
  full?: string;
  toastVariant?: 'default' | 'destructive' | null;
}

export const Toast = ({
  children,
  toastTitle,
  altText,
  actionLink,
  actionText,
  variant = 'ghost',
  size = 'icon',
  type = undefined,
  full,
  toastVariant
}: ToastProps) => {
  const { toast } = useToast();

  return (
    <Button
      className={`${full}`}
      variant={variant}
      size={size}
      type={type}
      onClick={() => {
        toast({
          variant: toastVariant,
          title: toastTitle,
          action: (
            <ToastAction asChild altText={altText}>
              <Link to={`${actionLink}`}>{actionText}</Link>
            </ToastAction>
          ),
          duration: 3000
        });
      }}
    >
      {children}
    </Button>
  );
};
