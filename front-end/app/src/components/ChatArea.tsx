import { useAppStore } from '../store/app-store'
import { messages, typingUsers } from '../data/messages'
import {
  MessageSquare,
  Phone,
  Video,
  Pin,
  Users,
  Search,
  type LucideIcon,
} from 'lucide-react'
import Separator from './Separator'
import Tooltip from './Tooltip'
import Message from './Message'
import MessageInput from './MessageInput'
import TypingIndicator from './TypingIndicator'

interface ToolbarAction {
  icon: LucideIcon
  label: string
}

const toolbarActions: ToolbarAction[] = [
  { icon: Phone, label: 'Voice call' },
  { icon: Video, label: 'Video call' },
  { icon: Pin, label: 'Pinned messages' },
  { icon: Users, label: 'Members' },
  { icon: Search, label: 'Search' },
]

export default function ChatArea() {
  const activeRoom = useAppStore((s) => s.activeRoom)

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-background">
      {/* Header */}
      <div className="h-12 flex items-center gap-3 px-4 border-b border-border shrink-0">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-primary/10 flex items-center justify-center">
            <MessageSquare className="h-4 w-4 text-primary" />
          </div>
          <span className="font-semibold text-[15px] text-foreground">{activeRoom}</span>
        </div>
        <Separator orientation="vertical" className="h-5" />
        <span className="text-sm text-muted-foreground truncate">
          Chat about anything — keep it friendly!
        </span>

        <div className="ml-auto flex items-center gap-0.5 shrink-0">
          {toolbarActions.map(({ icon: Icon, label }) => (
            <Tooltip key={label} content={label} side="bottom">
              <button className="h-8 w-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-alt transition-colors cursor-pointer">
                <Icon className="h-4.5 w-4.5" />
              </button>
            </Tooltip>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto py-4 space-y-1">
        {messages.map((msg) => (
          <Message key={msg.id} {...msg} />
        ))}
      </div>

      {/* Typing indicator */}
      <TypingIndicator users={typingUsers} />

      {/* Input */}
      <MessageInput roomName={`#${activeRoom}`} />
    </div>
  )
}
