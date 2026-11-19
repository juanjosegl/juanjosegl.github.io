# Portafolio · Juan José Gutiérrez Lasso

Sitio personal en español e inglés: **https://juanjosegl.github.io**

Página estática hecha con Next.js 16 (`output: "export"`) y Tailwind CSS 4, publicada gratis en GitHub Pages. Al abrirla, un panel despierta las APIs de las demos (plan gratuito de Render) y muestra cuánto tardan en responder.

## Editar contenido

Todo el texto está en [`src/content.ts`](src/content.ts), con la versión en español y en inglés. Las capturas de los proyectos están en `public/projects/` y el CV en `public/cv/`.

## Desarrollo

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # genera el sitio estático en out/
```

Cada push a `main` compila y publica el sitio con [GitHub Actions](.github/workflows/pages.yml).
