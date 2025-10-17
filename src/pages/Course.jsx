import React from 'react'
import { useParams } from 'react-router-dom'
import courses from '../data/courses.js'
import { getCourseProgressPercent, toggleLessonComplete } from '../utils/progress.js'
import ProgressBar from '../components/ProgressBar.jsx'

function Course() {
  const { id } = useParams()
  const course = courses.find(c => String(c.id) === String(id))

  if (!course) {
    return <div className="card" style={{ padding: 20 }}>Курс не найден.</div>
  }

  const progress = getCourseProgressPercent(course.id)

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <section className="card" style={{ padding: 20, display: 'grid', gap: 8 }}>
        <h1 style={{ margin: 0 }}>{course.title}</h1>
        <div className="muted">{course.level} • {course.lessons.length} уроков</div>
        <ProgressBar value={progress} />
        <div className="muted" style={{ fontSize: 14 }}>{Math.round(progress)}% прогресса</div>
      </section>

      <section className="card" style={{ padding: 20, display: 'grid', gap: 12 }}>
        <h2 style={{ margin: 0 }}>Уроки</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
          {course.lessons.map((lesson, idx) => {
            const completed = Boolean(window.localStorage.getItem(`sumentor:course:${course.id}:lesson:${idx}`))
            return (
              <li key={idx} className="card" style={{ padding: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ width: 34, height: 34, borderRadius: 12, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.06)' }}>{idx + 1}</span>
                  <div>
                    <div style={{ fontWeight: 600 }}>{lesson.title}</div>
                    <div className="muted" style={{ fontSize: 13 }}>{lesson.duration} мин</div>
                  </div>
                </div>
                <button className={`button ${completed ? 'secondary' : ''}`} onClick={() => toggleLessonComplete(course.id, idx)}>
                  {completed ? 'Сбросить' : 'Завершить'}
                </button>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default Course

