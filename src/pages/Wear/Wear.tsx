import { useUsersQuery } from '@/utils/api/services/userApi';

export const Wear = () => {
  const { data } = useUsersQuery();

  return (
    <div>
      <p>{data ? data.map((user) => <h1 key={user.id}>{user.name}</h1>) : 'not'}</p>
    </div>
  );
};
