import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Experience from '../pages/Experience'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

export default function Router() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}