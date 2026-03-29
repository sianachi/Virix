import { cn } from '../../lib/cn'
import Emoji from '../ui/Emoji'

interface ReactionPickerProps {
  onSelect?: (emoji: string) => void
  className?: string
}

const emojis = ['😊', '😂', '❤️', '🔥', '👍', '👀', '🎉', '💜', '😢', '🤔']

export default function ReactionPicker({ onSelect, className }: ReactionPickerProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 rounded-lg border border-border bg-background p-1.5 shadow-md',
        className
      )}
    >
      {emojis.map((emoji) => (
        <button
          key={emoji}
          onClick={() => onSelect?.(emoji)}
          className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-surface-alt transition-colors cursor-pointer"
        >
          <Emoji emoji={emoji} size={22} />
        </button>
      ))}
    </div>
  )
}
