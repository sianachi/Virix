import { useState, useCallback, useRef, createContext, useContext, type ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { X } from 'lucide-react'
import type { ToastVariant } from '../../types/ui'

type AddToastFn = (message: string, variant?: ToastVariant) => void

interface Toast {
  id: number
  message: string
  variant: ToastVariant
}

interface ToastProviderProps {
  children: ReactNode
}

const ToastContext = createContext<AddToastFn | null>(null)

const variantStyles: Record<ToastVariant, string> = {
  success: 'border-online/30 bg-online/5',
  error: 'border-destructive/30 bg-destructive/5',
  info: 'border-primary/30 bg-primary/5',
}

const variantDots: Record<ToastVariant, string> = {
  success: 'bg-online',
  error: 'bg-destructive',
  info: 'bg-primary',
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const idRef = useRef(0)

  const addToast: AddToastFn = useCallback((message, variant = 'info') => {
    const id = ++idRef.current
    setToasts((prev) => [...prev, { id, message, variant }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3500)
  }, [])

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 min-w-[300px]">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              'flex items-center gap-3 rounded-lg border px-4 py-3 shadow-md animate-fade-in-up',
              variantStyles[toast.variant]
            )}
          >
            <span className={cn('h-2 w-2 rounded-full shrink-0', variantDots[toast.variant])} />
            <span className="text-sm text-foreground flex-1">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-muted-foreground hover:text-foreground shrink-0 cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast(): AddToastFn {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
