import { Mic, Headphones, Settings } from 'lucide-react'
import Avatar from './Avatar'
import Tooltip from './Tooltip'

export default function UserPanel() {
  return (
    <div className="h-14 shrink-0 flex items-center gap-2 px-2 bg-[#F3F0F7] border-t border-border">
      <Avatar emoji="🧙" color="#7C3AED" size="sm" status="online" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground truncate leading-tight">WizardDev</p>
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
      </div>
    </div>
  )
}
