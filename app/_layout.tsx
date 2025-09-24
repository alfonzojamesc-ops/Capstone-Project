import { Slot } from 'expo-router'
import { useEffect } from 'react'
import { Appearance } from 'react-native'
import { useThemeStore } from '@/my-scripts/stores/my-themeStore'

export default function Layout() {
  const setMode = useThemeStore((s) => s.setMode)

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setMode(colorScheme ?? 'light')
    })
    return () => listener.remove()
  }, [])

  return <Slot />
}
