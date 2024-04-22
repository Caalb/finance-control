import { finance_transactions } from "~/server/database/schema";
import { TransactionSchema } from "~/server/validations/schemas/transactions";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const db = useDataBase();
  const { user_id } = getJWTData(event.context.token);

  useValidation({schema: TransactionSchema, body})

  const [ model ] =  await db.insert(finance_transactions).values({
    amount: body.amount,
    transaction_type: body.transaction_type,
    user_id,
    created_at: new Date(),
  }).returning({
    id: finance_transactions.id,
    amount: finance_transactions.amount,
    transaction_type: finance_transactions.transaction_type,
    created_at: finance_transactions.created_at,
  })

  return model;
})