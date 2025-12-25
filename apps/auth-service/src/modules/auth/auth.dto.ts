import { z } from 'zod';

export const RegisterSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().lowercase(),
  password: z.string().min(6),
});

export const LoginSchema = z.object({
  email: z.string(),
  password: z.string().min(6),
});
