import { and, eq } from 'drizzle-orm';

import { finance_transactions } from '~/server/database/schema';
import type { ITransactionOperations } from '~/server/interfaces/ITransaction';

async function deleteTransaction({ transaction_id, user_id }: ITransactionOperations) {
  const db = useDataBase();

  const [ model ] = await db
    .delete(finance_transactions)
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
}

export default eventHandler(async (event) => {
  const transaction_id = getRouterParam(event, 'transaction_id');
  const { user_id } = getJWTData(event.context.token);

  if(! transaction_id) {
    return createCustomError({ statusCode: 400 });
  }

  const model = await deleteTransaction({ transaction_id, user_id });

  if(! model) {
    return createCustomError({ statusCode: 404 });
  }

  return model;
});
