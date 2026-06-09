import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { person, home, projects } from "@/lib/content"

export default function Page() {
  const featured = projects.filter((p) => p.featured)

  return (
    <div className="flex flex-col gap-20">
      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Image
            src={person.avatar || "/placeholder.svg"}
            alt={person.name}
            width={64}
            height={64}
            className="size-16 rounded-full object-cover"
            priority
          />
          <div>
            <p className="text-sm text-muted-foreground">{person.role}</p>
            <p className="text-sm text-muted-foreground">Based in {person.location}</p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{home.headline}</h1>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">{home.subline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            About me
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            View work
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Featured projects</h2>
          <Link
            href="/work"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All projects
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}
