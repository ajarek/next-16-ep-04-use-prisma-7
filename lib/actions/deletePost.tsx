import prisma from "../db"
import { revalidateTag } from "next/cache"

export const deletePost = async (id: number) => {
  "use server"
  await prisma.post.delete({ where: { id } })
  revalidateTag("posts", { expire: 0 })
}
