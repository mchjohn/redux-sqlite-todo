import { PropsWithChildren } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

export function SafeContainer({ children }: PropsWithChildren) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000814',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
})
