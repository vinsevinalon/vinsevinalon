import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Image from 'next/image'
import { memo } from 'react'

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

/**
 * Reusable profile avatar component with consistent styling
 * Features: Size variants and optimized image loading
 */
const ProfileAvatar = memo(function ProfileAvatar({ 
  size = 'lg', 
  className = '' 
}: ProfileAvatarProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-20 h-20', 
    lg: 'w-24 h-24'
  }

  return (
    <Avatar className={`${sizeClasses[size]} ring-2 ring-primary ring-offset-2 ring-offset-background ${className}`}>
      <div className="relative w-full h-full">
        <Image
          src="/earth.png"
          alt="Vinse Viñalon profile picture"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <AvatarFallback className="text-xl font-semibold">VV</AvatarFallback>
    </Avatar>
  )
})

export default ProfileAvatar
