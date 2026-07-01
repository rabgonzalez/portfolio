import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Experience from '../pages/Experience'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Dock from './Dock'

export default function Background() {
  return (
    <BrowserRouter>
      <Dock />
      <div id="background" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}