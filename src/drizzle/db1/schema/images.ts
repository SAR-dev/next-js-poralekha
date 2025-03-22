import * as dz from "drizzle-orm/pg-core";

export const images = dz.pgTable("images", {
  id: dz.uuid().primaryKey().defaultRandom(),
  fileName: dz.text().notNull(),
  createdAt: dz.timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: dz.timestamp({ withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
})
