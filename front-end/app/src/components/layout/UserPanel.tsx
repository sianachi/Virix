import { useNavigate } from 'react-router-dom'
import { Mic, Headphones, Settings, LogOut } from 'lucide-react'
import Avatar from '../ui/Avatar'
import Tooltip from '../ui/Tooltip'
import { useAuthStore } from '../../store/auth-store'

export default function UserPanel() {
  const navigate = useNavigate()
  const user = useAuthStore((s) => s.user)
  const logout = useAuthStore((s) => s.logout)

  async function handleLogout() {
    await logout()
    navigate('/login')
  }

  return (
    <div className="h-14 shrink-0 flex items-center gap-2 px-2 bg-[#F3F0F7] border-t border-border">
      <Avatar emoji={user?.emoji ?? '🧙'} color={user?.color ?? '#7C3AED'} size="sm" status="online" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground truncate leading-tight">{user?.username ?? 'User'}</p>
        <p className="text-[11px] text-muted-foreground leading-tight">Online</p>
      </div>
      <div className="flex items-center gap-0.5">
        <Tooltip content="Mute" side="top">
          <button className="h-7 w-7 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-alt transition-colors cursor-pointer">
            <Mic className="h-4 w-4" />
          </button>
        </Tooltip>
        <Tooltip content="Deafen" side="top">
          <button className="h-7 w-7 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-alt transition-colors cursor-pointer">
            <Headphones className="h-4 w-4" />
          </button>
        </Tooltip>
        <Tooltip content="Settings" side="top">
          <button className="h-7 w-7 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-alt transition-colors cursor-pointer">
            <Settings className="h-4 w-4" />
          </button>
        </Tooltip>
        <Tooltip content="Sign out" side="top">
          <button
            onClick={handleLogout}
            className="h-7 w-7 flex items-center justify-center rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors cursor-pointer"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </Tooltip>
      </div>
    </div>
  )
}
