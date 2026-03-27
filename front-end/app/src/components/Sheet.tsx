import type { ReactNode } from 'react'
import { cn } from '../lib/cn'
import { X } from 'lucide-react'

interface SheetProps {
  open: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

interface SheetSectionProps {
  children: ReactNode
  className?: string
}

export function Sheet({ open, onOpenChange, children }: SheetProps) {
  if (!open) return null
  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/40 animate-fade-in"
        onClick={() => onOpenChange?.(false)}
      />
      <div
        className={cn(
          'fixed right-0 top-0 z-50 h-full w-[320px] bg-background p-6 shadow-xl',
          'transition-transform duration-200 ease-out',
          'animate-fade-in'
        )}
      >
        <button
          onClick={() => onOpenChange?.(false)}
          className="absolute right-4 top-4 rounded-sm p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>
        {children}
      </div>
    </>
  )
}

export function SheetHeader({ children, className }: SheetSectionProps) {
  return <div className={cn('mb-5 space-y-1.5', className)}>{children}</div>
}

export function SheetTitle({ children, className }: SheetSectionProps) {
  return (
    <h2 className={cn('text-lg font-semibold text-foreground', className)}>
      {children}
    </h2>
  )
}

export function SheetDescription({ children, className }: SheetSectionProps) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>
      {children}
    </p>
  )
}
