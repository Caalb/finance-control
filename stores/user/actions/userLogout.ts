import type { FetchError } from 'ofetch';

import type { IUserLogoutResponse } from '~/types/auth';

export const userLogout = async (): Promise<IUserLogoutResponse> => {
  try {
    await $fetch('/api/auth/logout', {
      method: 'POST',
    });

    localStorage.removeItem('token');

    return {
      data: {},
      success: true,
    };
  } catch (error) {
    useRequestError(error as FetchError);

    return {
      data: error,
      success: false,
    };
  }
};
