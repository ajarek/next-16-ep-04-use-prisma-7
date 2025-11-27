import prisma from "../db"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const updatePost = async (
  id: number,
  title: string,
  content: string
) => {
  "use server"
  await prisma.post.update({
    where: {
      id,
    },
    data: {
      title,
      content,
    },
  })
  revalidateTag("posts", "posts")
  redirect("/")
}
