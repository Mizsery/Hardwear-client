import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { Loading } from '@/components/Loading/Loading';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useProductByIdQuery } from '@/utils/api/services/productsApi';
import { AddInWishlist } from '@/components/AddInWishlist/AddInWishlist';
import { Accordion } from '@/components/Accordion/Accordion';

export const ProductItem = () => {
  const params = useParams<{ categoryId: string; productId: string }>();

  const { data: product, isLoading } = useProductByIdQuery(params.productId ?? '');

  const form = useForm();

  if (isLoading) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    console.log(data, product?.id);
  };

  return (
    <>
      <Accordion
        hidden='hidden'
        category={product?.category}
        productType={product?.typeProduct}
        title={product?.name}
        productItem={true}
      />
      <div className='mx-auto max-w-screen-lg'>
        {
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {product && (
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <div>
                    <img
                      src={`${'http://localhost:3000'}${product.image}`}
                      alt={product.name}
                      className='rounded-xl'
                    />
                  </div>
                  <div className='flex flex-col items-start gap-2'>
                    <div className='text-lg md:text-2xl'>{product.name}</div>
                    <div className='text-lg font-bold md:text-2xl'>{product.price} р.</div>
                    <div>{product.description}</div>

                    <div className='flex gap-2'>
                      <FormField
                        control={form.control}
                        name='size'
                        render={({ field }) => (
                          <RadioGroup className='flex gap-4' onValueChange={field.onChange}>
                            {product.sizes.map((s) => (
                              <FormControl key={s.id}>
                                <div className='flex items-center justify-center '>
                                  <RadioGroupItem
                                    value={s.size}
                                    id={s.id}
                                    className='peer hidden'
                                  />
                                  <label
                                    htmlFor={s.id}
                                    className='block cursor-pointer rounded-md border border-border px-4 py-1 text-lg shadow-sm hover:border-primary peer-aria-checked:border-primary peer-aria-checked:ring-1 peer-aria-checked:ring-ring '
                                  >
                                    {s.size}
                                  </label>
                                </div>
                              </FormControl>
                            ))}
                          </RadioGroup>
                        )}
                      />
                    </div>

                    <div className='flex w-full items-center gap-2'>
                      {product.sizes.length > 0 ? (
                        <>
                          {!form.formState.isValid || !form.formState.isDirty ? (
                            <Button disabled className='w-1/2 md:w-2/5'>
                              Выберите размер
                            </Button>
                          ) : (
                            <Button type='submit' className='w-1/2 md:w-2/5'>
                              В корзину
                            </Button>
                          )}
                        </>
                      ) : (
                        <Button type='submit' className='w-1/2 md:w-2/5'>
                          В корзину
                        </Button>
                      )}

                      <AddInWishlist />
                    </div>
                  </div>
                </div>
              )}
            </form>
          </Form>
        }
      </div>
    </>
  );
};
