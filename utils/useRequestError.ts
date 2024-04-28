import type { FetchError } from 'ofetch';

export const useRequestError = (error: FetchError) => {
  const toast = useToast();

  if(error.statusCode === 422)  {
    toast.add({
      title: error.data?.data?.errors[0],
    });
  }
};
