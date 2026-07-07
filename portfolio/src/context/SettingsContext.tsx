import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import i18n from '../i18n'

const DEFAULT_WALLPAPER = '/wallpapers/wallpaper.png'
const WALLPAPER_KEY = 'wallpaper'

interface SettingsContextType {
  wallpaper: string
  setWallpaper: (url: string) => void
  language: string
  setLanguage: (lang: string) => void
}

const SettingsContext = createContext<SettingsContextType | null>(null)

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [wallpaper, setWallpaperState] = useState(
    () => localStorage.getItem(WALLPAPER_KEY) || DEFAULT_WALLPAPER
  )
  const [language, setLanguageState] = useState('en')

  const setWallpaper = useCallback((url: string) => {
    localStorage.setItem(WALLPAPER_KEY, url)
    setWallpaperState(url)
  }, [])

  const setLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang)
    setLanguageState(lang)
  }, [])

  return (
    <SettingsContext.Provider value={{ wallpaper, setWallpaper, language, setLanguage }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const ctx = useContext(SettingsContext)
  if (!ctx) throw new Error('useSettings must be used inside SettingsProvider')
  return ctx
}