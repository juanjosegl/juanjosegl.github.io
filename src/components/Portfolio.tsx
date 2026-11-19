import Image from "next/image";
import ApiStatus from "@/components/ApiStatus";
import { links, type Content } from "@/content";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const wrap = "mx-auto w-full max-w-5xl px-4 sm:px-6";
const sectionTitle = "text-2xl font-semibold tracking-tight sm:text-3xl";

function Stack({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((s) => (
        <li key={s} className="rounded border border-line px-2 py-0.5 text-xs text-muted">
          {s}
        </li>
      ))}
    </ul>
  );
}

function Points({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 leading-relaxed marker:text-accent">
      {items.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  );
}

export default function Portfolio({ t }: { t: Content }) {
  return (
    <div lang={t.lang} className="flex min-h-full flex-col">
      <header className="border-b border-line">
        <nav aria-label={t.lang === "es" ? "Principal" : "Main"} className={`${wrap} flex items-center justify-between gap-4 py-4 text-sm`}>
          <a href="#top" className="font-semibold">
            Juan José Gutiérrez
          </a>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#proyectos" className="hidden hover:text-accent sm:inline">
              {t.nav.projects}
            </a>
            <a href="#experiencia" className="hidden hover:text-accent sm:inline">
              {t.nav.experience}
            </a>
            <a href="#contacto" className="hover:text-accent">
              {t.nav.contact}
            </a>
            <a href={t.nav.switchHref} hrefLang={t.lang === "es" ? "en" : "es"} className="font-medium text-accent underline">
              {t.nav.switchLabel}
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="flex-1">
        <section className={`${wrap} grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_22rem] lg:items-end`}>
          <div>
            <h1 className="text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl">{t.hero.name}</h1>
            <p className="mt-4 text-xl font-medium text-accent sm:text-2xl">{t.hero.role}</p>
            <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">{t.hero.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={links.cv} download className="rounded-md bg-accent px-4 py-2.5 font-medium text-paper hover:opacity-90">
                {t.hero.cv}
              </a>
              <a href={`mailto:${links.email}`} className="rounded-md border border-line px-4 py-2.5 font-medium hover:border-accent">
                {t.hero.email}
              </a>
              <a href={links.github} {...ext} className="px-2 py-2.5 font-medium underline hover:text-accent">
                GitHub
              </a>
              <a href={links.linkedin} {...ext} className="px-2 py-2.5 font-medium underline hover:text-accent">
                LinkedIn
              </a>
            </div>
          </div>
          <ApiStatus t={t.status} />
        </section>

        <section id="proyectos" aria-labelledby="proyectos-title" className="border-t border-line py-14 sm:py-20">
          <div className={wrap}>
            <h2 id="proyectos-title" className={sectionTitle}>
              {t.projectsTitle}
            </h2>
            <div className="mt-10 space-y-16">
              {t.projects.map((p) => (
                <article key={p.id} aria-labelledby={`${p.id}-title`} className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
                  <a href={p.links.demo} {...ext} className="block self-start overflow-hidden rounded-md border border-line">
                    <Image src={p.image} alt={p.imageAlt} width={1440} height={900} className="h-auto w-full" />
                  </a>
                  <div className="space-y-5">
                    <div>
                      <h3 id={`${p.id}-title`} className="text-2xl font-semibold">
                        {p.name}
                      </h3>
                      <p className="mt-1 font-medium text-accent">{p.tagline}</p>
                    </div>
                    <p className="leading-relaxed text-muted">{p.summary}</p>
                    <Points items={p.points} />
                    <Stack items={p.stack} />
                    <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-sm font-medium">
                      <a href={p.links.demo} {...ext} className="rounded-md bg-accent px-3.5 py-2 text-paper hover:opacity-90">
                        {t.projectLabels.demo}
                      </a>
                      <a href={p.links.docs} {...ext} className="py-2 underline hover:text-accent">
                        {t.projectLabels.docs}
                      </a>
                      <a href={p.links.frontend} {...ext} className="py-2 underline hover:text-accent">
                        {t.projectLabels.frontend}
                      </a>
                      <a href={p.links.backend} {...ext} className="py-2 underline hover:text-accent">
                        {t.projectLabels.backend}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" aria-labelledby="experiencia-title" className="border-t border-line py-14 sm:py-20">
          <div className={wrap}>
            <h2 id="experiencia-title" className={sectionTitle}>
              {t.experienceTitle}
            </h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-[14rem_1fr]">
              <div>
                <p className="text-lg font-semibold">{t.job.role}</p>
                <p className="font-medium text-accent">{t.job.company}</p>
                <p className="mt-1 text-sm text-muted">{t.job.where}</p>
                <p className="text-sm text-muted">{t.job.when}</p>
              </div>
              <div className="space-y-10">
                {t.job.parts.map((part) => (
                  <div key={part.name} className="space-y-3 border-l-2 border-accent pl-5">
                    <h3 className="text-lg font-semibold">{part.name}</h3>
                    <Stack items={part.stack} />
                    <Points items={part.points} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="skills-title" className="border-t border-line py-14 sm:py-20">
          <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
            <div>
              <h2 id="skills-title" className={sectionTitle}>
                {t.skillsTitle}
              </h2>
              <dl className="mt-8 space-y-4">
                {t.skills.map((s) => (
                  <div key={s.group} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-4">
                    <dt className="font-semibold">{s.group}</dt>
                    <dd className="text-muted">{s.items}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className={sectionTitle}>{t.educationTitle}</h2>
              <ul className="mt-8 space-y-5">
                {t.education.map((e) => (
                  <li key={e.name}>
                    <p className="font-semibold">{e.name}</p>
                    <p className="text-muted">{e.place}</p>
                    <p className="text-sm text-muted">{e.when}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contacto" aria-labelledby="contacto-title" className="border-t border-line bg-panel py-14 sm:py-20">
          <div className={wrap}>
            <h2 id="contacto-title" className={sectionTitle}>
              {t.contact.title}
            </h2>
            <p className="mt-3 max-w-[55ch] text-lg text-muted">{t.contact.text}</p>
            <a
              href={`mailto:${links.email}`}
              className="mt-6 inline-block text-xl font-semibold break-all text-accent underline sm:text-3xl"
            >
              {links.email}
            </a>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-medium">
              <a href={links.linkedin} {...ext} className="underline hover:text-accent">
                LinkedIn
              </a>
              <a href={links.github} {...ext} className="underline hover:text-accent">
                GitHub
              </a>
              <a href={links.cv} download className="underline hover:text-accent">
                {t.hero.cv}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-6 text-sm text-muted">
        <div className={`${wrap} flex flex-wrap justify-between gap-2`}>
          <p>{t.footer.built}</p>
          <a href={links.siteRepo} {...ext} className="underline hover:text-accent">
            {t.footer.source}
          </a>
        </div>
      </footer>
    </div>
  );
}
