import React from 'react'

function ProgressBar({ value = 0 }) {
  const percent = Math.min(100, Math.max(0, Math.round(value)))
  return (
    <div style={{ height: 10, borderRadius: 999, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${percent}%`, background: 'linear-gradient(90deg, var(--color-green), var(--color-blue))' }} />
    </div>
  )
}

export default ProgressBar

