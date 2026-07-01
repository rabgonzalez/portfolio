import './App.css'
import { WindowProvider } from './context/WindowContext'
import WindowsContainer from './container/WindowsContainer'
import Dock from './components/Dock'
import { DOCK_APPS } from './utils'

function App() {
  return (
    <WindowProvider>
      <div id='background' />
      <Dock apps={DOCK_APPS} />
      <WindowsContainer />
    </WindowProvider>
  )
}

export default App
