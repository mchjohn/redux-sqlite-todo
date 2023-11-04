import { configureStore } from '@reduxjs/toolkit'

import { todoSlice } from '../reducers/todoReducer'

export const store = configureStore({ reducer: todoSlice.reducer })
