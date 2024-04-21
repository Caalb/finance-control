import { z } from "zod"

export const RegisterSchema = z.object({
  email: z.string().email({ message: t('auth.login.validations.email')}),
  username: z.string().min(3, { message: t('auth.login.validations.username.min') }),
  password: z.string()
    .min(8, { message: t('auth.login.validations.password.min') })
    .regex(/[!@#$%^&*()\-_+=[\]{};:'"\\|<,>.?/]/, { message: t('auth.login.validations.password.special' )}) 
    .regex(/[A-Z]/, { message: t('auth.login.validations.password.uppercase') }) 
});