import React from 'react'

function Icon({ children, size = 46 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, var(--color-blue), var(--color-green))' }}>
      <span style={{ fontSize: Math.round(size * 0.48) }}>{children}</span>
    </div>
  )
}

export default Icon

