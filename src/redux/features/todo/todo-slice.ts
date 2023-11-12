import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ITodo } from '../../../interfaces/todo'

interface TodoState {
  todos: ITodo[];
  isLoading: boolean;
}

const initialState: TodoState = {
  todos: <ITodo[]> [],
  isLoading: true
}

const reducers = {
  addTodo: (state: TodoState, action: PayloadAction<ITodo[]>) => {
    state.todos = action.payload
  },
  fetchTodos: (state: TodoState, action: PayloadAction<ITodo[]>) => {
    state.todos = action.payload
    state.isLoading = false
  },
  toggleTodoIsDone: (state: TodoState, action: PayloadAction<ITodo[]>) => {
    state.todos = action.payload
  },
  removeTodo: (state: TodoState, action: PayloadAction<ITodo[]>) => {
    state.todos = action.payload
  },
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers,
})

export const todoReducer = todoSlice.reducer

export const { addTodo, fetchTodos, toggleTodoIsDone, removeTodo } = todoSlice.actions

export const selectTodos = (state: TodoState) => state.todos
export const selectLoading = (state: TodoState) => state.isLoading
