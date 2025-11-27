import { unstable_cache } from "next/cache"
import prisma from "../db"

export const getPosts = unstable_cache(
  async () => {
    return await prisma.post.findMany()
  },
  ["posts"],
  { tags: ["posts"] }
)
