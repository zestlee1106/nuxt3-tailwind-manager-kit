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
    initTheme() {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      )
        this.changeTheme('dark')
      else this.changeTheme('light')
    },
    changeTheme(theme: Theme) {
      this.theme = theme
      if (theme === 'dark') document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')

      localStorage.setItem('theme', theme)
    },
  },
})
