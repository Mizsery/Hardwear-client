import { Accordion } from '@/components/Accordion/Accordion';

export const AboutUs = () => {
  return (
    <>
      <Accordion title='О нас' hidden='hidden' />
      <div>
        <p className=' flex flex-col items-center justify-center gap-6 text-lg md:text-center md:leading-9'>
          <span className='md:w-3/5'>
            HARDWEAR - сеть магазинов уличной одежды, основанный в 2015 году. На 95% наш ассортимент
            состоит из Отечественных марок одежды. Большинство брендов продающихся в нашем магазине
            сделаны в России. Мы гордимся, тем что помогаем независимым дизайнерам становиться
            популярнее.
          </span>
          <span className='md:w-3/5'>
            «Дать нашим гостям такое место, в котором они смогут чувствовать себя комфортно, где
            будет по карману одеваться студенту и качество вещей поразит взрослого успешного
            мужчину», - цель нашего проекта
          </span>
        </p>
      </div>
    </>
  );
};
