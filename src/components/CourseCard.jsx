import React from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from './ProgressBar.jsx'
import Icon from './Icon.jsx'

function CourseCard({ course, progress = 0 }) {
  return (
    <article className="card" style={{ padding: 16, display: 'grid', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Icon size={52}>{course.icon}</Icon>
        <div>
          <h3 style={{ margin: 0 }}>{course.title}</h3>
          <div className="muted" style={{ fontSize: 14 }}>{course.level} • {course.lessons.length} уроков</div>
        </div>
      </div>
      <p className="muted" style={{ margin: 0 }}>{course.description}</p>
      <div>
        <ProgressBar value={progress} />
        <div className="muted" style={{ marginTop: 6, fontSize: 12 }}>{Math.round(progress)}% прогресса</div>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <Link to={`/course/${course.id}`} className="button">Открыть курс</Link>
        <a href="#" className="button secondary">Подробнее</a>
      </div>
    </article>
  )
}

export default CourseCard

