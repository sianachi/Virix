import { useAppStore } from '../../store/app-store'
import { messages, typingUsers } from '../../data/messages'
import {
  MessageSquare,
  Phone,
  Video,
  Pin,
  Users,
  Search,
  type LucideIcon,
} from 'lucide-react'
import Separator from '../ui/Separator'
import Tooltip from '../ui/Tooltip'
import Message from '../chat/Message'
import MessageInput from '../chat/MessageInput'
import TypingIndicator from '../chat/TypingIndicator'

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
          <span className="font-semibold text-[15px] text-foreground">
            {activeRoom || 'Welcome'}
          </span>
        </div>
        {activeRoom && (
          <>
            <Separator orientation="vertical" className="h-5" />
            <span className="text-sm text-muted-foreground truncate">
              Chat about anything — keep it friendly!
            </span>
          </>
        )}

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
        {messages.length > 0 ? (
          messages.map((msg) => (
            <Message key={msg.id} {...msg} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
            <span className="text-4xl mb-3">💬</span>
            <p className="text-sm">No messages yet. Start the conversation!</p>
          </div>
        )}
      </div>

      {/* Typing indicator */}
      {typingUsers.length > 0 && <TypingIndicator users={typingUsers} />}

      {/* Input */}
      <MessageInput roomName={`#${activeRoom}`} />
    </div>
  )
}
