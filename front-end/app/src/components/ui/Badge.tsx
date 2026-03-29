import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'
import type { BadgeVariant } from '../../types/ui'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  children?: ReactNode
}

const variants: Record<BadgeVariant, string> = {
  default: 'bg-primary text-primary-foreground',
  outline: 'border border-input text-muted-foreground',
  destructive: 'bg-destructive text-destructive-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
}

export default function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold',
        'transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
