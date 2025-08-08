import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
      <AvatarImage 
        src="/earth.png" 
        alt="Vinse Viñalon profile picture"
        className="object-cover"
        loading="eager"
      />
      <AvatarFallback className="text-xl font-semibold">VV</AvatarFallback>
    </Avatar>
  )
})

export default ProfileAvatar
