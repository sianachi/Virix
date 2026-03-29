import { useState } from 'react'
import Avatar from '../ui/Avatar'
import MessageActions from './MessageActions'
import Reaction from './Reaction'
import type { ReactionData } from '../../types/data'

interface MessageProps {
  author: string
  emoji: string
  color: string
  text: string
  timestamp: string
  showAuthor?: boolean
  reactions?: ReactionData[]
  onReactionClick?: (index: number) => void
}

export default function Message({
  author,
  emoji,
  color,
  text,
  timestamp,
  showAuthor = true,
  reactions = [],
  onReactionClick,
}: MessageProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative flex gap-4 px-4 py-0.5 hover:bg-surface-alt/50 transition-colors"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {showAuthor ? (
        <Avatar emoji={emoji} color={color} size="md" className="mt-0.5" />
      ) : (
        <div className="w-10 shrink-0 flex items-center justify-center">
          <span className="text-[11px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            {timestamp}
          </span>
        </div>
      )}

      <div className="flex-1 min-w-0">
        {showAuthor && (
          <div className="flex items-baseline gap-2 mb-0.5">
            <span
              className="text-sm font-semibold hover:underline cursor-pointer"
              style={{ color }}
            >
              {author}
            </span>
            <span className="text-[11px] text-muted-foreground">{timestamp}</span>
          </div>
        )}
        <p className="text-sm text-foreground leading-relaxed">{text}</p>
        {reactions.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {reactions.map((r, i) => (
              <Reaction
                key={i}
                emoji={r.emoji}
                count={r.count}
                active={r.active}
                onClick={() => onReactionClick?.(i)}
              />
            ))}
            <button className="h-6 w-6 rounded-full border border-border flex items-center justify-center text-xs text-muted-foreground hover:bg-surface-alt hover:text-foreground transition-colors opacity-0 group-hover:opacity-100 cursor-pointer">
              +
            </button>
          </div>
        )}
      </div>

      {hovered && <MessageActions />}
    </div>
  )
}
