import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'saturate(160%) blur(10px)',
      background: 'rgba(10,14,25,0.55)', borderBottom: '1px solid rgba(255,255,255,0.06)'
    }}>
      <div className="app-main" style={{ display: 'flex', alignItems: 'center', gap: 16, paddingTop: 12, paddingBottom: 12 }}>
        <Link to="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'white'
        }}>
          <span style={{
            width: 36, height: 36, borderRadius: 12, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(135deg, var(--color-blue), var(--color-green))', boxShadow: 'var(--shadow-md)'
          }}>S</span>
          <span style={{ fontWeight: 800, letterSpacing: 0.3 }}>Sumentor</span>
        </Link>

        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
          <NavLink to="/" end style={({ isActive }) => ({
            padding: '8px 12px', borderRadius: 10, textDecoration: 'none', color: 'white',
            background: isActive ? 'rgba(255,255,255,0.06)' : 'transparent'
          })}>Главная</NavLink>
          <NavLink to="/profile" style={({ isActive }) => ({
            padding: '8px 12px', borderRadius: 10, textDecoration: 'none', color: 'white',
            background: isActive ? 'rgba(255,255,255,0.06)' : 'transparent'
          })}>Профиль</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

