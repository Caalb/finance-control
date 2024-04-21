import { users } from "@/server/database/schema";
import { eq, or } from "drizzle-orm";
import { RegisterSchema } from "~/server/validations/schemas/register";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const db = useDataBase();

  const existingUser = await db.select().from(users).where(
    or(
      eq(users.email, body.email),
      eq(users.username, body.username)
    )
  )

  if (existingUser.length > 0) {
    return createCustomError({
      statusCode: 400,
      errors: ["User already exists"]
    })
  }

  useValidation({ schema: RegisterSchema, body })  

  const result = await db.insert(users).values({
    username: body.username,
    password: body.password,
    email: body.email,
    created_at: new Date(),
  })

  return { data: result }
})
