import { View, Text, StyleSheet } from 'react-native'
import { useThemeStore } from '@/my-scripts/stores/my-themeStore'

export default function Home() {
  const { colors, mode } = useThemeStore()
  return (
    <View style={[styles.container, { backgroundColor: colors.backgroundFill }]}>
      <Text style={[styles.text, { color: colors.textPrimary }]}>
        Theme: {mode}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 },
})
