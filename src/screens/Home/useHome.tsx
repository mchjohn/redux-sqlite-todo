import { Keyboard } from 'react-native'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { useAppSelector } from '../../hooks/useSelector'

import { AppDispatch } from '../../redux/store'
import {
  selectTodos,
  addTodoAsync,
  selectLoading,
  fetchTodosAsync
} from '../../redux/features/todo'

export function useHome() {
  const todos = useAppSelector(selectTodos)
  const isLoading = useAppSelector(selectLoading)
  const dispatch = useDispatch<AppDispatch>()

  const [todoName, setTodoName] = useState('')

  const handleAddTodo = () => {
    dispatch(addTodoAsync(todoName))

    setTodoName('')
    Keyboard.dismiss()
  }

  useEffect(() => {
    dispatch(fetchTodosAsync())
  }, []) //  eslint-disable-line

  return {
    todos,
    todoName,
    isLoading,
    setTodoName,
    handleAddTodo,
  }
}
