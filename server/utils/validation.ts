import { ZodError } from 'zod';

import type { IValidationError } from '@/server/interfaces/IValidation';

export const useValidation = ({ schema, body }: IValidationError) => {
  try {
    return schema.parse(body);
  } catch (error: unknown) {
    const zodError = error as ZodError;
    throw createCustomError({
      errors: zodError.issues.map((issue) => issue.message),
      statusCode: 422,
    });
  }
};
