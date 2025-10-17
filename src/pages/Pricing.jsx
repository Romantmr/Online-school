import React from 'react'
import PricingCard from '../components/PricingCard.jsx'

const plans = [
  {
    id: 'starter',
    name: 'Старт',
    icon: '✨',
    price: '0 ₽',
    period: 'навсегда',
    features: [
      'Доступ к бесплатным урокам',
      'Базовый прогресс‑трекер',
      'Поддержка по email'
    ],
    cta: 'Начать бесплатно'
  },
  {
    id: 'growth',
    name: 'Рост',
    icon: '🚀',
    price: '690 ₽',
    period: 'в месяц',
    features: [
      'Все курсы Sumentor',
      'Продвинутые отчеты прогресса',
      'Групповые разборы 2×/мес'
    ],
    highlight: true,
    cta: 'Выбрать тариф'
  },
  {
    id: 'pro',
    name: 'Мастер',
    icon: '🏆',
    price: '1490 ₽',
    period: 'в месяц',
    features: [
      'Персональный наставник',
      'Индивидуальный план развития',
      'Приоритетная поддержка'
    ],
    cta: 'Стать мастером'
  }
]

function Pricing() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <section className="card" style={{ padding: 24, display: 'grid', gap: 8 }}>
        <h1 style={{ margin: 0 }}>Тарифы Sumentor</h1>
        <div className="muted">Выберите план, подходящий под ваши цели развития.</div>
      </section>

      <section style={{ display: 'grid', gap: 16 }}>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {plans.map(p => (
            <PricingCard key={p.id} plan={p} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Pricing

