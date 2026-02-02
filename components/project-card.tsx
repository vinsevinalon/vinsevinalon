import Image from 'next/image'
import { memo, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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
 * Optimized ProjectCard component for displaying work portfolio items
 * Features: Memoization, lazy loading, progressive image enhancement
 * Simplified without modal complexity for better performance
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
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const handleVisitProject = () => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
  <Card className="w-full max-w-4xl mx-auto overflow-hidden group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 project-card-enter border hover:border-primary">
        <CardHeader className="space-y-2">
          <CardTitle className="text-xl font-bold text-primary flex items-center justify-between">
            {title}
            <Button
              variant="outline"
              size="sm"
              onClick={handleVisitProject}
              className="ml-4 hover:bg-primary hover:text-primary-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary"
            >
              Visit Project
            </Button>
          </CardTitle>
          <CardDescription className="text-sm italic text-muted-foreground">
            {role}
          </CardDescription>
          <p className="text-sm leading-relaxed text-foreground">{description}</p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Simplified Project Image */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-contain transition-all duration-500 ${
                isImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Kic6LbRWa8N2rEmFBB/9k="
              quality={85}
              onLoad={() => setIsImageLoaded(true)}
            />
            {/* Loading shimmer effect */}
            {!isImageLoaded && (
              <div className="absolute inset-0 image-loading rounded-lg" />
            )}
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
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="text-xs tech-badge hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
})

export default ProjectCard
