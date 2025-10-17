import React from 'react'
import Banner from '../components/Banner.jsx'
import CourseCard from '../components/CourseCard.jsx'
import courses from '../data/courses.js'
import { getCourseProgressPercent } from '../utils/progress.js'

function Home() {
  const [query, setQuery] = React.useState('')
  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return courses
    return courses.filter(c =>
      c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <div>
      <Banner />
      <section id="courses" style={{ display: 'grid', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <h2 style={{ margin: 0 }}>Курсы</h2>
          <div className="card" style={{ padding: 8, borderRadius: 12, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span className="muted">🔎</span>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Поиск по курсам..."
              style={{
                outline: 'none', border: 'none', background: 'transparent', color: 'var(--color-text)',
                minWidth: 220
              }}
            />
          </div>
        </div>
        <div className="grid courses">
          {filtered.map(c => (
            <CourseCard key={c.id} course={c} progress={getCourseProgressPercent(c.id)} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home

