import { useState, useRef, useEffect } from 'react'
import { EmojiPicker, type Emoji } from 'frimousse'
import { cn } from '../lib/cn'

interface EmojiPickerPopoverProps {
  onEmojiSelect?: (emoji: string) => void
  children: React.ReactNode
}

export default function EmojiPickerPopover({ onEmojiSelect, children }: EmojiPickerPopoverProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  function handleSelect(emoji: Emoji) {
    onEmojiSelect?.(emoji.emoji)
    setOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <div onClick={() => setOpen(!open)}>{children}</div>
      {open && (
        <div className="absolute bottom-full right-0 mb-2 z-50 animate-fade-in">
          <EmojiPicker.Root
            onEmojiSelect={handleSelect}
            className={cn(
              'flex flex-col w-[352px] h-[400px]',
              'rounded-lg border border-border bg-background shadow-lg overflow-hidden'
            )}
          >
            <EmojiPicker.Search
              className={cn(
                'mx-2 mt-2 px-3 py-2 rounded-md border border-input bg-background text-sm',
                'placeholder:text-muted-foreground outline-none',
                'focus:ring-1 focus:ring-ring'
              )}
              placeholder="Search emoji..."
            />
            <EmojiPicker.Viewport className="flex-1 overflow-y-auto px-1 py-1">
              <EmojiPicker.Loading>
                <span className="flex items-center justify-center h-full text-sm text-muted-foreground">
                  Loading emojis...
                </span>
              </EmojiPicker.Loading>
              <EmojiPicker.Empty>
                <span className="flex items-center justify-center h-full text-sm text-muted-foreground">
                  No emoji found
                </span>
              </EmojiPicker.Empty>
              <EmojiPicker.List
                components={{
                  CategoryHeader: ({ category, ...props }) => (
                    <div
                      {...props}
                      className="px-2 py-1.5 text-[11px] font-bold uppercase tracking-wide text-muted-foreground bg-background"
                    >
                      {category.label}
                    </div>
                  ),
                  Row: ({ children, ...props }) => (
                    <div {...props} className="flex">{children}</div>
                  ),
                  Emoji: ({ emoji, ...props }) => (
                    <button
                      {...props}
                      className={cn(
                        'flex items-center justify-center w-[34px] h-[34px] rounded-md text-xl cursor-pointer',
                        'transition-colors',
                        emoji.isActive ? 'bg-surface-alt' : 'hover:bg-surface-alt'
                      )}
                    >
                      {emoji.emoji}
                    </button>
                  ),
                }}
              />
            </EmojiPicker.Viewport>
          </EmojiPicker.Root>
        </div>
      )}
    </div>
  )
}
