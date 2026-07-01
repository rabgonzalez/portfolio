import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../utils'
export default function Dock() {
  const location = useLocation()

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex items-end gap-3 bg-white/20 backdrop-blur-xl rounded-2xl px-4 py-3 shadow-2xl border border-white/30">
        {navItems.map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to
          return (
            <li key={to} className="group relative">
              <Link
                to={to}
                className={`flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-200
                  ${isActive ? 'bg-white/40 scale-110' : 'bg-white/10 hover:bg-white/30 hover:scale-110'}
                `}
              >
                <Icon size={26} strokeWidth={1.8} className="text-white" />
              </Link>
              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black/70 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </span>
              {/* Indicador de página activa */}
              {isActive && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full" />
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}