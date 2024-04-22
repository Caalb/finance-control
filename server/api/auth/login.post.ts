import { users } from "@/server/database/schema";
import { eq } from 'drizzle-orm';
import jose from '@panva/jose'
import { createSecretKey } from 'crypto';
import type { IUserLogin } from "~/server/interfaces/IUser";

const userLogin = async ({ username, password, email }: IUserLogin) => {
  const db = useDataBase();
  const fieldName = username ? 'username' : 'email';
  const fieldValue = fieldName === 'username' ? username : email;

  if(! fieldValue) {
    throw createCustomError({
      statusCode: 400,
      message: t('auth.invalid_credentials'),
    })
  }

  const [ model ] = await db
    .select()
    .from(users)
    .where(eq(users[fieldName], fieldValue))

  if (! model) {
    throw createCustomError({
      statusCode: 404,
      message: t('auth.user_not_found'),
    })
  }

  const { password: storedPassword } = model;

  if (password !== storedPassword) {
    throw createCustomError({
      statusCode: 422,
      message: t('auth.invalid_password'),
    })
  }

  return model;
}

export default defineEventHandler(async (event) => {
  const { username, password, email } = await readBody(event);
  const model = await userLogin({ username, password, email });

  const secretKey = createSecretKey(process.env.JWT_SECRET_KEY as string, 'utf-8');
  const token = jose.JWT.sign({ 
    username,
    user_id: model.id,
  }, secretKey, { expiresIn: '8h' });

  return { token }
})