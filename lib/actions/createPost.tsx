"use server"
import { revalidateTag } from "next/cache"
import prisma from "../db"

export const createPost = async ({
  title,
  content,
}: {
  title: string
  content: string
}) => {
  if (!title || !content) {
    throw new Error("Title and content are required")
  }
  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
      },
    })

    revalidateTag("posts", { expire: 0 })
    return newPost
  } catch (error) {
    console.error("Error creating post:", error)
    throw error
  }
}
