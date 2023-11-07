/**
 * Exemplo de uso do Redux sem o Toolkit.
 * ** createStore está depreciado. **
 */
import { createStore } from 'redux'

// Define o estado inicial da aplicação.
const initialState = {
  value: 0
}

// Define um objeto de ações disponíveis na aplicação.
const actions = {
  type: {
    counter: 'incremented' || 'decremented',
  }
}

// Define um reducer, que é uma função que atualiza o estado com base nas ações recebidas.
function counterReducer(state = initialState, action = actions) {
  switch (action.type.counter) {
    case 'incremented':
      return { value: state.value + 1 }
    case 'decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

// Cria a loja Redux, passando o reducer como argumento.
const store = createStore(counterReducer)

// Registra uma função para ser chamada sempre que o estado da loja for modificado.
store.subscribe(() => console.debug(store.getState()))

// Despacha ações para atualizar o estado da loja.
store.dispatch({ type: { counter: 'incremented'} })
store.dispatch({ type: { counter: 'incremented'} })
store.dispatch({ type: { counter: 'decremented'} })
