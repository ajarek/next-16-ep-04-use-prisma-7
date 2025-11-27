import prisma from "../db"

export const getPosts = async () => {
  return await prisma.post.findMany()
}
