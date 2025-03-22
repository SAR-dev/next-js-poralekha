import * as dz from "drizzle-orm/pg-core";

export const userRoles = ["admin", "user"] as const
export type UserRole = (typeof userRoles)[number]
export const userRoleEnum = dz.pgEnum("user_roles", userRoles)

export const users = dz.pgTable("users", {
  id: dz.uuid().primaryKey().defaultRandom(),
  name: dz.text().notNull(),
  email: dz.text().notNull().unique(),
  password: dz.text(),
  salt: dz.text(),
  role: userRoleEnum().notNull().default("user"),
  createdAt: dz.timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: dz.timestamp({ withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
})
