import { cn } from '../../lib/cn'
import { useAppStore } from '../../store/app-store'
import { useUIStore } from '../../store/ui-store'
import { rooms } from '../../data/rooms'
import { ChevronDown, ChevronLeft, MessageSquare, Mic } from 'lucide-react'
import Avatar from '../ui/Avatar'
import Badge from '../ui/Badge'
import Emoji from '../ui/Emoji'
import UserPanel from './UserPanel'

export default function RoomsSidebar() {
  const activeRoom = useAppStore((s) => s.activeRoom)
  const setActiveRoom = useAppStore((s) => s.setActiveRoom)
  const collapsed = useUIStore((s) => s.roomsCollapsed)
  const toggleCollapsed = useUIStore((s) => s.toggleRoomsCollapsed)

  if (collapsed) {
    return (
      <button
        onClick={toggleCollapsed}
        className="w-6 shrink-0 flex items-center justify-center bg-surface hover:bg-surface-alt transition-colors cursor-pointer border-r border-border"
        title="Expand rooms"
      >
        <ChevronDown className="h-4 w-4 text-muted-foreground rotate-[-90deg]" />
      </button>
    )
  }

  return (
    <div className="w-60 shrink-0 bg-surface flex flex-col border-r border-border transition-all duration-200">
      {/* Server header */}
      <div className="h-12 flex items-center justify-between px-4 border-b border-border shrink-0">
        <button className="flex items-center gap-1 font-semibold text-[15px] text-foreground hover:text-primary transition-colors cursor-pointer">
          Rooms
          <ChevronDown className="h-3 w-3" />
        </button>
        <button
          onClick={toggleCollapsed}
          className="h-6 w-6 flex items-center justify-center rounded-sm text-muted-foreground hover:text-foreground hover:bg-surface-alt transition-colors cursor-pointer"
          title="Collapse rooms"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>

      {/* Rooms list */}
      <div className="flex-1 overflow-y-auto py-3 px-2">
        <div className="mb-1">
          <span className="px-2 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
            Rooms
          </span>
        </div>

        <div className="space-y-0.5">
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <div key={room.id}>
                <button
                  onClick={() => setActiveRoom(room.id)}
                  className={cn(
                    'w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors cursor-pointer',
                    activeRoom === room.id
                      ? 'bg-primary/10 text-primary font-medium'
                      : room.unread
                        ? 'text-foreground font-semibold hover:bg-surface-alt'
                        : 'text-muted-foreground hover:bg-surface-alt hover:text-foreground'
                  )}
                >
                  {room.type === 'text' ? (
                    <MessageSquare className="h-4 w-4 shrink-0" />
                  ) : (
                    <Mic className="h-4 w-4 shrink-0" />
                  )}
                  <span className="truncate">{room.name}</span>
                  {room.mentions && (
                    <Badge className="ml-auto text-[10px] px-1.5 min-w-[18px] justify-center">
                      {room.mentions}
                    </Badge>
                  )}
                </button>

                {/* Voice room users */}
                {room.type === 'voice' && room.users && room.users.length > 0 && (
                  <div className="ml-6 mt-0.5 space-y-0.5">
                    {room.users.map((user) => (
                      <div key={user.name} className="flex items-center gap-2 py-0.5 px-1">
                        <Avatar emoji={user.emoji} color={user.color} size="sm" status="online" />
                        <span className="text-xs text-muted-foreground truncate">
                          {user.name}
                        </span>
                        {user.muted && (
                          <Emoji emoji="🔇" size={12} className="opacity-60" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="px-2 py-4 text-xs text-muted-foreground text-center">
              No rooms yet
            </p>
          )}
        </div>
      </div>

      {/* User panel */}
      <UserPanel />
    </div>
  )
}
