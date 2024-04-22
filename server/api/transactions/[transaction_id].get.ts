import { and, eq } from "drizzle-orm";
import { finance_transactions } from "~/server/database/schema";

export default eventHandler(async (event) => {
  const transaction_id = getRouterParam(event, 'transaction_id')
  const db = useDataBase();
  const { user_id } = getJWTData(event.context.token);

  const [ model ] = await db.select().from(finance_transactions).where(
    and(
      eq(finance_transactions.user_id, user_id),
      eq(finance_transactions.id, Number(transaction_id))
    )
  )

  return model;
})

