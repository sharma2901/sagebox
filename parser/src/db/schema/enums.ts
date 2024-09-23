import { pgEnum } from "drizzle-orm/pg-core";
export const planEnum = pgEnum("planEnum", [
  "regular",
  "readers-club",
  "researcher",
]);
