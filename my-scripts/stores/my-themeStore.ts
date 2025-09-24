import { Appearance } from 'react-native'
import { create } from 'zustand'
import myTheme from '@/my-constants/my-theme'

type ThemeMode = 'light' | 'dark'

type ThemeState = {
  mode: ThemeMode
  colors: typeof myTheme.colors.light
  setMode: (mode: ThemeMode) => void
}

export const useThemeStore = create<ThemeState>((set) => {
  const mode = Appearance.getColorScheme() ?? 'light'
  return {
    mode,
    colors: myTheme.colors[mode],
    setMode: (newMode) =>
      set({ mode: newMode, colors: myTheme.colors[newMode] }),
  }
})
