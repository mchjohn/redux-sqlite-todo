import { createSlice } from '@reduxjs/toolkit'

import { ITodo } from '../../../interfaces/todo'

const initialState = {
  value: {
    todo: {
      id: null,
      name: '',
      isDone: false,
    },
    todos: [] as ITodo[],
  }
}

type StateProps = typeof initialState
type ActionProps = {
  payload: ITodo;
  type: string
}

const reducers = {
  addTodo: (state: StateProps, action: ActionProps) => {
    // Save on SQLite
    state.value.todos.push(action.payload)
  },
  doneTodo: (state: StateProps) => {
    // Mark as read on SQLite
    console.debug('READ: ', state.value.todo)
  },
  removeTodo: (state: StateProps) => {
    // Remove on SQLite
    console.debug('REMOVED: ', state.value.todo)
  },
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers,
})

export const { addTodo, doneTodo, removeTodo } = todoSlice.actions

export const selectTodo = (state: StateProps) => state.value
