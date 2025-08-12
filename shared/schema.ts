import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  title: text("title").notNull(),
  avatar: text("avatar"),
  status: text("status").notNull().default("cold"),
  lastActivity: timestamp("last_activity").defaultNow(),
  engagementType: text("engagement_type"),
  engagementColor: text("engagement_color"),
});

export const sequences = pgTable("sequences", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  status: text("status").notNull().default("live"),
  active: integer("active").default(0),
  completed: integer("completed").default(0),
  totalAdded: integer("total_added").default(0),
  open: integer("open").default(0),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  lastActivity: true,
});

export const insertSequenceSchema = createInsertSchema(sequences).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Contact = typeof contacts.$inferSelect;
export type Sequence = typeof sequences.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type InsertSequence = z.infer<typeof insertSequenceSchema>;
