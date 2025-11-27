import prisma from "@/lib/db"
import FormPost from "@/components/form-post"
import { updatePost } from "@/lib/actions/updatePost"
import Link from "next/link"

const EditPost = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
  })

  if (!post) {
    return <div>Post not found</div>
  }

  const updateAction = async (formData: FormData) => {
    "use server"
    await updatePost(
      post.id,
      formData.get("title") as string,
      formData.get("content") as string
    )
  }

  return (
    <div className='max-w-2xl mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Edit Post</h1>
      <Link href='/' className='text-blue-500 hover:underline'>
        Back to posts
      </Link>
      <FormPost
        submitAction={updateAction}
        initialData={{ title: post.title, content: post.content }}
      />
    </div>
  )
}

export default EditPost
