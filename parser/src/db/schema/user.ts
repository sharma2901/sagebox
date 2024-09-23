import {
  pgTable,
  date,
  timestamp,
  boolean,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import Plan from "./plan";
import { planEnum } from "./enums";

const User = pgTable("user", {
  id: uuid("id").notNull().defaultRandom(),
  name: varchar("name", { length: 255 }),
  username: varchar("username", { length: 255 }),
  email: varchar("email", { length: 255 }),
  password: varchar("password", { length: 255 }),
  verified: boolean("verified").$default(() => false),
  role: varchar("role", { length: 128 })
    .$type<"reader" | "publication">()
    .default("reader"),
  plan: planEnum("plan").references(() => Plan.name),
  subscriptionStart: date("subscription-start"),
  subscriptionEnd: date("subscription-end"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export type User = typeof User.$inferSelect;
export type NewUser = typeof User.$inferInsert;
export default User;
