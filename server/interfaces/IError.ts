import { ZodError} from 'zod';

export interface ICustomErrorParams {
  errors?: string[] | ZodError;
  statusCode: number;
  message?: string;
}
