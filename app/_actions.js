'use server'

import { createTodo } from '@/lib/mongo/todos'
import { revalidatePath } from 'next/cache'

export async function create(formData) {
  const title = formData.get('title')
  await createTodo(title)
  revalidatePath('/todos')
}
