import { ICustomErrorParams } from '@/server/interfaces/IError';

export const createCustomError = ({
  errors,
  statusCode,
  message,
}: ICustomErrorParams) => {
  return createError({
    statusCode,
    message,
    data: {
      errors,
    },
  });
};

