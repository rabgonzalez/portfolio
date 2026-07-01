import { Home as HomeIcon, Briefcase, FolderKanban, Mail } from 'lucide-react'

export const navItems = [
  { to: '/profile', icon: HomeIcon, label: 'Profile' },
  { to: '/experience', icon: Briefcase, label: 'Experience' },
  { to: '/projects', icon: FolderKanban, label: 'Projects' },
  { to: '/contact', icon: Mail, label: 'Contact' },
]