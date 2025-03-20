"use server"

import { updateUserSessionData } from "@/auth/core/session"
import { getCurrentUser } from "@/auth/nextjs/currentUser"
import { db } from "@/drizzle/db"
import { users } from "@/drizzle/schema"
import { eq } from "drizzle-orm"
import { cookies } from "next/headers"

export async function toggleRole() {
  const user = await getCurrentUser({ redirectIfNotFound: true })

  const [updatedUser] = await db
    .update(users)
    .set({ role: user.role === "admin" ? "user" : "admin" })
    .where(eq(users.id, user.id))
    .returning({ id: users.id, role: users.role })

  await updateUserSessionData(updatedUser, await cookies())
}
