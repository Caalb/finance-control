import type { FetchError } from 'ofetch';
import { useStorage } from '@vueuse/core';

import type { IUserLogin,  IUserLoginResponse} from '~/types/auth';

export const userLogin = async ({ ...data }: IUserLogin): Promise<IUserLoginResponse> => {
  try {
    const { token } = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {...data},
    });

    useStorage('token', token);

    return {
      data: token,
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
