import { Action, ThunkAction } from '@reduxjs/toolkit'

import { ITodo } from '../../../interfaces/todo'

import { AppDispatch, RootState } from '../../store'
import { createTodo, deleteTodo, readTodos, updateTodo } from '../../../storage/sqlite_db'
import { addTodo, fetchTodos, removeTodo, toggleTodoIsDone } from './todo-slice'

type ThunkApp = ThunkAction<void, RootState, null, Action<string>>

export function addTodoAsync(name: string): ThunkApp {
  return async function(dispatch: AppDispatch) {
    const todos = await createTodo(name)

    dispatch(addTodo(todos))
  }
}

export function fetchTodosAsync(): ThunkApp {
  return async function(dispatch: AppDispatch) {
    const todos = await readTodos()

    dispatch(fetchTodos(todos))
  }
}

export function toggleTodoIsDoneAsync(todo: ITodo): ThunkApp {
  return async function(dispatch: AppDispatch) {
    const todos = await updateTodo(todo)

    dispatch(toggleTodoIsDone(todos))
  }
}

export function removeTodoAsync(id: string): ThunkApp {
  return async function(dispatch: AppDispatch) {
    const todos = await deleteTodo(id)

    dispatch(removeTodo(todos))
  }
}
