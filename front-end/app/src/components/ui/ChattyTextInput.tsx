import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'
import Input from './Input'
import PasswordInput from './PasswordInput'

type ChattyTextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
  children?: ReactNode
}

const ChattyTextInput = forwardRef<HTMLInputElement, ChattyTextInputProps>(
  ({ label, id, type = 'text', error, children, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={id}
          className="text-xs font-medium uppercase tracking-wide text-muted-foreground"
        >
          {label}
        </label>
        {type === 'password' ? (
          <PasswordInput id={id} ref={ref} {...props} />
        ) : (
          <Input id={id} ref={ref} type={type} {...props} />
        )}
        {error && <p className="text-xs text-destructive">{error}</p>}
        {children}
      </div>
    )
  }
)

ChattyTextInput.displayName = 'ChattyTextInput'

export default ChattyTextInput
