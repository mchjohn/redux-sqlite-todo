import { Keyboard } from 'react-native'
import { useCallback, useState, createContext, useContext } from 'react'

import { ITodo } from '../interfaces/todo'
import { createTodo, readTodos, updateTodo, deleteTodo } from '../storage/sqlite_db'

interface TodoContext {
  todo: {
    all: ITodo[]
    name: string
    isLoading: boolean
    fetchAll: () => Promise<void>
    setName: (name: string) => void
    handleAdd: (name: string) => Promise<void>
    handleUpdate: (todo: ITodo) => Promise<void>
    handleDelete: (todo: ITodo) => Promise<void>
  }
}

const TodoContext = createContext<TodoContext>({} as TodoContext)

export function TodoProvider({ children }: { children: React.ReactNode }) {

  const [todos, setTodos] = useState<ITodo[]>([])
  const [todoName, setTodoName] = useState('')
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

  const handleAdd = useCallback(async (name: string) => {
    const response = await createTodo(name)

    setTodos(response)
    setTodoName('')
    Keyboard.dismiss()
  }, [])

  const handleUpdate = useCallback(async (todo: ITodo) => {
    const response = await updateTodo(todo)

    setTodos(response)
  }, [])

  const handleDelete = useCallback(async (todo: ITodo) => {
    const response = await deleteTodo(todo)

    setTodos(response)
  }, [])

  return (
    <TodoContext.Provider
      value={{
        todo: {
          all: todos,
          name: todoName,
          isLoading,
          setName: setTodoName,
          fetchAll: fetchTodos,
          handleAdd,
          handleUpdate,
          handleDelete,
        }
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export function useTodoContext() {
  const context = useContext(TodoContext)

  return context
}
