import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface DialogOverlayProps {
  onClick: () => void
}

interface DialogProps {
  open: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

interface DialogSectionProps {
  children: ReactNode
  className?: string
}

export function DialogOverlay({ onClick }: DialogOverlayProps) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 animate-fade-in"
      onClick={onClick}
    />
  )
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  if (!open) return null
  return (
    <>
      <DialogOverlay onClick={() => onOpenChange?.(false)} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className={cn(
            'w-full max-w-md rounded-lg bg-background p-6 shadow-lg',
            'animate-fade-in-up'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export function DialogHeader({ children, className }: DialogSectionProps) {
  return <div className={cn('mb-4 space-y-1.5', className)}>{children}</div>
}

export function DialogTitle({ children, className }: DialogSectionProps) {
  return (
    <h2 className={cn('text-lg font-semibold text-foreground', className)}>
      {children}
    </h2>
  )
}

export function DialogDescription({ children, className }: DialogSectionProps) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>
      {children}
    </p>
  )
}

export function DialogFooter({ children, className }: DialogSectionProps) {
  return (
    <div className={cn('mt-6 flex justify-end gap-3', className)}>
      {children}
    </div>
  )
}
