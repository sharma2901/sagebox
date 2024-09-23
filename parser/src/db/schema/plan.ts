import { pgTable, integer, numeric } from "drizzle-orm/pg-core";
import { planEnum } from "./enums";
const Plan = pgTable("plan", {
  name: planEnum("name").unique(),
  maxSubscription: integer("max-subscription"),
  price: numeric("price"),
});

export type Plan = typeof Plan.$inferSelect;
export type NewPlan = typeof Plan.$inferInsert;
export default Plan;
