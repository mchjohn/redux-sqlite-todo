import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'

import { Home } from './src/screens/Home'

import { store } from './src/services/redux/stores/todoStore'

import { SafeContainer } from './src/components/SafeAreaView'

export default function App() {
  return (
    <Provider store={store}>
      <SafeContainer>
        <StatusBar style="light" />
        <Home />
      </SafeContainer>
    </Provider>
  )
}
