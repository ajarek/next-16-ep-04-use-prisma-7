import ButtonDelete from "@/components/button-delete"
import FormPost from "@/components/form-post"
import { getPosts } from "@/lib/actions/getPosts"
import Link from "next/link"

export default async function Home() {
  const posts = await getPosts()
  return (
    <main className='p-4 max-w-2xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Posts</h1>
      <FormPost />

      <ul>
        {posts.map((p) => (
          <li
            key={p.id}
            className='flex items-center justify-between gap-4 border-2 p-2'
          >
            <strong>{p.title}</strong>
            <p>{p.content}</p>
            <div className='flex gap-2'>
              <Link
                href={`/edit/${p.id}`}
                className='cursor-pointer text-blue-500 px-2 py-1 ml-2'
              >
                Edit
              </Link>
              <ButtonDelete id={p.id} />
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
