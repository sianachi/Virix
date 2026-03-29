import { cn } from '../../lib/cn'
import { Smile, ThumbsUp, MessageSquare, MoreHorizontal, type LucideIcon } from 'lucide-react'
import Tooltip from '../ui/Tooltip'

interface Action {
  icon: LucideIcon
  label: string
}

const actions: Action[] = [
  { icon: Smile, label: 'React' },
  { icon: ThumbsUp, label: 'Like' },
  { icon: MessageSquare, label: 'Reply' },
  { icon: MoreHorizontal, label: 'More' },
]

export default function MessageActions() {
  return (
    <div className="absolute -top-3 right-4 flex items-center gap-0.5 rounded-md border border-border bg-background shadow-sm p-0.5 animate-fade-in">
      {actions.map(({ icon: Icon, label }) => (
        <Tooltip key={label} content={label} side="top">
          <button
            className={cn(
              'h-7 w-7 flex items-center justify-center rounded-sm',
              'text-muted-foreground hover:text-foreground hover:bg-surface-alt',
              'transition-colors cursor-pointer'
            )}
          >
            <Icon className="h-4 w-4" />
          </button>
        </Tooltip>
      ))}
    </div>
  )
}
