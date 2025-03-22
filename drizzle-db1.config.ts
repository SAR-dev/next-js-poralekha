import { env } from "@/env/server"
import { defineConfig } from "drizzle-kit"

export default defineConfig({
  out: "./src/drizzle/db1/migrations",
  schema: "./src/drizzle/db1/schema",
  dialect: "postgresql",
  strict: true,
  verbose: true,
  dbCredentials: {
    url: env.DB1_URL!
  },
})
