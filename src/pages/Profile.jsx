import React from 'react'
import courses from '../data/courses.js'
import { getCourseProgressPercent, resetAllProgress } from '../utils/progress.js'

function Profile() {
  const completedCourses = courses.filter(c => getCourseProgressPercent(c.id) >= 100)
  const totalProgress = Math.round(
    courses.reduce((acc, c) => acc + getCourseProgressPercent(c.id), 0) / Math.max(courses.length, 1)
  )

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <section className="card" style={{ padding: 20, display: 'grid', gap: 8 }}>
        <h1 style={{ margin: 0 }}>Мой профиль</h1>
        <div className="muted" style={{ fontSize: 14 }}>Средний прогресс по всем курсам: {totalProgress}%</div>
        <button className="button secondary" onClick={resetAllProgress}>Сбросить прогресс</button>
      </section>

      <section className="card" style={{ padding: 20, display: 'grid', gap: 10 }}>
        <h2 style={{ margin: 0 }}>Завершенные курсы</h2>
        {completedCourses.length === 0 ? (
          <div className="muted">Пока нет завершенных курсов.</div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
            {completedCourses.map(c => (
              <li key={c.id} className="card" style={{ padding: 12, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 12, background: 'linear-gradient(135deg, var(--color-blue), var(--color-green))', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{c.icon}</div>
                  <div style={{ fontWeight: 600 }}>{c.title}</div>
                </div>
                <div className="muted">100%</div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default Profile

