'use client'

import { useRef } from 'react'
import { create } from '../_actions'

const NewTodoForm = () => {
  const formRef = useRef()

  async function action(formData) {
    await create(formData)
    formRef.current.reset()
  }

  return (
    <form ref={formRef} action={action}>
      <h2 className='font-medium mb-2'>Create a New Todo</h2>
      <input
        type='text'
        name='title'
        className='border border-slate-400 px-2 py-0.5 rounded'
      />
      <button
        type='submit'
        className='ml-2 text-sm px-2 py-1 rounded bg-slate-700 text-white disabled:bg-opacity-50'
      >
        Add Todo
      </button>
    </form>
  )
}

export default NewTodoForm
