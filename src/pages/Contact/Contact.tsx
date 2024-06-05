import { Accordion } from '@/components/Accordion/Accordion';

export const Contact = () => {
  return (
    <>
      <Accordion title='контакты' hidden='hidden' />
      <div className='justify-around gap-4 max-md:flex-col md:flex'>
        <div className='flex flex-col md:gap-2'>
          <span className='text-lg font-bold'>Телефон:</span>
          <span>+ 7(996)-915-21-37</span>
        </div>
        <div className='flex flex-col gap-2'>
          <span className='text-lg font-bold'>Адрес магазина:</span>
          <span>ЦУМ Якутск, 5 этаж, ул. Курашова, 4</span>
        </div>
        <div className='flex flex-col gap-2'>
          <span className='text-lg font-bold'>Время работы:</span>
          <span>Пн-Cб: 11:00- 20:00</span>
          <span>Вс: 11:00- 19:00</span>
        </div>
      </div>

      <div className=' mt-4 flex flex-col items-center gap-2'>
        <span className='text-lg font-bold max-md:hidden'>Mы на карте:</span>
        <img
          src='../../../public/map.png'
          className='m-auto max-h-full rounded-md object-scale-down drop-shadow-md'
          alt=''
        />
      </div>
    </>
  );
};
