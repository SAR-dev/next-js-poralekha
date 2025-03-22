import * as dz from "drizzle-orm/pg-core";
import { users } from "./users";
import { images } from "./images";

export const organizations = dz.pgTable("organizations", {
  id: dz.uuid().primaryKey().defaultRandom(),
  name: dz.text().notNull(),
  logoId: dz.uuid().references(() => images.id, {onDelete: 'set null'}),
  coverId: dz.uuid().references(() => images.id, {onDelete: 'set null'}),
  ownerId: dz.uuid().notNull().references(() => users.id, {onDelete: 'set null'}),
  createdAt: dz.timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: dz.timestamp({ withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
})
