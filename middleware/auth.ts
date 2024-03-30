// quando for usar a lib panva/jose para validar JWT, tens que adaptar ela também aqui.

import { defineNuxtRouteMiddleware} from "#app";

export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return navigateTo("/login");
  }
})
