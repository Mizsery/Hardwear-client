import { Link } from 'react-router-dom';

import {
  Accordion as AccordionShadcn,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

import { Button } from '../ui/button';
import { SlidersVertical } from 'lucide-react';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';

type category = {
  id: string;
  category: string;
};

interface AccordionProps {
  categories?: Category[];
  title?: string;
  link?: string;
  hidden?: string;
  category?: category;
  productType?: string;
  productItem?: boolean;
}

export const Accordion = ({
  categories,
  title,
  link,
  hidden,
  category,
  productType,
  productItem
}: AccordionProps) => {
  return (
    <div className='mb-10 w-auto '>
      <div className='px-4 py-4 md:px-8'>
        <AccordionShadcn type='single' collapsible>
          <AccordionItem value='item-1'>
            <div className='text-md flex items-center justify-between bg-inherit md:text-lg'>
              <div className='flex h-auto  gap-4 py-4 font-bold uppercase'>
                {productItem ? (
                  <Breadcrumb category={category} productType={productType} title={title} />
                ) : (
                  title
                )}
              </div>

              <AccordionTrigger className={`flex ${hidden} gap-4 font-bold uppercase`}>
                <div className='flex gap-4'>
                  Фильтр <SlidersVertical />
                </div>
              </AccordionTrigger>
            </div>

            <AccordionContent>
              <div className='flex gap-4'>
                {categories?.map((category) => (
                  <Button key={category.id} variant='outline' size='lg'>
                    <Link to={`/${link}/${category.id}`}>{category.category}</Link>
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </AccordionShadcn>
      </div>
      <hr className='h-0.5 border-0 border-none bg-primary' />
    </div>
  );
};
