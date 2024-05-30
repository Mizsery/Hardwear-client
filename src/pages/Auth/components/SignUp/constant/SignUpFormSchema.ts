import { z } from 'zod';

const phoneValidation = new RegExp(
  /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
);

export const SignUpFormSchema = z.object({
  email: z.string().email({ message: 'Неправильная почта' }),
  name: z.string().min(3, { message: 'Слишком короткое имя' }),
  phone: z
    .string()
    .min(1, { message: 'Введите свой номер телефона' })
    .regex(phoneValidation, { message: 'Неправильный номер телефона' }),
  password: z.string().min(6, { message: 'Минимальная длина пароля 6 символов' })
});
