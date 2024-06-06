import { Accordion } from '@/components/Accordion/Accordion';
import { AuthCheck } from '@/components/AuthCheck/AuthCheck';
import { useAppSelector } from '@/utils/api/hooks';
import { selectIsAuthenticated } from '@/utils/api/slices/userSlice';

export const Profile = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return (
    <>
      <Accordion title='Профиль' hidden='hidden' />
      {isAuthenticated ? (
        <>Profile</>
      ) : (
        <AuthCheck link='/auth' message='Вы не вошли в аккаунт' linkMessage='войти' />
      )}
    </>
  );
};
