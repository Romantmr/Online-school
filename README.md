Sumentor — Онлайн‑школа курсов разностороннего развития
=======================================================

Стек: React 18 + Vite + React Router. Деплой: Netlify.

Запуск локально не требуется. Для деплоя:

1. Создайте новый репозиторий на GitHub и запушьте этот проект.
2. В Netlify выберите «Deploy with Git», подключите репозиторий.
3. Build command: `npm run build`
4. Publish directory: `dist`

SPA роутинг настроен через `netlify.toml` с редиректом на `index.html`.

Структура
---------

- `index.html` — корневой HTML
- `vite.config.js` — конфиг сборки
- `src/` — исходный код
  - `main.jsx` — точка входа
  - `App.jsx` — маршрутизация
  - `pages/` — страницы: Home, Course, Profile
  - `components/` — UI‑компоненты
  - `styles/` — тема и базовые стили
  - `data/` — данные о курсах
  - `utils/` — утилиты прогресса (localStorage)

Лицензия: MIT

