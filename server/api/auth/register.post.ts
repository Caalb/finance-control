import { eq, or } from 'drizzle-orm';

import { users } from '@/server/database/schema';
import type { IRegisterUser } from '~/server/interfaces/IUser';
import { RegisterSchema } from '~/server/validations/schemas/user';

const verifyIfExistingUser = async ({ username, email }: IRegisterUser) => {
  const db = useDataBase();
  const [ model ] = await db
    .select()
    .from(users)
    .where(
      or(
        eq(users.email, email),
        eq(users.username, username)
      )
    );

  if (model) {
    throw createCustomError({
      statusCode: 422,
      errors: [t('auth.user_exists')],
    });
  }
};

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const db = useDataBase();

  await verifyIfExistingUser({ ...body });
  useValidation({ schema: RegisterSchema, body });

  const result = await db.insert(users).values({
    username: body.username,
    password: body.password,
    email: body.email,
    created_at: new Date(),
  });

  return { data: result };
});
