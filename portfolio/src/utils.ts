import { Home, Briefcase, FolderKanban, Mail } from 'lucide-react'
import Profile from './pages/Profile';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import type { DockApp } from './types';

export const DOCK_APPS: DockApp[] = [
  { appId: 'profile', icon: Home, label: 'Profile' },
  { appId: 'experience', icon: Briefcase, label: 'Experience' },
  { appId: 'projects', icon: FolderKanban, label: 'Projects' },
  { appId: 'contact', icon: Mail, label: 'Contact' },
]

export const APP_REGISTRY = {
  profile: { title: "Profile", component: Profile },
  experience: { title: "Experience", component: Experience },
  projects: { title: "Projects", component: Projects },
  contact: { title: "Contact", component: Contact },
} as const;