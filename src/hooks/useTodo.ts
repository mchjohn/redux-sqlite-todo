import { Keyboard } from 'react-native'
import { useCallback, useState } from 'react'

import { ITodo } from '../interfaces/todo'
import { createTodo, readTodos } from '../storage/sqlite_db'

export function useTodo() {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [todoTitle, setTodoTitle] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const fetchTodos = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await readTodos()
      setTodos(response)
    } catch (error) {
      console.error('Não foi possível buscar as tarefas ⚠️', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleAddTodo = useCallback(async (name: string) => {
    const response = await createTodo(name)

    setTodos(response)
    setTodoTitle('')
    Keyboard.dismiss()
  }, [])

  return {
    todos,
    todoTitle,
    isLoading,
    fetchTodos,
    setTodoTitle,
    handleAddTodo,
  }
}
