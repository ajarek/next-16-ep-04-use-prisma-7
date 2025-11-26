import ButtonDelete from "@/components/button-delete"
import { createPost } from "@/lib/actions/createPost"
import prisma from "@/lib/db"

export default async function Home() {
  const posts = await prisma.post.findMany()
  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <form
        action={async (formData) => {
          "use server"
          await createPost({
            title: formData.get("title") as string,
            content: formData.get("content") as string,
          })
        }}
        className="flex flex-col gap-2 mb-4" 
      >
        <input type='text' className="border border-gray-300 rounded px-2 py-1 mb-2" placeholder="Title" name='title' />
        <textarea className="border border-gray-300 rounded px-2 py-1 mb-2" placeholder="Content" name='content' />
        <button type='submit' className="bg-blue-500 text-white px-2 py-1 cursor-pointer">Create Post</button>
      </form>

      <ul>
        {posts.map((p) => (
          <li key={p.id} className="mb-2 border-b pb-2">
            <strong>{p.title}</strong>
            <p>{p.content}</p>
            <button type='button' className="cursor-pointer text-blue-500 px-2 py-1 ml-2">Edit</button>
            <ButtonDelete id={p.id} />
          </li>
        ))}
      </ul>
    </main>
  )
}
