import { varchar, pgTable, integer, json, uuid } from "drizzle-orm/pg-core";

import User from "./user";

const Mail = pgTable("mail", {
  userId: uuid("id")
    .references(() => User.id)
    .notNull(),
  to: varchar("to")
    .references(() => User.username)
    .notNull(),
  subject: varchar("subject", { length: 255 }),
  from: varchar("from", { length: 255 }),
  spf: varchar("spf", { length: 128 }).$type<"pass" | "fail">(),
  senderIp: varchar("sender_ip", { length: 255 }),
  noOfAttachments: integer("no_of_attachments"),
  attachmentInfo: json("attachment-info"),
});

export type Mail = typeof Mail.$inferSelect;
export type NewMail = typeof Mail.$inferInsert;
export default Mail;
