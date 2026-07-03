import './App.css'
import { WindowProvider } from './context/WindowContext'
import WindowsContainer from './components/WindowsContainer'
import Dock from './components/Dock'
import { APPS, DOCK_APPS } from './utils'
import Apps from './components/Apps'
import { SettingsProvider } from './context/SettingsContext'
import Background from './components/Background'

function App() {
  return (
    <SettingsProvider>
      <WindowProvider>
        <Background />
        <Apps apps={APPS} />
        <Dock apps={DOCK_APPS} />
        <WindowsContainer />
      </WindowProvider>
    </SettingsProvider>

  )
}

export default App
