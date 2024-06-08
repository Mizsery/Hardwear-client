import { useParams } from 'react-router-dom';

import { Accordion } from '@/components/Accordion/Accordion';
import { Loading } from '@/components/Loading/Loading';
import { ProductItems } from '@/components/ProductItems/ProductItems';
import { useProductsByCategoryQuery } from '@/utils/api/services/productsApi';
import { checkCategoryName } from '@/utils/helpers/checkCategoryName';

export const CategoryAccessories = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { data, isLoading } = useProductsByCategoryQuery({
    id: categoryId ?? '',
    type: 'Accessories'
  });

  if (isLoading) {
    return <Loading />;
  }

  const { products, categories } = { ...data };

  return (
    <>
      <Accordion
        categories={categories}
        title={categories && categoryId && checkCategoryName(categories, categoryId)}
        link='accessories'
      />
      <div className='grid  grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {products && products.map((product) => <ProductItems key={product.id} product={product} />)}
      </div>
    </>
  );
};
