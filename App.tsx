import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'

import { init } from './src/storage/sqlite_db'
import { store } from './src/redux/store'

import { Home } from './src/screens/Home'

import { SafeContainer } from './src/components/SafeAreaView'

init()
  .then(() => console.log('Database initialized'))
  .catch((err) => console.log('Error initializing database', err))

export default function App() {
  return (
    <Provider store={store}>
      <SafeContainer>
        <StatusBar style="dark" />

        <Home />
      </SafeContainer>
    </Provider>
  )
}
