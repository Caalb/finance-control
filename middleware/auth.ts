export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return navigateTo('/login');
  }
});
