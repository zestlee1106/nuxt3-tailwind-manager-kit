import type { State, Theme } from '~/types/appStore'

export const useAppStore = defineStore({
  id: 'app-store',
  state: (): State => {
    return {
      theme: 'light',
    }
  },
  getters: {
    isDark: (state: State) => state.theme === 'dark',
  },
  actions: {
    changeTheme(theme: Theme) {
      this.theme = theme
      if (theme === 'dark') document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')

      localStorage.setItem('theme', theme)
    },
  },
})
