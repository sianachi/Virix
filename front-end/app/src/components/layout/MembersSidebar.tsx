import { cn } from '../../lib/cn'
import { useUIStore } from '../../store/ui-store'
import { members } from '../../data/members'
import { ChevronRight } from 'lucide-react'
import Avatar from '../ui/Avatar'
import Badge from '../ui/Badge'
import type { Member } from '../../types/data'

interface MemberSectionProps {
  title: string
  count: number
  members: Member[]
  isOffline?: boolean
}

interface MemberRowProps {
  member: Member
  isOffline?: boolean
}

export default function MembersSidebar() {
  const collapsed = useUIStore((s) => s.membersCollapsed)
  const toggleCollapsed = useUIStore((s) => s.toggleMembersCollapsed)

  const online = members.filter((m) => m.status !== 'offline')
  const offline = members.filter((m) => m.status === 'offline')

  if (collapsed) {
    return (
      <button
        onClick={toggleCollapsed}
        className="w-6 shrink-0 flex items-center justify-center bg-surface hover:bg-surface-alt transition-colors cursor-pointer border-l border-border"
        title="Expand members"
      >
        <ChevronRight className="h-4 w-4 text-muted-foreground rotate-180" />
      </button>
    )
  }

  return (
    <div className="w-60 shrink-0 bg-surface flex flex-col border-l border-border transition-all duration-200">
      <div className="h-12 flex items-center justify-between px-4 border-b border-border shrink-0">
        <span className="text-sm font-semibold text-foreground">Members</span>
        <button
          onClick={toggleCollapsed}
          className="h-6 w-6 flex items-center justify-center rounded-sm text-muted-foreground hover:text-foreground hover:bg-surface-alt transition-colors cursor-pointer"
          title="Collapse members"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-3 px-2">
        <MemberSection title="Online" count={online.length} members={online} />
        <MemberSection title="Offline" count={offline.length} members={offline} isOffline />
      </div>
    </div>
  )
}

function MemberSection({ title, count, members, isOffline }: MemberSectionProps) {
  return (
    <div className="mb-4">
      <span className="px-2 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
        {title} — {count}
      </span>
      <div className="mt-1 space-y-0.5">
        {members.map((member) => (
          <MemberRow key={member.name} member={member} isOffline={isOffline} />
        ))}
      </div>
    </div>
  )
}

function MemberRow({ member, isOffline }: MemberRowProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-surface-alt transition-colors cursor-pointer',
        isOffline && 'opacity-45'
      )}
    >
      <Avatar emoji={member.emoji} color={member.color} size="sm" status={member.status} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="text-sm text-foreground truncate">{member.name}</span>
          {member.role === 'Admin' && (
            <Badge
              className="text-[9px] px-1 py-0 bg-primary/[0.08] text-primary font-bold uppercase"
            >
              Admin
            </Badge>
          )}
        </div>
        {member.activity && (
          <p className="text-[11px] text-muted-foreground truncate leading-tight">
            {member.activity}
          </p>
        )}
      </div>
    </div>
  )
}
