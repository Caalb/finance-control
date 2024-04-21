import { createSecretKey } from 'crypto';
import jose from '@panva/jose';

export default defineEventHandler((event) => {
  const isPublicRoute = useServerAuth().isPublicRoute(event);
  if (isPublicRoute) return;

  const token = event.headers.get('Authorization')?.split('Bearer ')[1];
  if (!token) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized',
    })
  }

  const secretKey = createSecretKey(process.env.JWT_SECRET_KEY as string, 'utf-8');
  try {
    jose.JWT.verify(token, secretKey);
  } catch (err) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized',
    })
  }
})