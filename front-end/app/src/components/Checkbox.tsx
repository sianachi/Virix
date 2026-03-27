import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../lib/cn'
import { Check } from 'lucide-react'

interface CheckboxProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  checked: boolean
  onCheckedChange?: (checked: boolean) => void
}

export default function Checkbox({ checked, onCheckedChange, className, ...props }: CheckboxProps) {
  return (
    <button
      role="checkbox"
      aria-checked={checked}
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        'h-4 w-4 shrink-0 rounded-sm border border-input',
        'flex items-center justify-center transition-colors cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        checked && 'bg-primary border-primary text-primary-foreground',
        className
      )}
      {...props}
    >
      {checked && <Check className="h-3 w-3" />}
    </button>
  )
}
