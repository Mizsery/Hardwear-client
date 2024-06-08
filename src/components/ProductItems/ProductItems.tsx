import { Link } from 'react-router-dom';

import { Card, CardContent, CardFooter } from '../ui/card';

import { BASE_URL } from '@/utils/constant/api';

interface ProductItemsProps {
  product: ProductWithoutRelation;
}

export const ProductItems = ({ product }: ProductItemsProps) => {
  return (
    <Link to={`/${product.categoryId}/${product.id}`}>
      <Card className='h-full'>
        <CardContent className='px-0'>
          <img
            src={`${BASE_URL}${product.image}`}
            alt={product.name}
            className='h-[240px] w-full rounded-xl object-cover sm:h-[320px] lg:h-[460px] '
          />
        </CardContent>
        <CardFooter>
          <div className='flex flex-col text-sm md:text-lg'>
            <p className='font-bold'>{product.name} </p>
            <p>{product.price} руб.</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
