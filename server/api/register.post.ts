import { users } from "../database/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const db = useDataBase();

  const result = await db.insert(users).values({
    username: body.username,
    password: body.password,
    email: body.email,
    created_at: new Date(),
  })

  return { result }
})
