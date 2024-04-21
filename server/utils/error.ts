import { ZodError, z } from "zod";

interface CustomErrorParams {
  errors?: string[] | ZodError;
  statusCode: number;
  message?: string;
}

interface ValidationError {
  schema: z.ZodType<any, any>;
  body: unknown;
}

export const createCustomError = ({
  errors,
  statusCode,
  message,
}: CustomErrorParams) => {
  return createError({
    statusCode,
    message,
    data: {
      errors,
    },
  })
}

export const useValidation = ({ schema, body }: ValidationError) => {
  try {
    return schema.parse(body);
  } catch (error: unknown) {
    const zodError = error as ZodError;
    throw createCustomError({
      errors: zodError.issues.map((issue) => issue.message),
      statusCode: 422,
    });
  }
}