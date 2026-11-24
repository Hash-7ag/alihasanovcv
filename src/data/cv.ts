// Single source of truth for the CV. Shared facts live in `profile`;
// everything a visitor reads is in `copy`, one complete object per language.

export const languages = ['en', 'ru', 'az'] as const
export type Lang = (typeof languages)[number]

export const languageNames: Record<Lang, string> = { en: 'English', ru: 'Русский', az: 'Azərbaycanca' }
export const pathFor = (lang: Lang) => (lang === 'en' ? '/' : `/${lang}/`)

export const profile = {
  email: '00alihasanov00@gmail.com',
  phone: { href: 'tel:+994771717355', label: '+994 77 171 73 55' },
  portfolio: 'https://alihasanovdev.com/',
  links: [
    { icon: 'github', label: 'GitHub', href: 'https://github.com/Hash-7ag' },
    { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/ali-hasan0v-dev/' },
    { icon: 'send', label: 'Telegram', href: 'https://t.me/alihasanovdev' },
  ],
  telegram: 'https://t.me/alihasanovdev',
  role: 'Full-Stack Developer & Web Designer',
  school: 'Mədəniyyət və Sənətkarlıq üzrə Bakı Dövlət Peşə Təhsil Mərkəzi',
} as const

export type IconName =
  | 'arrow-right' | 'arrow-up' | 'external-link' | 'download' | 'mail' | 'send' | 'phone'
  | 'map-pin' | 'github' | 'linkedin' | 'sun' | 'moon' | 'menu'
  | 'graduation' | 'briefcase' | 'globe'

export const skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'SASS'],
  state: ['Redux Toolkit', 'Zustand', 'TanStack Query'],
  backend: ['Node.js', 'Express', 'MongoDB'],
  motion: ['GSAP', 'ScrollTrigger', 'SplitText', 'DrawSVG', 'ScrambleText', 'Lenis'],
  tools: ['Git', 'Vite', 'Figma'],
}

const projectMeta = {
  portfolio: {
    url: 'https://alihasanovdev.com/',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'GSAP', 'Lenis'],
  },
  mentor: {
    url: 'https://mwellime-portfolio-design.netlify.app/',
    stack: ['Vite', 'JavaScript', 'Tailwind CSS', 'Netlify Functions', 'Google Calendar API'],
  },
}

type Copy = {
  name: string
  meta: { title: string; description: string }
  a11y: { skip: string; home: string; nav: string; language: string; menu: string; toLight: string; toDark: string; portrait: string }
  nav: { about: string; skills: string; projects: string; education: string; contact: string }
  hero: { intro: string; contact: string; pdf: string }
  facts: { label: string; value: string; icon: IconName }[]
  about: { title: string; lead: string; text: string }
  skills: { title: string; groups: { title: string; items: readonly string[] }[] }
  projects: { title: string; items: { title: string; role: string; url: string; link: string; stack: readonly string[]; results: string[] }[] }
  education: { title: string; field: string; period: string }
  spoken: { title: string; items: { name: string; level: string; score: number }[] }
  contact: { eyebrow: string; title: string; text: string; email: string; telegram: string }
  footer: { top: string; tagline: string }
}

export const copy: Record<Lang, Copy> = {
  en: {
    name: 'Ali Hasanov',
    meta: {
      title: 'Ali Hasanov — Full-Stack Developer & Web Designer',
      description: 'Ali Hasanov — full-stack web developer and web designer in Baku. React, Next.js, TypeScript, UI/UX design, projects and contact details.',
    },
    a11y: {
      skip: 'Skip to content', home: 'Ali Hasanov — home', nav: 'Sections', language: 'Language', menu: 'Menu',
      toLight: 'Switch to light theme', toDark: 'Switch to dark theme', portrait: 'Portrait of Ali Hasanov',
    },
    nav: { about: 'About', skills: 'Skills', projects: 'Projects', education: 'Education', contact: 'Contact' },
    hero: {
      intro: 'I take websites from UI/UX design to a working product with React, Next.js and TypeScript.',
      contact: 'Get in touch',
      pdf: 'Save as PDF',
    },
    facts: [
      { icon: 'map-pin', label: 'Location', value: 'Baku, Azerbaijan' },
      { icon: 'globe', label: 'Work format', value: 'Remote · Hybrid in Baku' },
      { icon: 'briefcase', label: 'Employment', value: 'Full-time · Project-based' },
      { icon: 'graduation', label: 'Graduating', value: 'June 2027' },
    ],
    about: {
      title: 'About',
      lead: 'Full-stack web developer and web designer based in Baku.',
      text: 'I build responsive websites and web interfaces with React, Next.js and TypeScript. I combine UI/UX design in Figma with interface development, animation and deployment. I work on landing pages, personal and business websites; my wider stack also includes Node.js, Express and MongoDB.',
    },
    skills: {
      title: 'Skills',
      groups: [
        { title: 'Frontend', items: skills.frontend },
        { title: 'State & data', items: skills.state },
        { title: 'Backend', items: skills.backend },
        { title: 'Animation', items: skills.motion },
        { title: 'Tools & design', items: [...skills.tools, 'UI/UX design'] },
      ],
    },
    projects: {
      title: 'Selected projects',
      items: [
        {
          ...projectMeta.portfolio,
          title: 'Personal portfolio',
          role: 'Design & frontend development',
          link: 'Open portfolio',
          results: [
            'Built a responsive site in English, Russian and Azerbaijani with visitor language detection and a saved preference.',
            'Designed a shared page structure and a typed content model for projects and translations.',
            'Implemented light and dark themes, interactive animation and lighter effects for touch devices and reduced motion.',
            'Configured server rendering, localised metadata, canonical URLs, hreflang, Open Graph, sitemap and robots.txt.',
            'Set up Netlify deployment with automated GitHub Actions checks for routes and metadata.',
          ],
        },
        {
          ...projectMeta.mentor,
          title: 'Teacher-mentor website',
          role: 'Design mockup & development',
          link: 'View demo',
          results: [
            'Created a classic-modern landing page with a custom palette, logo and slogans.',
            "Integrated the Google Calendar API to show seminars, webinars and trainings straight from the owner's calendar.",
            'Showed availability of paid services automatically, based on calendar entries.',
          ],
        },
      ],
    },
    education: { title: 'Education', field: 'Web Design and Software', period: 'Sep 2023 — Jun 2027 (expected)' },
    spoken: {
      title: 'Languages',
      items: [
        { name: 'Azerbaijani', level: 'Fluent', score: 5 },
        { name: 'Russian', level: 'Fluent', score: 5 },
        { name: 'English', level: 'Intermediate · B1–B2', score: 3 },
      ],
    },
    contact: {
      eyebrow: 'Next step',
      title: "Let's work together",
      text: 'Write to me about a role or your project.',
      email: 'Send an email',
      telegram: 'Message on Telegram',
    },
    footer: { top: 'Back to top', tagline: 'Full-stack & web design · Baku' },
  },

  ru: {
    name: 'Али Гасанов',
    meta: {
      title: 'Али Гасанов — Full-Stack разработчик и веб-дизайнер',
      description: 'Али Гасанов — full-stack веб-разработчик и веб-дизайнер из Баку. React, Next.js, TypeScript, UI/UX-дизайн, проекты и контакты.',
    },
    a11y: {
      skip: 'Перейти к содержимому', home: 'Али Гасанов — главная', nav: 'Разделы', language: 'Язык', menu: 'Меню',
      toLight: 'Включить светлую тему', toDark: 'Включить тёмную тему', portrait: 'Портрет Али Гасанова',
    },
    nav: { about: 'Обо мне', skills: 'Навыки', projects: 'Проекты', education: 'Образование', contact: 'Контакты' },
    hero: {
      intro: 'Веду сайты от UI/UX-дизайна до работающего продукта на React, Next.js и TypeScript.',
      contact: 'Связаться',
      pdf: 'Сохранить в PDF',
    },
    facts: [
      { icon: 'map-pin', label: 'Город', value: 'Баку, Азербайджан' },
      { icon: 'globe', label: 'Формат', value: 'Удалённо · Гибрид в Баку' },
      { icon: 'briefcase', label: 'Занятость', value: 'Полная · Проектная' },
      { icon: 'graduation', label: 'Выпуск', value: 'Июнь 2027' },
    ],
    about: {
      title: 'Обо мне',
      lead: 'Full-stack веб-разработчик и веб-дизайнер из Баку.',
      text: 'Создаю адаптивные сайты и веб-интерфейсы на React, Next.js и TypeScript. Совмещаю UI/UX-дизайн в Figma с разработкой интерфейсов, анимациями и публикацией проектов. Работаю с лендингами, персональными и бизнес-сайтами; в стеке также Node.js, Express и MongoDB.',
    },
    skills: {
      title: 'Навыки',
      groups: [
        { title: 'Frontend', items: skills.frontend },
        { title: 'Состояние и данные', items: skills.state },
        { title: 'Backend', items: skills.backend },
        { title: 'Анимации', items: skills.motion },
        { title: 'Инструменты и дизайн', items: [...skills.tools, 'UI/UX-дизайн'] },
      ],
    },
    projects: {
      title: 'Избранные проекты',
      items: [
        {
          ...projectMeta.portfolio,
          title: 'Персональное портфолио',
          role: 'Дизайн и frontend-разработка',
          link: 'Открыть портфолио',
          results: [
            'Разработал адаптивный сайт на английском, русском и азербайджанском с определением языка посетителя и сохранением выбора.',
            'Спроектировал общую структуру страниц и типизированную модель контента для проектов и переводов.',
            'Реализовал светлую и тёмную темы, интерактивные анимации и облегчённые эффекты для сенсорных устройств и reduced motion.',
            'Настроил серверный рендеринг, локализованные метаданные, canonical, hreflang, Open Graph, sitemap и robots.txt.',
            'Настроил публикацию на Netlify и автоматические проверки маршрутов и метаданных в GitHub Actions.',
          ],
        },
        {
          ...projectMeta.mentor,
          title: 'Сайт педагога-ментора',
          role: 'Дизайн-макет и разработка',
          link: 'Посмотреть демо',
          results: [
            'Создал лендинг в классическом современном стиле с индивидуальной палитрой, логотипом и слоганами.',
            'Интегрировал Google Calendar API: семинары, вебинары и тренинги подтягиваются из календаря владельца.',
            'Реализовал автоматическое отображение доступности платных услуг по записям в календаре.',
          ],
        },
      ],
    },
    education: { title: 'Образование', field: 'Веб-дизайн и программное обеспечение', period: 'Сентябрь 2023 — июнь 2027 (ожидается)' },
    spoken: {
      title: 'Языки',
      items: [
        { name: 'Азербайджанский', level: 'Свободно', score: 5 },
        { name: 'Русский', level: 'Свободно', score: 5 },
        { name: 'Английский', level: 'Средний · B1–B2', score: 3 },
      ],
    },
    contact: {
      eyebrow: 'Следующий шаг',
      title: 'Давайте поработаем вместе',
      text: 'Напишите мне о вакансии или вашем проекте.',
      email: 'Написать на почту',
      telegram: 'Написать в Telegram',
    },
    footer: { top: 'Наверх', tagline: 'Full-stack и веб-дизайн · Баку' },
  },

  az: {
    name: 'Əli Həsənov',
    meta: {
      title: 'Əli Həsənov — Full-Stack proqramçı və veb dizayner',
      description: 'Əli Həsənov — Bakıda full-stack veb proqramçı və veb dizayner. React, Next.js, TypeScript, UI/UX dizaynı, layihələr və əlaqə.',
    },
    a11y: {
      skip: 'Məzmuna keç', home: 'Əli Həsənov — ana səhifə', nav: 'Bölmələr', language: 'Dil', menu: 'Menyu',
      toLight: 'Açıq mövzunu aktiv et', toDark: 'Tünd mövzunu aktiv et', portrait: 'Əli Həsənovun portreti',
    },
    nav: { about: 'Haqqımda', skills: 'Bacarıqlar', projects: 'Layihələr', education: 'Təhsil', contact: 'Əlaqə' },
    hero: {
      intro: 'Saytları UI/UX dizaynından işlək məhsula qədər React, Next.js və TypeScript ilə hazırlayıram.',
      contact: 'Əlaqə saxla',
      pdf: 'PDF kimi saxla',
    },
    facts: [
      { icon: 'map-pin', label: 'Şəhər', value: 'Bakı, Azərbaycan' },
      { icon: 'globe', label: 'İş formatı', value: 'Uzaqdan · Bakıda hibrid' },
      { icon: 'briefcase', label: 'Məşğulluq', value: 'Tam ştat · Layihə əsaslı' },
      { icon: 'graduation', label: 'Məzuniyyət', value: 'İyun 2027' },
    ],
    about: {
      title: 'Haqqımda',
      lead: 'Bakıda fəaliyyət göstərən full-stack veb proqramçı və veb dizaynerəm.',
      text: 'React, Next.js və TypeScript ilə adaptiv saytlar və veb interfeyslər hazırlayıram. Figma-da UI/UX dizaynını interfeys proqramlaşdırması, animasiyalar və layihələrin yayımı ilə birləşdirirəm. Landing səhifələr, şəxsi və biznes saytları üzərində işləyirəm; texnologiya dəstimə Node.js, Express və MongoDB də daxildir.',
    },
    skills: {
      title: 'Bacarıqlar',
      groups: [
        { title: 'Frontend', items: skills.frontend },
        { title: 'Vəziyyət və məlumatlar', items: skills.state },
        { title: 'Backend', items: skills.backend },
        { title: 'Animasiyalar', items: skills.motion },
        { title: 'Alətlər və dizayn', items: [...skills.tools, 'UI/UX dizaynı'] },
      ],
    },
    projects: {
      title: 'Seçilmiş layihələr',
      items: [
        {
          ...projectMeta.portfolio,
          title: 'Şəxsi portfolio',
          role: 'Dizayn və frontend proqramlaşdırma',
          link: 'Portfolionu aç',
          results: [
            'İngilis, rus və Azərbaycan dillərində adaptiv sayt hazırladım; ziyarətçinin dili müəyyənləşdirilir və seçim yadda saxlanılır.',
            'Səhifələr üçün ortaq struktur, layihələr və tərcümələr üçün tipləşdirilmiş məzmun modeli qurdum.',
            'Açıq və tünd mövzular, interaktiv animasiyalar, toxunma ekranları və azaldılmış hərəkət üçün yüngül effektlər hazırladım.',
            'Server renderini, lokallaşdırılmış metaməlumatları, canonical, hreflang, Open Graph, sitemap və robots.txt konfiqurasiya etdim.',
            'Netlify-da yayımı və GitHub Actions ilə marşrut və metaməlumat yoxlamalarını qurdum.',
          ],
        },
        {
          ...projectMeta.mentor,
          title: 'Müəllim-mentorun saytı',
          role: 'Dizayn maketi və proqramlaşdırma',
          link: 'Demoya bax',
          results: [
            'Fərdi rəng palitrası, loqo və sloqanlarla klassik-modern üslubda landing səhifə hazırladım.',
            'Google Calendar API inteqrasiyası qurdum: seminar, vebinar və təlimlər sahibin təqvimindən avtomatik göstərilir.',
            'Təqvim qeydləri əsasında ödənişli xidmətlərin əlçatanlığının avtomatik göstərilməsini həyata keçirdim.',
          ],
        },
      ],
    },
    education: { title: 'Təhsil', field: 'Veb Dizayn və Proqram Təminatı', period: 'Sentyabr 2023 — iyun 2027 (gözlənilir)' },
    spoken: {
      title: 'Dillər',
      items: [
        { name: 'Azərbaycan dili', level: 'Sərbəst', score: 5 },
        { name: 'Rus dili', level: 'Sərbəst', score: 5 },
        { name: 'İngilis dili', level: 'Orta · B1–B2', score: 3 },
      ],
    },
    contact: {
      eyebrow: 'Növbəti addım',
      title: 'Gəlin birlikdə işləyək',
      text: 'Vakansiya və ya layihəniz barədə mənə yazın.',
      email: 'E-poçt göndər',
      telegram: 'Telegram-da yaz',
    },
    footer: { top: 'Yuxarı', tagline: 'Full-stack və veb dizayn · Bakı' },
  },
}
