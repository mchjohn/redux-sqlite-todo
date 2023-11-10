import { ActivityIndicator, StyleSheet, View } from 'react-native'

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='#041E24' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})
