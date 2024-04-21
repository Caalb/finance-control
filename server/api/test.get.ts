import { users } from "../database/schema";

export default defineEventHandler(async (event) => {
  const db = useDataBase();

  const result = await db.select().from(users).all()

  return {
    data: result,
    event
  }
})