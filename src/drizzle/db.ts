import { env } from "@/data/env/server"
import { drizzle } from "drizzle-orm/node-postgres"
import * as schema from "./schema"

export const db = drizzle({
  schema,
  connection: {
    url: env.POSTGRES_URL
  },
})
