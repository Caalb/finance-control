import { finance_transactions } from "~/server/database/schema";
import { TransactionSchema } from "~/server/validations/schemas/transactions";
import type { ICreateTransaction } from "~/server/interfaces/ITransaction";

const createTransaction = async ({ amount, transaction_type, user_id }: ICreateTransaction) => {
  const db = useDataBase();

  const [ model ] =  await db
    .insert(finance_transactions)
    .values({
      amount,
      transaction_type,
      user_id,
      created_at: new Date(),
    })
    .returning({
      id: finance_transactions.id,
      amount: finance_transactions.amount,
      transaction_type: finance_transactions.transaction_type,
      created_at: finance_transactions.created_at,
    });

  return model;
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { user_id } = getJWTData(event.context.token);

  useValidation({ schema: TransactionSchema, body })

  return createTransaction({ ...body, user_id });
})