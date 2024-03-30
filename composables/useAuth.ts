import { useStorage } from "@vueuse/core";

// considere usar o panva/jose como pacote para validar objeto JWT. Ele é excelente!

export const useAuth = () => {
  const { value: { expiration}} = useStorage("auth", { expiration: "0" });

  const isAuthenticated = (): boolean => expiration > new Date().toISOString();

  return { isAuthenticated };
};

