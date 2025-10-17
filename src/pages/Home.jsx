import React from 'react'
import Banner from '../components/Banner.jsx'
import CourseCard from '../components/CourseCard.jsx'
import courses from '../data/courses.js'
import { getCourseProgressPercent } from '../utils/progress.js'

function Home() {
  return (
    <div>
      <Banner />
      <section id="courses" style={{ display: 'grid', gap: 16 }}>
        <h2 style={{ margin: 0 }}>Курсы</h2>
        <div className="grid courses">
          {courses.map(c => (
            <CourseCard key={c.id} course={c} progress={getCourseProgressPercent(c.id)} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home

