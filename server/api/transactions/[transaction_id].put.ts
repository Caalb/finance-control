import { and, eq } from "drizzle-orm";
import { finance_transactions } from "~/server/database/schema";
import { TransactionSchema } from "~/server/validations/schemas/transactions";

export default eventHandler(async (event) => {
  const transaction_id = getRouterParam(event, 'transaction_id')
  const db = useDataBase();
  const { user_id } = getJWTData(event.context.token);
  const body = await readBody(event);

  useValidation({schema: TransactionSchema, body})

  const [ model ] = await db.update(finance_transactions).set({
    amount: body.amount,
    transaction_type: body.transaction_type,
  }).where(
    and(
      eq(finance_transactions.user_id, user_id),
      eq(finance_transactions.id, Number(transaction_id))
    )
  ).returning({
    id: finance_transactions.id,
    amount: finance_transactions.amount,
    transaction_type: finance_transactions.transaction_type,
    created_at: finance_transactions.created_at,
  })

  return model;
})