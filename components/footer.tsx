import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { person, social } from "@/lib/content"

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
} as const

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} / {person.name}
        </p>
        <div className="flex items-center gap-1">
          {social.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
