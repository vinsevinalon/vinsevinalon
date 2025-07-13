import Image from 'next/image'
import { memo } from 'react'
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
 * Highly optimized ProjectCard component for displaying work portfolio items
 * Features: Memoization, lazy loading, progressive image enhancement
 * Optimized for performance with proper image loading and accessibility
 */
const ProjectCard = memo(function ProjectCard({
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
        {/* Optimized Project Image with progressive loading */}
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden bg-muted">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform hover:scale-105 duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Kic6LbRWa8N2rEmFBB/9k="
            quality={85}
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
})

export default ProjectCard
