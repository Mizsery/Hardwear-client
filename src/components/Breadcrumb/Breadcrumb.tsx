import { SlashIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

type category = {
  id: string;
  category: string;
};

interface BreadcrumbProps {
  category?: category;
  productType?: string;
  title?: string;
}

export const Breadcrumb = ({ category, productType, title }: BreadcrumbProps) => {
  return (
    <div className='flex items-center gap-2 max-md:flex-wrap md:justify-center'>
      {productType === 'Wear' ? (
        <>
          <>
            <Button variant='link'>
              <Link className='text-sm lg:text-lg' to={'/'}>
                Одежда
              </Link>
            </Button>
            <SlashIcon className='stroke-primary ' />
          </>
          <>
            <Button variant='link'>
              <Link className='text-sm lg:text-lg' to={`/wear/${category?.id}`}>
                {category?.category}
              </Link>
            </Button>
            <SlashIcon className='stroke-primary' />
          </>
        </>
      ) : (
        <>
          <Button variant='link'>
            <Link className='text-sm lg:text-lg' to={'/accessories'}>
              Аксессуары
            </Link>
          </Button>
          <SlashIcon className='stroke-primary' />
          <Button variant='link'>
            <Link className='text-sm lg:text-lg' to={`/accessories/${category?.id}`}>
              {category?.category}
            </Link>
          </Button>
          <SlashIcon className='stroke-primary' />
        </>
      )}{' '}
      <Button variant='link' className='text-sm lg:text-lg'>
        {title}
      </Button>
    </div>
  );
};
