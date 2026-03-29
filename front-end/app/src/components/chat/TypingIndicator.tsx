import Avatar from '../ui/Avatar'
import type { TypingUser } from '../../types/data'

interface TypingIndicatorProps {
  users?: TypingUser[]
}

export default function TypingIndicator({ users = [] }: TypingIndicatorProps) {
  if (users.length === 0) return null

  return (
    <div className="flex items-center gap-2 px-4 py-1.5">
      <div className="flex -space-x-2">
        {users.map((u) => (
          <Avatar key={u.name} emoji={u.emoji} color={u.color} size="sm" />
        ))}
      </div>
      <div className="flex items-center gap-1.5">
        <div className="flex gap-0.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-typing-dot"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">
          {users.map((u, i) => (
            <span key={u.name}>
              <strong className="text-foreground">{u.name}</strong>
              {i < users.length - 1 && ' and '}
            </span>
          ))}
          {users.length === 1 ? ' is typing...' : ' are typing...'}
        </span>
      </div>
    </div>
  )
}
