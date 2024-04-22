import type { EventHandlerRequest, H3Event } from 'h3'
import jose from "@panva/jose"

interface JWTData {
  iat: number;
  exp: number;
  username: string;
  user_id: number;
}

const isPublicRoute = (event: H3Event<EventHandlerRequest>) => {
  const { pathname } = getRequestURL(event);

  return pathname.startsWith('/api/auth');
}

export const useServerAuth = () => ({
  isPublicRoute 
});

export const getJWTData = (token: string): JWTData => {
  return jose.JWT.decode(token) as JWTData;
}
