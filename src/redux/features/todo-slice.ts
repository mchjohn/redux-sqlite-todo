import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ITodo } from '../../interfaces/todo'

interface TodoState {
  todo: ITodo;
  todos: ITodo[];
}

const initialState: TodoState = {
  todo: <ITodo>  {
    id: null,
    name: '',
    isDone: false,
  },
  todos: <ITodo[]> [],
}

type StateProps = typeof initialState

const reducers = {
  addTodo: (state: StateProps, action: PayloadAction<ITodo>) => {
    // Save on SQLite
    state.todos.push(action.payload)
  },
  doneTodo: (state: StateProps) => {
    // Mark as read on SQLite
    console.debug('READ: ', state.todo)
  },
  removeTodo: (state: StateProps) => {
    // Remove on SQLite
    console.debug('REMOVED: ', state.todo)
  },
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers,
})

export const todoReducer = todoSlice.reducer

export const { addTodo, doneTodo, removeTodo } = todoSlice.actions

export const selectTodo = (state: StateProps) => state.todo
export const selectTodos = (state: StateProps) => state.todos
