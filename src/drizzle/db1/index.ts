import { env } from "@/env/server"
import { drizzle } from "drizzle-orm/node-postgres"
import * as schema from "./schema"

export const db1 = drizzle({
  schema,
  connection: {
    url: env.DB1_URL
  },
})
