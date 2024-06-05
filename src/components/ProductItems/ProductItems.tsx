import { Link } from 'react-router-dom';

import { Card, CardContent, CardFooter } from '../ui/card';

interface ProductItemsProps {
  product: Products;
}

export const ProductItems = ({ product }: ProductItemsProps) => {
  return (
    <Link to={`/${product.categoryId}/${product.id}`}>
      <Card>
        <CardContent className='px-0'>
          <img
            src={`${'http://localhost:3000'}${product.image}`}
            alt={product.name}
            className='rounded-xl'
          />
        </CardContent>
        <CardFooter>
          <div className='flex flex-col text-sm md:text-lg'>
            <p className='font-bold'>{product.name} </p>
            <p>{product.price} р.</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
