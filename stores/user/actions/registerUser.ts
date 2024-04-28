import type { FetchError } from 'ofetch';

import type { IRegisterUser,  IRegisterUserResponse} from '~/types/auth';

export const registerUser = async ({ ...data }: IRegisterUser): Promise<IRegisterUserResponse> => {
  try {
    const response = await $fetch('/api/auth/register', {
      method: 'POST',
      body: {...data},
    });

    return {
      data: response.data,
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
