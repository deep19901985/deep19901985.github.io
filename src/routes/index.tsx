import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deepthy Chullikkatt Kunjachan — Analytics & Data Engineering Portfolio" },
      { name: "description", content: "London-based analytics engineer with 4.5+ years in BI, SQL data modelling, data engineering and applied AI." },
      { property: "og:title", content: "Deepthy Chullikkatt Kunjachan — Portfolio" },
      { property: "og:description", content: "Analytics Engineering, Data Engineering, Business Intelligence and Applied AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const GH = "https://github.com/deep19901985";
const LI = "https://www.linkedin.com/in/deepthyck/";
const nav = ["About", "Experience", "Skills", "Projects", "Education", "Contact"];

const skills = [
  { group: "Data Engineering", items: ["Python", "PySpark", "Databricks", "Delta Lake"] },
  { group: "Analytics Engineering", items: ["SQL", "Data modelling", "Enterprise reporting"] },
  { group: "Business Intelligence", items: ["Dashboards", "Reporting", "Stakeholder insights"] },
  { group: "Applied AI", items: ["RAG", "AI automation", "Conversational AI"] },
];

const projects = [
  { title: "Sanchari YouTube Analytics", tag: "Flagship", desc: "An end-to-end YouTube analytics pipeline built on a lakehouse architecture.", stack: ["Python", "PySpark", "Databricks", "Delta Lake"], href: `${GH}/sanchari-youtube-analytics` },
  { title: "Retrieval-Augmented Generation", tag: "Applied AI", desc: "A RAG project that grounds language model answers in a document set.", stack: ["RAG", "Python"], href: GH },
  { title: "AI Automation", tag: "Applied AI", desc: "A workflow automation project that uses AI to cut repetitive manual steps.", stack: ["Automation", "Python"], href: GH },
  { title: "Conversational AI", tag: "Applied AI", desc: "A conversational assistant project exploring dialogue design and language models.", stack: ["Conversational AI"], href: GH },
];

function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 border-t border-border px-6 py-20 md:grid md:grid-cols-[200px_1fr] md:gap-12">
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-teal">{label}</p>
      <div>{children}</div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-semibold">Deepthy C K<span className="text-teal">.</span></a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="transition-colors hover:text-teal">{n}</a>)}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-32">
          <p className="rise mb-6 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-teal" /> London, United Kingdom</p>
          <h1 className="rise font-display text-5xl leading-[1.05] tracking-tight md:text-7xl" style={{ animationDelay: "80ms" }}>
            Deepthy Chullikkatt Kunjachan
          </h1>
          <p className="rise mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl" style={{ animationDelay: "160ms" }}>
            Analytics Engineering · Data Engineering · Business Intelligence · Applied AI. I turn raw data into reliable models, clear reporting and practical AI tools.
          </p>
          <div className="rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a href="#projects" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-teal">View projects</a>
            <a href={GH} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition hover:border-teal hover:text-teal"><Github className="h-4 w-4" /> GitHub</a>
            <a href={LI} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition hover:border-teal hover:text-teal"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </div>
        </section>

        <Section id="about" label="About">
          <p className="font-display text-2xl leading-relaxed md:text-3xl">
            I have 4.5+ years of commercial BI and analytics experience, with a focus on enterprise reporting and SQL-based data modelling.
          </p>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            With an MSc in Data Science, I work across the data stack, from building pipelines in PySpark and Databricks to designing models that help decision-makers. I'm increasingly bringing applied AI, including retrieval-augmented generation and automation, into analytics work.
          </p>
        </Section>

        <Section id="experience" label="Experience">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-2xl">Buck (Gallagher)</h3>
              <span className="text-sm text-muted-foreground">Business Intelligence & Analytics</span>
            </div>
            <ul className="mt-5 space-y-2 text-muted-foreground">
              <li>— Built and maintained enterprise reporting.</li>
              <li>— Designed SQL-based data models for analytics.</li>
            </ul>
          </div>
        </Section>

        <Section id="skills" label="Technical Skills">
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="mb-3 font-semibold">{s.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((i) => <span key={i} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" label="Featured Projects">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, idx) => (
              <a key={p.title} href={p.href} target="_blank" rel="noreferrer"
                className={`group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-teal hover:shadow-[0_20px_40px_-20px_var(--teal)] ${idx === 0 ? "md:col-span-2 bg-primary text-primary-foreground" : ""}`}>
                <div className="flex items-start justify-between">
                  <span className={`text-xs font-semibold uppercase tracking-widest ${idx === 0 ? "text-teal" : "text-teal"}`}>{p.tag}</span>
                  <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal" />
                </div>
                <h3 className={`mt-6 font-display ${idx === 0 ? "text-3xl md:text-4xl" : "text-2xl"}`}>{p.title}</h3>
                <p className={`mt-3 max-w-xl ${idx === 0 ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{p.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((t) => <span key={t} className={`rounded-full px-3 py-1 text-xs ${idx === 0 ? "border border-primary-foreground/25" : "bg-accent text-accent-foreground"}`}>{t}</span>)}
                </div>
              </a>
            ))}
          </div>
        </Section>

        <Section id="education" label="Education">
          <h3 className="font-display text-2xl">MSc Data Science</h3>
        </Section>

        <Section id="contact" label="Contact">
          <p className="font-display text-3xl md:text-4xl">Let's talk data.</p>
          <p className="mt-4 text-muted-foreground">Open to analytics engineering, data engineering and applied AI roles in London.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={LI} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-teal">Connect on LinkedIn</a>
            <a href={GH} target="_blank" rel="noreferrer" className="rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:border-teal hover:text-teal">GitHub</a>
          </div>
        </Section>
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Deepthy Chullikkatt Kunjachan</footer>
    </div>
  );
}
