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

// Define os reducers que serão usados para atualizar o estado do Redux
const reducers = {
  addTodo: (state: TodoState, action: PayloadAction<ITodo>) => {
    state.todos.push(action.payload)
  },
  doneTodo: (state: TodoState) => {
    console.debug('READ: ', state.todo)
  },
  removeTodo: (state: TodoState) => {
    console.debug('REMOVED: ', state.todo)
  },
}

// Cria um slice do Redux chamado "todoSlice" que combina o state, reducers e actions
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers,
})

// Exporta o reducer gerado pelo slice
export const todoReducer = todoSlice.reducer

// Exporta as actions geradas pelo slice
export const { addTodo, doneTodo, removeTodo } = todoSlice.actions

// Seleciona o item de todo atual no estado
export const selectTodo = (state: TodoState) => state.todo
// Seleciona a lista de todos no estado
export const selectTodos = (state: TodoState) => state.todos
