import { Accordion } from '@/components/Accordion/Accordion';
import { Loading } from '@/components/Loading/Loading';
import { ProductItems } from '@/components/ProductItems/ProductItems';
import { useProductsByCategoryQuery } from '@/utils/api/services/productsApi';
import { useParams } from 'react-router-dom';

export const CategoryWear = () => {
  const params = useParams<{ categoryId: string }>();
  const { data, isLoading } = useProductsByCategoryQuery({
    id: params.categoryId ?? '',
    type: 'Wear'
  });

  if (isLoading) {
    return <Loading />;
  }

  const { products, categories } = { ...data };

  let title = '';
  categories?.forEach((cat) => (cat.id === params.categoryId ? (title = cat.category) : null));

  return (
    <>
      <Accordion categories={categories} title={title} link='wear' />
      <div className='grid  grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {products && products.map((product) => <ProductItems key={product.id} product={product} />)}
      </div>
    </>
  );
};