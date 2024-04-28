import { eq } from 'drizzle-orm';

import { finance_transactions } from '@/server/database/schema';

const getAllTransactions = async (user_id: number) => {
  const db = useDataBase();
  const response = await db
    .select()
    .from(finance_transactions)
    .where(eq(finance_transactions.user_id, user_id));

  return response;
};

export default defineEventHandler(async (event) => {
  const { user_id } = getJWTData(event.context.token);
  const response = await getAllTransactions(user_id);

  return {
    data: response
  };
});
