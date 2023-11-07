import { createSlice, configureStore } from '@reduxjs/toolkit'

// Define o estado inicial da aplicação.
const initialState = {
  value: 0
}

// Define um tipo TypeScript para o estado inicial.
type StateProps = typeof initialState

// Define um objeto de reducers, que são funções para atualizar o estado com base nas ações.
const reducers = {
  incremented: (state: StateProps) => { state.value += 1 },
  decremented: (state: StateProps) => { state.value -= 1 },
}

// Cria um slice usando `createSlice`, que inclui automaticamente ações e um reducer.
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers,
})

// Exporta as ações geradas automaticamente pelo slice.
export const { incremented, decremented } = counterSlice.actions

// Configura a loja Redux usando o reducer gerado pelo slice.
const store = configureStore({ reducer: counterSlice.reducer })

// Registra uma função para ser chamada sempre que o estado da loja for modificado.
store.subscribe(() => console.debug(store.getState()))

// Despacha ações para atualizar o estado da loja.
store.dispatch(incremented())
store.dispatch(incremented())
store.dispatch(decremented())
