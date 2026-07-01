import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Experience from '../pages/Experience'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Dock from './Dock'
import Profile from '../pages/Profile'

export default function Background() {
  return (
    <BrowserRouter>
      <Dock />
      <div id="background" />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}