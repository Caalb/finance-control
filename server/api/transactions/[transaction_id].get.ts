import { and, eq } from "drizzle-orm";
import { finance_transactions } from "~/server/database/schema";
import type { ITransactionOperations } from "~/server/interfaces/ITransaction";

const getTransaction = async ({ transaction_id, user_id }: ITransactionOperations) => {
  const db = useDataBase();
  const [ model ] = await db.select().from(finance_transactions).where(
    and(
      eq(finance_transactions.user_id, user_id),
      eq(finance_transactions.id, Number(transaction_id))
    )
  )

  return model;
}

export default eventHandler(async (event) => {
  const transaction_id = getRouterParam(event, 'transaction_id')
  const { user_id } = getJWTData(event.context.token);

  if(! transaction_id) {
    return createCustomError({ statusCode: 400 })
  }

  const model = await getTransaction({transaction_id, user_id});

  if(! model) {
    return createCustomError({ statusCode: 404 })
  }

  return model;
})

