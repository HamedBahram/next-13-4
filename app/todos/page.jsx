import Link from 'next/link'
import NewTodoForm from '../components/NewTodoForm'
import { getAllTodos } from '@/lib/mongo/todos'

export const dynamic = 'force-dynamic'

const Page = async () => {
  const { todos } = await getAllTodos()

  return (
    <section className='py-20'>
      <div className='container'>
        <h1 className='text-3xl font-bold mb-10 bg-slate-100 w-fit px-2 text-slate-800'>
          Todos
        </h1>

        <NewTodoForm />

        <h2 className='text-xl font-semibold mt-10 border-b pb-2'>
          Previous todos:
        </h2>
        <ul className='mt-4 flex flex-col gap-1'>
          {todos?.map(todo => (
            <li key={todo._id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Page
