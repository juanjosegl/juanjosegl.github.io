// All portfolio copy, taken from the CV. Edit here; both languages share the same shape.

export const links = {
  email: "jjgutierrezlasso@gmail.com",
  github: "https://github.com/juanjosegl",
  linkedin: "https://www.linkedin.com/in/juanjosegl",
  cv: "/cv/CV-Juan-Jose-Gutierrez-Lasso.pdf",
  siteRepo: "https://github.com/juanjosegl/juanjosegl.github.io",
};

// Render free tier sleeps after ~15 min idle; the hero pings these so demos are awake when opened.
export const apis = [
  { id: "projectflow", name: "ProjectFlow", url: "https://projectflow-api-iyet.onrender.com/api/v1/health" },
  { id: "amshop", name: "AM Shop", url: "https://am-shop-backend.onrender.com/health" },
] as const;

const projectLinks = {
  projectflow: {
    demo: "https://projectflow-web-rho.vercel.app",
    docs: "https://projectflow-api-iyet.onrender.com/api/docs",
    frontend: "https://github.com/juanjosegl/projectflow-web",
    backend: "https://github.com/juanjosegl/projectflow-api",
  },
  amshop: {
    demo: "https://ecommerce-frontend-ivory-nu.vercel.app",
    docs: "https://am-shop-backend.onrender.com/api-docs",
    frontend: "https://github.com/juanjosegl/ecommerce-frontend",
    backend: "https://github.com/juanjosegl/ecommerce-backend",
  },
};

const es = {
  lang: "es",
  meta: {
    title: "Juan José Gutiérrez Lasso · Full Stack Developer",
    description:
      "Full Stack Developer en remoto: Vue.js, Laravel, NestJS y Next.js. Proyectos en vivo, experiencia y contacto.",
  },
  nav: { projects: "Proyectos", experience: "Experiencia", contact: "Contacto", switchLabel: "English", switchHref: "/en/" },
  hero: {
    name: "Juan José Gutiérrez Lasso",
    role: "Full Stack Developer en remoto",
    intro:
      "Construyo interfaces en Vue.js y Next.js y APIs en NestJS y Laravel. Llevo más de un año trabajando en productos para EE. UU. desde Popayán, Colombia, y busco mi próximo equipo remoto.",
    cv: "Descargar CV",
    email: "Escribirme",
  },
  status: {
    title: "Demos en vivo",
    note: "Mis APIs corren en un plan gratuito que se apaga cuando nadie las usa. Las estoy despertando ahora para que las demos respondan cuando las abras.",
    waking: "despertando",
    readyNow: "lista",
    ready: "lista en",
    failed: "no respondió, recarga la página",
    seconds: "s",
  },
  projectsTitle: "Proyectos",
  projectLabels: { demo: "Abrir demo", docs: "Documentación de la API", frontend: "Código del frontend", backend: "Código del backend" },
  projects: [
    {
      id: "projectflow",
      name: "ProjectFlow",
      tagline: "Gestor de proyectos para equipos",
      summary:
        "Tableros kanban, roles, invitaciones y notificaciones. Entras con un equipo de demostración en un clic, sin registrarte.",
      image: "/projects/projectflow-dashboard.jpg",
      imageAlt: "Dashboard de ProjectFlow con tareas por estado y actividad reciente",
      points: [
        "API REST en NestJS con 7 módulos (kanban, invitaciones, notificaciones) y permisos por rol validados en el servidor.",
        "Sesiones con JWT y refresh token rotativo en cookie httpOnly, guardado como hash, y Google OAuth 2.0.",
        "CI en GitHub Actions con pruebas unitarias en Jest y una prueba end-to-end contra PostgreSQL real en cada push.",
      ],
      stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Jest", "GitHub Actions"],
      links: projectLinks.projectflow,
    },
    {
      id: "amshop",
      name: "AM Shop",
      tagline: "Tienda en línea con panel de administración",
      summary:
        "Catálogo, carrito y checkout sobre una API que cuida el inventario. La página de inicio de sesión trae cuentas de prueba de cliente y de administrador.",
      image: "/projects/amshop-catalog.jpg",
      imageAlt: "Catálogo de AM Shop con filtros por categoría y productos",
      points: [
        "Cada pedido se crea en una transacción con movimientos de inventario auditables, sin sobreventa aunque compren varios a la vez.",
        "El ciclo de vida del pedido es una máquina de estados, y un cron cancela los pedidos abandonados.",
        "Caché en Redis con respaldo a la base de datos, roles y permisos, y login con email o Google con fusión de cuentas.",
      ],
      stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Docker", "Cloudinary"],
      links: projectLinks.amshop,
    },
  ],
  experienceTitle: "Experiencia",
  job: {
    role: "Full Stack Developer",
    company: "ASAP Temporary Staffing",
    where: "Remoto para EE. UU.",
    when: "Agosto 2025 – hoy",
    parts: [
      {
        name: "Plataforma de delivery, creada desde cero",
        stack: ["Vue.js", "NestJS", "TypeScript"],
        points: [
          "Desarrollé el 100 % del frontend web como único desarrollador frontend, en unos 6 meses: paneles para los roles Restaurante, Soporte y Administrador. Está en pruebas internas antes del lanzamiento.",
          "Implementé permisos configurables: el administrador activa o desactiva módulos por rol sin tocar código.",
          "Amplié el backend en NestJS con endpoints para la web y la app móvil, incluida toda la lógica de delivery.",
        ],
      },
      {
        name: "Atenas, sistema de gestión empresarial con más de 100 usuarios semanales",
        stack: ["Vue.js", "Laravel", "PHP", "MySQL"],
        points: [
          "Construí el módulo de control de horario: entrada, salida y pausas, calendario de asistencia por empleado, horas extra, ausencias y reportes exportables a Excel.",
          "Resolví 66 tickets y completé unas 50 tareas y más de 100 subtareas en un año: documentos PDF, nuevas funcionalidades y corrección de incidencias en producción.",
          "Despliegues en Linux por SSH y Git con pull requests. El código y el producto están en inglés.",
        ],
      },
    ],
  },
  skillsTitle: "Habilidades",
  skills: [
    { group: "Lenguajes", items: "TypeScript, JavaScript, PHP, SQL, Python, Java" },
    { group: "Frontend", items: "Vue.js, React, Next.js, Tailwind CSS" },
    { group: "Backend", items: "NestJS, Node.js, Laravel, APIs REST, Prisma, Swagger/OpenAPI" },
    { group: "Bases de datos", items: "PostgreSQL, MySQL, Redis, MongoDB" },
    { group: "DevOps y pruebas", items: "Docker, Git, GitHub Actions, Jest, Linux, SSH, Vercel, Render" },
    { group: "Idiomas", items: "Español nativo, inglés B1 (lectura técnica)" },
  ],
  educationTitle: "Formación",
  education: [
    { name: "Ingeniería de Sistemas", place: "Corporación Universitaria Comfacauca – Unicomfacauca", when: "2020 – abril 2027" },
    { name: "Diplomado CloudForge AI 5.0: Cloud Native, DevSecOps, Kubernetes y MLOps", place: "Opción de grado", when: "2026" },
    { name: "Bachiller Técnico en Desarrollo de Software", place: "Colegio Técnico Comfacauca", when: "2019" },
    {
      name: "28 cursos en Código Facilito",
      place: "Node.js, React, TypeScript, PHP 8, Laravel, Docker, Git, arquitectura de software, pruebas (QA), Spring Boot y Machine Learning",
      when: "2024 – 2025",
    },
  ],
  contact: {
    title: "Contacto",
    text: "¿Tienes una vacante remota o un proyecto en mente? Escríbeme y te respondo pronto.",
  },
  footer: { built: "Sitio hecho con Next.js y publicado en GitHub Pages.", source: "Ver el código" },
};

type Content = typeof es;

const en: Content = {
  lang: "en",
  meta: {
    title: "Juan José Gutiérrez Lasso · Full Stack Developer",
    description: "Remote Full Stack Developer: Vue.js, Laravel, NestJS and Next.js. Live projects, experience and contact.",
  },
  nav: { projects: "Projects", experience: "Experience", contact: "Contact", switchLabel: "Español", switchHref: "/" },
  hero: {
    name: "Juan José Gutiérrez Lasso",
    role: "Remote Full Stack Developer",
    intro:
      "I build interfaces with Vue.js and Next.js and APIs with NestJS and Laravel. I've spent over a year working on products for US companies from Popayán, Colombia, and I'm looking for my next remote team.",
    cv: "Download CV (Spanish)",
    email: "Email me",
  },
  status: {
    title: "Live demos",
    note: "My APIs run on a free plan that sleeps when idle. I'm waking them up right now so the demos respond when you open them.",
    waking: "waking up",
    readyNow: "ready",
    ready: "ready in",
    failed: "no response, reload the page",
    seconds: "s",
  },
  projectsTitle: "Projects",
  projectLabels: { demo: "Open demo", docs: "API docs", frontend: "Frontend code", backend: "Backend code" },
  projects: [
    {
      ...es.projects[0],
      tagline: "Project manager for teams",
      summary: "Kanban boards, roles, invitations and notifications. You get into a demo team with one click, no sign-up.",
      imageAlt: "ProjectFlow dashboard with tasks by status and recent activity",
      points: [
        "NestJS REST API with 7 modules (kanban, invitations, notifications) and role permissions enforced on the server.",
        "JWT sessions with a rotating refresh token in an httpOnly cookie, stored as a hash, plus Google OAuth 2.0.",
        "CI on GitHub Actions with Jest unit tests and an end-to-end test against a real PostgreSQL database on every push.",
      ],
    },
    {
      ...es.projects[1],
      tagline: "Online store with an admin panel",
      summary:
        "Catalog, cart and checkout on top of an API that protects stock. The sign-in page includes test accounts for a customer and an admin.",
      imageAlt: "AM Shop catalog with category filters and products",
      points: [
        "Each order is created in one transaction with auditable stock movements, with no overselling under concurrent purchases.",
        "The order lifecycle is a state machine, and a cron job cancels abandoned orders.",
        "Redis caching with database fallback, roles and permissions, and email or Google sign-in with account merging.",
      ],
    },
  ],
  experienceTitle: "Experience",
  job: {
    role: "Full Stack Developer",
    company: "ASAP Temporary Staffing",
    where: "Remote, US-based",
    when: "August 2025 – present",
    parts: [
      {
        ...es.job.parts[0],
        name: "Delivery platform, built from scratch",
        points: [
          "Built 100% of the web frontend as the sole frontend developer in about 6 months: dashboards for the Restaurant, Support and Admin roles. Currently in internal testing before launch.",
          "Implemented configurable permissions: admins turn modules on or off per role without code changes.",
          "Extended the NestJS backend with endpoints for the web and mobile apps, including all delivery logic.",
        ],
      },
      {
        ...es.job.parts[1],
        name: "Atenas, a business management system with 100+ weekly users",
        points: [
          "Built the time-tracking module: clock in/out and breaks, per-employee attendance calendar, overtime, absences and Excel reports.",
          "Closed 66 tickets and about 50 tasks and 100+ subtasks in a year: PDF documents, new features and production fixes.",
          "Deployments on Linux over SSH and Git with pull requests. Code and product are in English.",
        ],
      },
    ],
  },
  skillsTitle: "Skills",
  skills: [
    { group: "Languages", items: "TypeScript, JavaScript, PHP, SQL, Python, Java" },
    { group: "Frontend", items: "Vue.js, React, Next.js, Tailwind CSS" },
    { group: "Backend", items: "NestJS, Node.js, Laravel, REST APIs, Prisma, Swagger/OpenAPI" },
    { group: "Databases", items: "PostgreSQL, MySQL, Redis, MongoDB" },
    { group: "DevOps and testing", items: "Docker, Git, GitHub Actions, Jest, Linux, SSH, Vercel, Render" },
    { group: "Spoken languages", items: "Spanish (native), English B1 (technical reading)" },
  ],
  educationTitle: "Education",
  education: [
    { name: "Systems Engineering", place: "Corporación Universitaria Comfacauca – Unicomfacauca", when: "2020 – April 2027" },
    { name: "CloudForge AI 5.0 diploma: Cloud Native, DevSecOps, Kubernetes and MLOps", place: "Degree requirement", when: "2026" },
    { name: "Technical high school diploma in Software Development", place: "Colegio Técnico Comfacauca", when: "2019" },
    {
      name: "28 courses on Código Facilito",
      place: "Node.js, React, TypeScript, PHP 8, Laravel, Docker, Git, software architecture, QA testing, Spring Boot and Machine Learning",
      when: "2024 – 2025",
    },
  ],
  contact: {
    title: "Contact",
    text: "Have a remote role or a project in mind? Send me an email and I'll get back to you soon.",
  },
  footer: { built: "Built with Next.js and hosted on GitHub Pages.", source: "View source" },
};

export const content = { es, en };
export type { Content };
