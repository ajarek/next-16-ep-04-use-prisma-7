import { deletePost } from "@/lib/actions/deletePost"

const ButtonDelete = async ({ id }: { id: number }) => {
  return (
    <form
      action={async (formData) => {
        "use server"
        await deletePost(Number(formData.get("id")))
      }}
    >
      <input type='hidden' name='id' value={id} />
      <button
        type='submit'
        className='cursor-pointer text-red-500 px-2 py-1 ml-2'
      >
        Delete
      </button>
    </form>
  )
}

export default ButtonDelete
