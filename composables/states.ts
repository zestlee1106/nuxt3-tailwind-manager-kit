export const useTheme = () =>
  useState<boolean>(
    'counter',
    () =>
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
