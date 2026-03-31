import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          'flex h-12 w-full rounded-2xl border border-primary-light/30 bg-background px-5 py-3 text-base',
          'shadow-[0_0_8px_rgba(139,92,246,0.15)]',
          'placeholder:text-muted-foreground',
          'focus-visible:outline-none focus-visible:border-primary-light/60 focus-visible:shadow-[0_0_14px_rgba(139,92,246,0.3)]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'transition-all duration-200',
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input
