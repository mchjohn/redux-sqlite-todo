import uuid from 'react-native-uuid'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../../hooks/useSelector'

import { addTodo, selectTodos } from '../../redux/features/todo-slice'

export function useHome() {
  const todos = useAppSelector(selectTodos)
  const dispatch = useDispatch()

  const [todoTitle, setTodoTitle] = useState('')

  const handleAddTodo = () => {
    const todo = { id: uuid.v4().toString(), name: todoTitle, isDone: false }

    dispatch(addTodo(todo))
  }

  return {
    todos,
    setTodoTitle,
    handleAddTodo,
  }
}
