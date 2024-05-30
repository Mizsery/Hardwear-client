import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Неправильная почта' }),
  password: z.string().min(6, { message: 'Минимальная длина пароля 6 символов' })
});
