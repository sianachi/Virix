import { useState } from 'react'
import { cn } from '../../lib/cn'
import { PlusCircle, Gift, Paperclip, Smile } from 'lucide-react'
import Tooltip from '../ui/Tooltip'
import EmojiPickerPopover from '../ui/EmojiPickerPopover'

interface MessageInputProps {
  roomName?: string
}

export default function MessageInput({ roomName = 'general' }: MessageInputProps) {
  const [value, setValue] = useState('')
  const [focused, setFocused] = useState(false)

  return (
    <div className="px-4 pb-4">
      <div
        className={cn(
          'flex items-center gap-2 rounded-xl border bg-background px-3 py-2 transition-all',
          focused ? 'border-primary shadow-[0_0_0_1px_var(--color-primary)]' : 'border-border'
        )}
      >
        <button className="text-muted-foreground hover:text-foreground transition-colors shrink-0 cursor-pointer">
          <PlusCircle className="h-5 w-5" />
        </button>

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={`Message ${roomName}`}
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
        />

        <div className="flex items-center gap-1 shrink-0">
          <Tooltip content="Send gift" side="top">
            <button className="h-8 w-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-alt transition-colors cursor-pointer">
              <Gift className="h-4.5 w-4.5" />
            </button>
          </Tooltip>
          <Tooltip content="Attach file" side="top">
            <button className="h-8 w-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-alt transition-colors cursor-pointer">
              <Paperclip className="h-4.5 w-4.5" />
            </button>
          </Tooltip>
          <EmojiPickerPopover onEmojiSelect={(emoji) => setValue((v) => v + emoji)}>
            <Tooltip content="Emoji" side="top">
              <button className="h-8 w-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-alt transition-colors cursor-pointer">
                <Smile className="h-4.5 w-4.5" />
              </button>
            </Tooltip>
          </EmojiPickerPopover>
        </div>
      </div>
    </div>
  )
}
