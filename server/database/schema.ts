import {
  sqliteTable,
  integer,
  real,
  text
} from "drizzle-orm/sqlite-core";

const TransactionTypes = {
  INCOME: 'income',
  EXPENSE: 'expense'
}

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  username: text('username').unique().notNull(),
  password: text('password').notNull(),
  email: text('email').unique().notNull(),
  created_at: integer('created_at', { mode: 'timestamp' }).notNull(),
});

export const finance_transactions = sqliteTable('finance_transactions', {
  id: integer('id').primaryKey(),
  user_id: integer('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  transaction_type: text('transaction_type', { enum: [...Object.values(TransactionTypes)] as [string, ...string[]]}).notNull(),
  amount: real('amount').notNull(),
  created_at: integer('created_at', { mode: 'timestamp' }).notNull(),
});

