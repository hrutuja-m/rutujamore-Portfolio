import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/content"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-foreground/20"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} cover`}
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-pretty text-lg font-semibold tracking-tight">{project.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
          </div>
          <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="rounded-full px-2 py-0.5 text-xs text-muted-foreground">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
