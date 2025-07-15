import Image from 'next/image'
import { memo, useState, useEffect } from 'react'
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
 * Highly optimized ProjectCard component for displaying work portfolio items
 * Features: Memoization, lazy loading, progressive image enhancement, clickable images
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
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)

  // Handle escape key press to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showImageModal) {
        setShowImageModal(false)
      }
    }

    if (showImageModal) {
      document.addEventListener('keydown', handleEscapeKey)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [showImageModal])

  const handleImageClick = () => {
    setShowImageModal(true)
  }

  const handleVisitProject = () => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <Card className="w-full max-w-4xl mx-auto overflow-hidden group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 project-card-enter border-border/50 hover:border-primary/20">
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
          {/* Enhanced Project Image with click functionality and better animations */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted group/image cursor-pointer ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <div 
              className="absolute inset-0 bg-black/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center"
              onClick={handleImageClick}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleImageClick()
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View larger image of ${title}`}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover/image:scale-100 transition-transform duration-300 shadow-lg">
                <svg 
                  className="w-6 h-6 text-gray-800" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" 
                  />
                </svg>
              </div>
            </div>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-contain transition-all duration-500 group-hover/image:scale-110 ${
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

      {/* Image Modal */}
      {showImageModal && (
        <div 
          className="fixed inset-0 modal-backdrop z-50 flex items-center justify-center p-4"
          onClick={() => setShowImageModal(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setShowImageModal(false)
            }
          }}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview modal"
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 p-2 rounded-full hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Close image preview"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full aspect-video max-h-[80vh] rounded-lg overflow-hidden shadow-2xl bg-white">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority={true}
                quality={95}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
              <p className="text-white/80 text-sm">{role}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={handleVisitProject}
                className="mt-3 bg-white/10 border-white/20 text-white hover:bg-white hover:text-black transition-colors"
              >
                Visit Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
})

export default ProjectCard
