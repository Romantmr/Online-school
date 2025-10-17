import courses from '../data/courses.js'
export function getCourseProgressPercent(courseId) {
  try {
    const raw = window.localStorage.getItem(`sumentor:course:${courseId}:progress`)
    if (!raw) return 0
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed.completed !== 'number' || typeof parsed.total !== 'number' || parsed.total === 0) return 0
    return Math.min(100, Math.max(0, (parsed.completed / parsed.total) * 100))
  } catch {
    return 0
  }
}

export function toggleLessonComplete(courseId, lessonIndex) {
  const key = `sumentor:course:${courseId}:lesson:${lessonIndex}`
  const wasCompleted = Boolean(window.localStorage.getItem(key))
  if (wasCompleted) {
    window.localStorage.removeItem(key)
  } else {
    window.localStorage.setItem(key, '1')
  }
  recomputeCourseProgress(courseId)
  window.location.reload()
}

export function recomputeCourseProgress(courseId) {
  const prefix = `sumentor:course:${courseId}:lesson:`
  const completed = Object.keys(window.localStorage).filter(k => k.startsWith(prefix)).length
  const total = getTotalLessons(courseId)
  window.localStorage.setItem(`sumentor:course:${courseId}:progress`, JSON.stringify({ completed, total }))
}

export function resetAllProgress() {
  const keys = Object.keys(window.localStorage).filter(k => k.startsWith('sumentor:course:'))
  for (const k of keys) window.localStorage.removeItem(k)
  window.location.reload()
}

function getTotalLessons(courseId) {
  const course = courses.find(c => String(c.id) === String(courseId))
  return course ? course.lessons.length : 0
}

