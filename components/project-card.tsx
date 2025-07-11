import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface ProjectCardProps {
  title: string
  url: string
  role: string
  description: string
  image: {
    src: string
    alt: string
  }
  contributions: readonly string[]
  technologies: readonly string[]
}

/**
 * Reusable ProjectCard component for displaying work portfolio items
 * Optimized for performance with proper image loading and accessibility
 */
export default function ProjectCard({
  title,
  url,
  role,
  description,
  image,
  contributions,
  technologies,
}: ProjectCardProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden">
      <CardHeader className="space-y-2">
        <CardTitle className="text-xl font-bold text-primary">{title}</CardTitle>
        <CardDescription className="text-sm italic text-muted-foreground">
          {role}
        </CardDescription>
        <p className="text-sm leading-relaxed text-foreground">{description}</p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Project Image */}
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>

        {/* Contributions */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-primary">CONTRIBUTIONS</h4>
          <ul className="space-y-2">
            {contributions.map((contribution, index) => (
              <li key={index} className="text-xs leading-relaxed text-foreground pl-4 relative">
                <span className="absolute left-0 top-2 w-1 h-1 bg-primary rounded-full" />
                {contribution}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-primary">TECHNOLOGIES</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
