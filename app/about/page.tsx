import type { Metadata } from "next"
import { Mail, Phone, MapPin } from "lucide-react"
import { person, about } from "@/lib/content"

export const metadata: Metadata = {
  title: about.title,
  description: about.description,
}

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16">
      <header className="flex flex-col gap-6">
        <Image
          src={person.avatar || "/placeholder.svg"}
          alt={person.name}
          width={96}
          height={96}
          className="size-24 rounded-full object-cover"
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{person.name}</h1>
          <p className="text-lg text-muted-foreground">{person.role}</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4" aria-hidden="true" />
            {person.location}
          </span>
          <a href={`mailto:${person.email}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
            <Mail className="size-4" aria-hidden="true" />
            {person.email}
          </a>
          <a href={`tel:${person.phone}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
            <Phone className="size-4" aria-hidden="true" />
            {person.phone}
          </a>
        </div>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Introduction</h2>
        <p className="leading-relaxed text-muted-foreground">{about.intro}</p>
        <p className="leading-relaxed text-muted-foreground">{about.seeking}</p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold tracking-tight">{about.work.title}</h2>
        <div className="flex flex-col gap-8">
          {about.work.experiences.map((exp) => (
            <div key={exp.company} className="flex flex-col gap-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium">
                  {exp.role} · {exp.company}
                </h3>
                <span className="text-sm text-muted-foreground">{exp.timeframe}</span>
              </div>
              <p className="text-sm text-muted-foreground">{exp.location}</p>
              <ul className="flex flex-col gap-2">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold tracking-tight">{about.studies.title}</h2>
        <div className="flex flex-col gap-6">
          {about.studies.institutions.map((inst) => (
            <div key={inst.name} className="flex flex-col gap-1">
              <h3 className="font-medium">{inst.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{inst.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold tracking-tight">{about.technical.title}</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {about.technical.skills.map((skill) => (
            <div key={skill.title} className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-5">
              <h3 className="font-medium">{skill.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
