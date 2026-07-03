import './App.css'
import { WindowProvider } from './context/WindowContext'
import WindowsContainer from './container/WindowsContainer'
import Dock from './components/Dock'
import { DOCK_APPS } from './utils'
import Apps from './components/Apps'

function App() {
  return (
    <WindowProvider>
      <div id='background' />
      <Apps apps={DOCK_APPS} />
      <Dock apps={DOCK_APPS} />
      <WindowsContainer />
    </WindowProvider>
  )
}

export default App
