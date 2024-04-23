import { useStorage } from '@vueuse/core';

export const useAuth = () => {
  const { value: { expiration}} = useStorage('auth', { expiration: '0' });

  const isAuthenticated = (): boolean => expiration > new Date().toISOString();

  return { isAuthenticated };
};

