import { createPost } from "../lib/actions/createPost"

interface FormPostProps {
  submitAction?: (formData: FormData) => Promise<void>
  initialData?: {
    title: string
    content: string
  }
}

const FormPost = ({ submitAction, initialData }: FormPostProps) => {
  const action =
    submitAction ||
    (async (formData: FormData) => {
      "use server"
      await createPost({
        title: formData.get("title") as string,
        content: formData.get("content") as string,
      })
    })

  return (
    <form action={action} className='flex flex-col gap-2 mb-4'>
      <input
        type='text'
        className='border border-gray-300 rounded px-2 py-1 mb-2'
        placeholder='Title'
        name='title'
        defaultValue={initialData?.title}
      />
      <textarea
        className='border border-gray-300 rounded px-2 py-1 mb-2'
        placeholder='Content'
        name='content'
        defaultValue={initialData?.content}
      />
      <button
        type='submit'
        className='bg-blue-500 text-white px-2 py-1 cursor-pointer'
      >
        {initialData ? "Update" : "Create"} Post
      </button>
    </form>
  )
}

export default FormPost
