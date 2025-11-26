import prisma from "../db"
import { revalidatePath } from "next/cache"

export const deletePost = async (id: number) => {
    "use server"
    await prisma.post.delete({ where: { id } })
    revalidatePath("/")
}