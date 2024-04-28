import { z } from 'zod';

import { TransactionTypes } from '~/enums/transactions_types';

export const TransactionSchema = z.object({
  transaction_type: z.nativeEnum(TransactionTypes),
  amount: z.number(),
});
