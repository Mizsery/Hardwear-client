import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { Button } from '../ui/button';

export const GoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Button variant='ghost' onClick={handleGoBack}>
      <ArrowLeft className='mr-4 h-4 w-4 stroke-foreground dark:stroke-primary' /> Вернуться назад
    </Button>
  );
};
