export default defineNuxtRouteMiddleware(({ path}) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return navigateTo('/login');
  }
});
