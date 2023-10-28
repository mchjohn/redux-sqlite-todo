import { StatusBar } from 'expo-status-bar'

import { Home } from './src/screens/Home'

import { SafeContainer } from './src/components/SafeAreaView'

export default function App() {
  return (
    <SafeContainer>
      <StatusBar style="light" />
      <Home />
    </SafeContainer>
  )
}
