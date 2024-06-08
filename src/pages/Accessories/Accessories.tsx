import { Accordion } from '@/components/Accordion/Accordion';
import { Loading } from '@/components/Loading/Loading';
import { ProductItems } from '@/components/ProductItems/ProductItems';
import { useProductsQuery } from '@/utils/api/services/productsApi';

export const Accessories = () => {
  const { data, isLoading } = useProductsQuery({ type: 'Accessories' });

  if (isLoading) {
    return <Loading />;
  }

  const { products, categories } = { ...data };

  return (
    <>
      <Accordion categories={categories} title='Аксессуары' link='accessories' />
      <div className='grid  grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4'>
        {products && products.map((product) => <ProductItems key={product.id} product={product} />)}
      </div>
    </>
  );
};
