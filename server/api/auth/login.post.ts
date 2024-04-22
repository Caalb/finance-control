import { users } from "@/server/database/schema";
import { eq } from 'drizzle-orm';
import jose from '@panva/jose'

import { createSecretKey } from 'crypto';

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event);
  const db = useDataBase();

  const userData = await db.select().from(users).where(eq(users.username, username))

  if (userData.length === 0) {
    throw createCustomError({
      statusCode: 404,
      message: 'User not found',
    })
  }

  const { password: storedPassword } = userData[0];

  if (password !== storedPassword) {
    throw createCustomError({
      statusCode: 422,
      message: 'Invalid password',
    })
  }

  const secretKey = createSecretKey(process.env.JWT_SECRET_KEY as string, 'utf-8');
  const token = jose.JWT.sign({ 
    username,
    user_id: userData[0].id,
   }, secretKey, { expiresIn: '8h' });

  return { token }
})