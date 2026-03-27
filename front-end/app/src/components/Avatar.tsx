import { cn } from '../lib/cn'
import type { AvatarSize } from '../types/ui'
import type { StatusType } from '../types/data'
import Emoji from './Emoji'

interface AvatarProps {
  emoji: string
  color?: string
  size?: AvatarSize
  status?: StatusType
  className?: string
}

const sizeMap: Record<AvatarSize, string> = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-lg',
  lg: 'w-12 h-12 text-xl',
}

const statusColors: Record<StatusType, string> = {
  online: 'bg-online',
  idle: 'bg-idle',
  dnd: 'bg-dnd',
  offline: 'bg-offline',
}

export default function Avatar({
  emoji,
  color = '#7C3AED',
  size = 'md',
  status,
  className,
}: AvatarProps) {
  return (
    <div className={cn('relative inline-flex shrink-0', className)}>
      <div
        className={cn(
          'rounded-full flex items-center justify-center',
          sizeMap[size]
        )}
        style={{
          background: `linear-gradient(135deg, ${color}33, ${color}22)`,
        }}
      >
        <Emoji emoji={emoji} size={size === 'sm' ? 16 : size === 'md' ? 22 : 28} />
      </div>
      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 rounded-full border-2 border-white',
            size === 'sm' ? 'w-2.5 h-2.5' : 'w-3 h-3',
            statusColors[status]
          )}
        />
      )}
    </div>
  )
}
