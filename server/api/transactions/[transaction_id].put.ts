import { and, eq } from 'drizzle-orm';

import { finance_transactions } from '~/server/database/schema';
import type { IUpdateTransaction } from '~/server/interfaces/ITransaction';
import { TransactionSchema } from '~/server/validations/schemas/transactions';

const updateTransaction = async ({
  transaction_id,
  user_id,
  amount,
  transaction_type
}: IUpdateTransaction) => {
  const db = useDataBase();

  const [ model ] = await db
    .update(finance_transactions)
    .set({
      amount,
      transaction_type,
    })
    .where(
      and(
        eq(finance_transactions.user_id, user_id),
        eq(finance_transactions.id, Number(transaction_id))
      )
    )
    .returning({
      id: finance_transactions.id,
      amount: finance_transactions.amount,
      transaction_type: finance_transactions.transaction_type,
      created_at: finance_transactions.created_at,
    });

  return model;
};

export default eventHandler(async (event) => {
  const transaction_id = getRouterParam(event, 'transaction_id');
  const { user_id } = getJWTData(event.context.token);
  const body = await readBody(event);

  useValidation({schema: TransactionSchema, body});

  if(! transaction_id) {
    return createCustomError({ statusCode: 400 });
  }

  const model = await updateTransaction({ transaction_id, user_id, ...body });

  if(! model) {
    return createCustomError({ statusCode: 404 });
  }

  return model;
});
