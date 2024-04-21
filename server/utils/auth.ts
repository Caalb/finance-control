import type { EventHandlerRequest, H3Event } from 'h3'

const isPublicRoute = (event: H3Event<EventHandlerRequest>) => {
  const { pathname } = getRequestURL(event);

  return pathname.startsWith('/api/auth');
}

export const useServerAuth = () => ({ isPublicRoute });