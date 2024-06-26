import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/features/theme/useTheme';

interface ModeToggleProps {
  variant: 'default' | 'link' | 'destructive' | 'outline' | 'secondary' | 'ghost' | null;
  size: 'default' | 'sm' | 'lg' | 'icon' | null;
}

export const ModeToggle = ({ variant, size }: ModeToggleProps) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className='outline-none'>
          <Sun className='h-6 w-6  rotate-0 scale-100 stroke-primary transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-6 w-6 rotate-90 scale-0 stroke-primary transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>Светлая</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Темная</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>Системная</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
