import React from 'react'
import Icon from './Icon.jsx'

function PricingCard({ plan }) {
  return (
    <article className="card" style={{ padding: 18, display: 'grid', gap: 12, border: plan.highlight ? '1px solid rgba(70,209,159,0.45)' : '1px solid rgba(255,255,255,0.06)', transform: plan.highlight ? 'scale(1.02)' : 'none' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Icon size={50}><span className="icon-anim-bounce" aria-hidden>{plan.icon}</span></Icon>
          <h3 style={{ margin: 0 }}>{plan.name}</h3>
        </div>
        {plan.highlight && <span className="muted" style={{ fontSize: 12, background: 'rgba(70,209,159,0.12)', padding: '6px 10px', borderRadius: 999 }}>Популярный</span>}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <div style={{ fontSize: 28, fontWeight: 800 }}>{plan.price}</div>
        <div className="muted">{plan.period}</div>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
        {plan.features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="icon-anim-pulse" aria-hidden>✔️</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button className="button" style={{ width: '100%' }}>{plan.cta}</button>
    </article>
  )
}

export default PricingCard

