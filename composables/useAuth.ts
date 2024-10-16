export const useAuth = () => {
  const isAuthenticated = (): boolean => {
    const token: string | null = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    const jwt_data = useJWTData();

    if (jwt_data.exp < Date.now() / 1000) {
      return false;
    }

    return true;
  };

  return { isAuthenticated };
};
