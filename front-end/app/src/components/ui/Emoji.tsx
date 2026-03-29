import { cn } from '../../lib/cn'

interface EmojiProps {
  emoji: string
  size?: number
  className?: string
}

const TWEMOJI_BASE = 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg'

function emojiToCodepoint(emoji: string): string {
  const codepoints: string[] = []
  for (const char of emoji) {
    const cp = char.codePointAt(0)
    if (cp !== undefined && cp !== 0xfe0f) {
      codepoints.push(cp.toString(16))
    }
  }
  return codepoints.join('-')
}

export default function Emoji({ emoji, size = 20, className }: EmojiProps) {
  const codepoint = emojiToCodepoint(emoji)
  const src = `${TWEMOJI_BASE}/${codepoint}.svg`

  return (
    <img
      src={src}
      alt={emoji}
      draggable={false}
      className={cn('inline-block align-text-bottom', className)}
      style={{ width: size, height: size }}
    />
  )
}
