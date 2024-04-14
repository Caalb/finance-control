import {
  sqliteTable,
  integer,
  text
} from "drizzle-orm/sqlite-core";

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  username: text('username').unique().notNull(),
  password: text('password').notNull(),
  email: text('email').unique().notNull(),
  created_at: integer('created_at', { mode: 'timestamp' }).notNull(),
});