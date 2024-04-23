import z from 'zod';

export interface IValidationError {
  schema: z.ZodType<any, any>;
  body: unknown;
}
