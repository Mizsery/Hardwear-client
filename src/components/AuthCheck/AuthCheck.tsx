import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

interface AuthCheckProps {
  message: string;
  linkMessage: string;
  link: string;
}

export const AuthCheck = ({ message, linkMessage, link }: AuthCheckProps) => {
  return (
    <div className='flex items-center justify-center'>
      <p className='items-center text-xs md:text-lg'>
        {message}{' '}
        <Button variant='link' className='px-1 text-xs md:text-lg'>
          <Link to={`${link}`}>{linkMessage}</Link>
        </Button>
      </p>
    </div>
  );
};
