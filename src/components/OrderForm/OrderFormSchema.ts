import { z } from 'zod';

export const OrderFormSchema = z.object({
  street: z.string().min(3, { message: 'Неправильный адрес' }),
  city: z.string().min(3, { message: 'Неправильное название города' }),
  state: z.string().min(3, { message: 'Минимальная длина 3 символа' }),
  zip: z.string().min(3, { message: 'Минимальная длина 3 символа' })
});
