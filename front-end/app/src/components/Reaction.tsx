import { cn } from '../lib/cn'
import Emoji from './Emoji'

interface ReactionProps {
  emoji: string
  count: number
  active: boolean
  onClick?: () => void
}

export default function Reaction({ emoji, count, active, onClick }: ReactionProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs',
        'border transition-colors cursor-pointer',
        active
          ? 'bg-primary/10 border-primary/30 text-primary'
          : 'bg-background border-border text-muted-foreground hover:bg-surface-alt'
      )}
    >
      <Emoji emoji={emoji} size={14} />
      <span className="font-medium">{count}</span>
    </button>
  )
}
