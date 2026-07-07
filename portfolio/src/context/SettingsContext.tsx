import { createContext, useContext, useState, useCallback, type ReactNode, useEffect } from 'react'
import i18n from '../i18n'
import { languages } from '../utils'

const DEFAULT_WALLPAPER = '/wallpapers/wallpaper.png'
const WALLPAPER_KEY = 'wallpaper'
const LANGUAGE_KEY = 'language'

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


  const getWebLanguage = useCallback(() => {
    const lang = localStorage.getItem(LANGUAGE_KEY)
    if (lang) return lang

    const browserLang = navigator.language.split('-')[0]
    if (languages.some(l => l.code === browserLang)) return browserLang

    return 'en'
  }, [])

  const [language, setLanguageState] = useState<string>(getWebLanguage())


  useEffect(() => {
    setLanguage(getWebLanguage())
  }, [])

  const setWallpaper = useCallback((url: string) => {
    localStorage.setItem(WALLPAPER_KEY, url)
    setWallpaperState(url)
  }, [])

  const setLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem(LANGUAGE_KEY, lang)
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