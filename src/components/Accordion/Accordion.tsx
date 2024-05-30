import { useLocation } from 'react-router-dom';
import { SlidersVertical } from 'lucide-react';

import {
  Accordion as AccordionShadcn,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const dictionary = {
  '/': 'Одежда',
  '/accessories': 'Аксессуары',
  '/about-us': 'О проекте HardWear',
  '/contact': 'Контакты',
  '/wishlist': 'Вишлист',
  '/cart': 'Корзина'
};

export const Accordion = () => {
  const location = useLocation();

  return (
    <>
      <div className='px-8 py-4'>
        <AccordionShadcn type='single' collapsible>
          <AccordionItem value='item-1'>
            <div className='flex items-center justify-between bg-inherit text-sm md:text-lg'>
              <div className='flex gap-4  py-4 font-bold uppercase'>
                {dictionary[location.pathname]}
              </div>

              <AccordionTrigger className='flex gap-4 font-bold uppercase '>
                {location.pathname === '/' || location.pathname === '/accessories' ? (
                  <div className='flex gap-4'>
                    Фильтр <SlidersVertical />
                  </div>
                ) : null}
              </AccordionTrigger>
            </div>

            <AccordionContent>
              <div>f</div>
              <div>f</div>
              <div>f</div>
            </AccordionContent>
          </AccordionItem>
        </AccordionShadcn>
      </div>
      <hr className='h-0.5 border-0 border-none bg-primary' />
    </>
  );
};
