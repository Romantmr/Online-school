import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <section className="card" style={{ padding: 24, display: 'grid', gap: 14, marginBottom: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 46, height: 46, borderRadius: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          background: 'linear-gradient(135deg, var(--color-blue), var(--color-green))' }}>🌱</div>
        <h1 style={{ margin: 0 }}>Sumentor — курсы разностороннего развития</h1>
      </div>
      <p className="muted" style={{ margin: 0, maxWidth: 780 }}>
        Навыки, гибкое мышление, творчество и продуктивность. Практические занятия и отслеживание прогресса в одном месте.
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Link to="#courses" className="button">Смотреть курсы</Link>
        <Link to="/profile" className="button secondary">Мой профиль</Link>
      </div>
    </section>
  )
}

export default Banner

