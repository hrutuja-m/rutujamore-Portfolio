import type { Metadata } from "next"
import { ProjectCard } from "@/components/project-card"
import { work, projects } from "@/lib/content"

export const metadata: Metadata = {
  title: work.title,
  description: work.description,
}

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{work.title}</h1>
        <p className="max-w-xl leading-relaxed text-muted-foreground">
          A selection of data science, AI engineering, and machine learning projects spanning generative AI, computer
          vision, and cloud data engineering.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
