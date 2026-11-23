import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deepthy Chullikkatt Kunjachan — Data Analytics, BI & Data Engineering" },
      { name: "description", content: "London-based BI professional with 4.5+ years of commercial experience, expanding into analytics engineering, data engineering and applied AI." },
      { property: "og:title", content: "Deepthy Chullikkatt Kunjachan — Portfolio" },
      { property: "og:description", content: "Data Analytics & BI | Analytics Engineering | Data Engineering | Applied AI" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const GH = "https://github.com/deep19901985";
const LI = "https://www.linkedin.com/in/deepthyck/";
const EMAIL = "deepthy2k@gmail.com";
const SANCHARI = `${GH}/sanchari-youtube-analytics`;
const nav = ["About", "Experience", "Projects", "Skills", "Credentials", "Education", "Contact"];

const experience = [
  "Developed and maintained 100+ dashboards across HR, finance and operations.",
  "Built Sisense Elasticube models and SQL-based reporting solutions.",
  "Contributed to a Windows-to-Linux reporting migration that reduced maintenance effort by approximately 25%.",
  "Mentored five colleagues and worked across Agile delivery teams.",
];

const skills = [
  { group: "BI & Reporting", items: ["Power BI", "DAX", "Sisense", "Elasticube modelling", "Dashboard design", "Enterprise reporting"] },
  { group: "Data & Analytics Engineering", items: ["SQL", "Data modelling", "Python", "PySpark", "Databricks", "Delta Lake"] },
  { group: "Applied AI", items: ["RAG", "OpenAI API", "Pinecone", "n8n", "Prompt design", "Conversation design"] },
  { group: "Ways of working", items: ["Agile delivery", "Mentoring", "Stakeholder reporting"] },
];

const metrics = [
  { value: "37,327", label: "Bronze records ingested" },
  { value: "36,251", label: "Unique Silver records" },
  { value: "1,076", label: "Overlapping observations reconciled" },
];

const projects = [
  { title: "AI Customer Assistant", tag: "RAG · Automation", desc: "A retrieval-augmented customer assistant with automated workflows.", stack: ["RAG", "n8n", "OpenAI API", "Pinecone"] },
  { title: "Voice AI Mental Health Triage: ElevenLabs Worldwide Hackathon, London", tag: "December 2025 · Third prize, London", desc: "Contributed prompt design, conversation-flow design and AI interaction testing to a voice AI mental-health triage prototype. The team placed third in London.", stack: ["ElevenLabs", "Voice AI", "Prompt design"] },
  { title: "Family Companion AI", tag: "OpenAI Build Week 2026", desc: "A privacy-conscious prototype built during OpenAI Build Week 2026, designed around human oversight and clear safety boundaries.", stack: ["OpenAI", "Conversational AI"] },
  { title: "MSc House Price Prediction", tag: "Research", desc: "Research into KNN and Random Forest imputation techniques for house price prediction.", stack: ["Python", "KNN", "Random Forest"] },
];

const badges = [
  "Build Data Pipelines with Lakeflow Spark Declarative Pipelines",
  "Deploy Workloads with Lakeflow Jobs",
  "Data Ingestion with Lakeflow Connect",
];

const credentials = [
  { name: "Microsoft Azure AI Fundamentals (AI‑900)", status: "Earned" },
  { name: "DataCamp Data Engineer Associate", status: "Earned" },
  { name: "Databricks Data Engineer Associate", status: "In progress" },
  { name: "Microsoft Fabric Analytics Engineer (DP‑600)", status: "In progress" },
  { name: "Microsoft Power BI Data Analyst (PL‑300)", status: "Planned" },
] as const;
const credentialGroups = [
  { label: "Earned", items: credentials.filter((c) => c.status === "Earned").map((c) => c.name) },
  { label: "Knowledge badges", items: badges.map((b) => `Databricks: ${b}`) },
  { label: "In progress", items: credentials.filter((c) => c.status === "In progress").map((c) => c.name) },
  { label: "Planned", items: credentials.filter((c) => c.status === "Planned").map((c) => c.name) },
];

const education = [
  { degree: "MSc Data Science", school: "Nottingham Trent University", year: "2024" },
  { degree: "MTech Optoelectronics & Laser Technology", school: "Cochin University of Science and Technology (CUSAT)", year: "2012" },
];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`print-reveal transition-all duration-700 ease-out motion-reduce:transition-none ${shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"} ${className}`}>
      {children}
    </div>
  );
}

function Section({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="print-section mx-auto max-w-6xl scroll-mt-20 border-t border-border px-6 py-16 md:grid md:grid-cols-[180px_1fr] md:gap-12 md:py-24">
      <h2 id={`${id}-h`} className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">{label}</h2>
      <Reveal>{children}</Reveal>
    </section>
  );
}

const btnPrimary = "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal";
const btnGhost = "inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-teal hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal";

function Contacts() {
  return (
    <div className="print-contacts flex flex-wrap gap-3">
      <a href={`mailto:${EMAIL}`} className={btnPrimary}><Mail className="h-4 w-4" aria-hidden /> Email</a>
      <a href={LI} target="_blank" rel="noreferrer" className={btnGhost}><Linkedin className="h-4 w-4" aria-hidden /> LinkedIn</a>
      <a href={GH} target="_blank" rel="noreferrer" className={btnGhost}><Github className="h-4 w-4" aria-hidden /> GitHub</a>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <a href="#main" className="print-hide sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-card focus:px-3 focus:py-2">Skip to content</a>
      <header className="print-hide sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-semibold">Deepthy C K<span className="text-teal">.</span></a>
          <nav aria-label="Main" className="hidden gap-6 text-sm text-muted-foreground lg:flex">
            {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="transition-colors hover:text-foreground">{n}</a>)}
          </nav>
          <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <nav aria-label="Mobile" className="flex flex-col border-t border-border px-6 py-3 lg:hidden">
            {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="py-2 text-base">{n}</a>)}
          </nav>
        )}
      </header>

      <main id="main">
        <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-28">
          <p className="rise mb-6 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-teal" aria-hidden /> London, United Kingdom</p>
          <h1 className="rise font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-[3.5rem] lg:text-7xl" style={{ animationDelay: "80ms" }}>Deepthy Chullikkatt Kunjachan</h1>
          <p className="rise mt-6 text-base font-semibold text-accent-foreground md:text-lg" style={{ animationDelay: "140ms" }}>
            Data Analytics & BI <span className="text-muted-foreground" aria-hidden>|</span> Analytics Engineering <span className="text-muted-foreground" aria-hidden>|</span> Data Engineering <span className="text-muted-foreground" aria-hidden>|</span> Applied AI
          </p>
          <p className="rise mt-4 max-w-2xl text-lg text-muted-foreground" style={{ animationDelay: "200ms" }}>
            BI professional with 4.5+ years of commercial experience in enterprise reporting and SQL-based data modelling, now building lakehouse pipelines and applied AI solutions.
          </p>
          <div className="print-hide rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "260ms" }}>
            <a href="#projects" className={`${btnPrimary} px-7 py-4 text-base`}>View Projects</a>
            <a href="#sanchari" className={`${btnGhost} border-teal px-7 py-4 text-base`}>Explore Sanchari <ArrowUpRight className="h-4 w-4" aria-hidden /></a>
          </div>
          <div className="rise mt-6" style={{ animationDelay: "320ms" }}><Contacts /></div>
        </section>

        <Section id="about" label="About">
          <p className="font-display text-2xl leading-relaxed md:text-3xl">I build reporting people rely on, and I'm extending that foundation into modern data engineering and applied AI.</p>
          <p className="mt-6 max-w-2xl text-muted-foreground">At Buck (Gallagher) I spent four and a half years delivering dashboards, Sisense models and SQL reporting for HR, finance and operations teams. After an MSc in Data Science, I'm now applying that experience to medallion-architecture pipelines on Databricks and to AI assistants built with retrieval and conversation design.</p>
        </Section>

        <Section id="experience" label="Experience">
          <article className="rounded-2xl border border-border bg-card p-6 transition hover:border-teal md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-2xl">Senior Software Engineer – Data Analytics</h3>
              <span className="text-sm text-muted-foreground">Jan 2019 – Sep 2023</span>
            </div>
            <p className="mt-1 font-medium text-accent-foreground">Buck (Gallagher)</p>
            <ul className="mt-6 space-y-3">
              {experience.map((e) => <li key={e} className="flex gap-3 text-muted-foreground"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />{e}</li>)}
            </ul>
          </article>
        </Section>

        <Section id="projects" label="Featured Projects">
          <article id="sanchari" className="print-dark-card group relative scroll-mt-24 overflow-hidden rounded-3xl bg-primary p-7 text-primary-foreground shadow-[0_30px_60px_-30px_var(--navy)] transition duration-500 hover:-translate-y-1 md:p-10">
            <div aria-hidden className="print-hide pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal opacity-25 blur-3xl transition duration-700 group-hover:opacity-40" />
            <span className="relative inline-block rounded-full bg-teal px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">Flagship project</span>
            <h3 className="relative mt-5 font-display text-3xl md:text-5xl">Sanchari</h3>
            <p className="relative mt-2 text-lg text-primary-foreground/80">YouTube Analytics Data Engineering</p>
            <p className="relative mt-4 max-w-2xl text-primary-foreground/75">A medallion-style pipeline that ingests YouTube data into Bronze, then deduplicates and reconciles it into a clean Silver layer.</p>
            <dl className="relative mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {metrics.map((m) => (
                <div key={m.label} className="flex min-w-0 flex-col-reverse justify-end rounded-2xl border border-primary-foreground/15 p-5 last:sm:col-span-2 last:lg:col-span-1">
                  <dt className="mt-1 text-sm leading-snug text-primary-foreground/80">{m.label}</dt>
                  <dd className="font-display text-3xl text-teal">{m.value}</dd>
                </div>
              ))}
            </dl>
            <div className="relative mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-teal">✓ Implemented</p>
                <ul className="mt-3 space-y-1 text-sm text-primary-foreground/85"><li>Bronze layer: raw YouTube data ingestion</li><li>Silver layer: deduplication and reconciliation</li></ul>
                <div className="mt-3 flex flex-wrap gap-2">{["Python", "PySpark", "Databricks", "Delta Lake"].map((t) => <span key={t} className="rounded-full border border-primary-foreground/25 px-3 py-1 text-xs">{t}</span>)}</div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">Planned — not yet built</p>
                <div className="mt-3 flex flex-wrap gap-2">{["dbt Gold models", "Databricks Jobs orchestration", "Power BI reporting"].map((t) => <span key={t} className="rounded-full border border-dashed border-primary-foreground/40 px-3 py-1 text-xs text-primary-foreground/80">{t} · planned</span>)}</div>
              </div>
            </div>
            <a href={SANCHARI} target="_blank" rel="noreferrer" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary transition hover:bg-teal">
              View on GitHub <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </article>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-teal hover:shadow-[0_20px_40px_-24px_var(--teal)]">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">{p.tag}</span>
                  <h3 className="mt-4 font-display text-2xl">{p.title}</h3>
                  <p className="mt-3 flex-1 text-muted-foreground">{p.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{p.stack.map((t) => <span key={t} className="rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">{t}</span>)}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="skills" label="Technical Skills">
          <div className="grid gap-8 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="mb-3 font-semibold">{s.group}</h3>
                <div className="flex flex-wrap gap-2">{s.items.map((i) => <span key={i} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">{i}</span>)}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="credentials" label="Certifications & Learning">
          <div className="grid gap-6 sm:grid-cols-2">
            {credentialGroups.map((g) => (
              <div key={g.label} className={`rounded-2xl border bg-card p-6 transition hover:border-teal ${g.label === "Earned" ? "border-teal" : g.label === "Planned" ? "border-dashed border-border" : "border-border"}`}>
                <h3 className="flex items-center gap-2 font-semibold">
                  <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${g.label === "Earned" ? "bg-teal" : g.label === "Knowledge badges" ? "bg-primary" : g.label === "In progress" ? "border-2 border-teal" : "border-2 border-dashed border-muted-foreground"}`} />
                  {g.label}
                </h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {g.items.map((n) => <li key={n}>{n}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" label="Education">
          <div className="space-y-6">
            {education.map((e) => (
              <div key={e.degree} className="flex flex-wrap items-baseline justify-between gap-2">
                <div><h3 className="font-display text-2xl">{e.degree}</h3><p className="text-muted-foreground">{e.school}</p></div>
                <span className="text-sm text-muted-foreground">{e.year}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" label="Contact">
          <p className="font-display text-3xl md:text-4xl">Let's talk data.</p>
          <p className="mt-4 text-muted-foreground">Open to data analytics, BI, analytics engineering and data engineering roles in London.</p>
          <p className="mt-2"><a href={`mailto:${EMAIL}`} className="font-medium text-accent-foreground underline-offset-4 hover:underline">{EMAIL}</a></p>
          <div className="mt-8"><Contacts /></div>
        </Section>
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">© 2026 Deepthy Chullikkatt Kunjachan</footer>
    </div>
  );
}
