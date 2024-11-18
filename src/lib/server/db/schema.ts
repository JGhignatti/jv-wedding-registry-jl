import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
  name: text('name'),
});

// type User = typeof user.$inferSelect;

export const item = pgTable('item', {
  id: serial('id').primaryKey(),
  imageUrl: text('imageUrl').notNull(),
  name: text('name').notNull(),
});

export type Item = typeof item.$inferSelect;
