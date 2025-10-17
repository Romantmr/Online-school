import React from 'react'

function Footer() {
  return (
    <footer style={{ padding: '24px 20px', marginTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(10,14,25,0.35)' }}>
      <div className="app-main" style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center' }}>
        <div className="muted">© {new Date().getFullYear()} Sumentor</div>
        <div style={{ display: 'flex', gap: 14 }}>
          <a className="muted" href="#" aria-label="Политика конфиденциальности">Политика</a>
          <a className="muted" href="#" aria-label="Условия использования">Условия</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

