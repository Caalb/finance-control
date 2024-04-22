import { finance_transactions } from "@/server/database/schema"
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const db = useDataBase();
  const { user_id } = getJWTData(event.context.token);

  const result = await db.select().from(finance_transactions).where(eq(finance_transactions.user_id, user_id))
  return { data: result }
})