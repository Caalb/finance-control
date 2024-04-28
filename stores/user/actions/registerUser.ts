import type { FetchError } from 'ofetch';

import type { IRegisterUser } from '~/types/auth';

export const registerUser = async ({ ...data }: IRegisterUser) => {
  try {
    const response = await $fetch('/api/auth/register', {
      method: 'POST',
      body: {...data},
    });

    return response;
  } catch (error) {
    useRequestError(error as FetchError);
  }
};
