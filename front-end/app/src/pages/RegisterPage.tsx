import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Logo from '../components/ui/Logo'
import Button from '../components/ui/Button'
import ChattyTextInput from '../components/ui/ChattyTextInput'
import { useAuthStore } from '../store/auth-store'
import { registerSchema, type RegisterForm } from '../lib/validations'
import authHero from '../assets/auth-hero.png'

function getPasswordStrength(password: string): { label: string; color: string; width: string } {
  if (password.length === 0) return { label: '', color: '', width: 'w-0' }
  if (password.length < 8) return { label: 'Too short', color: 'bg-destructive', width: 'w-1/4' }

  let score = 0
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++
  if (/\d/.test(password)) score++
  if (/[^a-zA-Z0-9]/.test(password)) score++
  if (password.length >= 12) score++

  if (score <= 1) return { label: 'Weak', color: 'bg-destructive', width: 'w-1/3' }
  if (score <= 2) return { label: 'Fair', color: 'bg-idle', width: 'w-2/3' }
  return { label: 'Strong', color: 'bg-online', width: 'w-full' }
}

export default function RegisterPage() {
  const navigate = useNavigate()
  const registerUser = useAuthStore((s) => s.register)
  const loading = useAuthStore((s) => s.loading)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>({ resolver: zodResolver(registerSchema) })

  const password = watch('password', '')
  const strength = getPasswordStrength(password)

  async function onSubmit(data: RegisterForm) {
    setServerError('')
    try {
      await registerUser(data.username, data.email, data.password)
      navigate('/home')
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Registration failed')
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Left — hero image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={authHero}
          alt=""
          className="h-full w-full object-cover object-left"
        />
      </div>

      {/* Right — form */}
      <div className="relative flex w-full items-center justify-center px-6 md:w-1/2 md:px-12">
        <Link
          to="/login"
          className="absolute top-6 left-6 flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      <div className="w-full max-w-sm animate-fade-in-up">
        <div className="mb-8 flex flex-col items-start gap-2">
          <Logo size={48} />
          <h1 className="font-serif text-2xl font-bold text-foreground">Create an account</h1>
          <p className="text-sm text-muted-foreground">Join Chatty and start chatting</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
          <ChattyTextInput
            id="username"
            label="Username"
            type="text"
            autoComplete="username"
            autoFocus
            error={errors.username?.message}
            {...register('username')}
          />

          <ChattyTextInput
            id="email"
            label="Email"
            type="email"
            autoComplete="email"
            error={errors.email?.message}
            {...register('email')}
          />

          <ChattyTextInput
            id="password"
            label="Password"
            type="password"
            autoComplete="new-password"
            error={errors.password?.message}
            {...register('password')}
          >
            {password.length > 0 && (
              <div className="flex items-center gap-2">
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-border">
                  <div className={`h-full rounded-full transition-all ${strength.color} ${strength.width}`} />
                </div>
                <span className="text-xs text-muted-foreground">{strength.label}</span>
              </div>
            )}
          </ChattyTextInput>

          <ChattyTextInput
            id="confirm"
            label="Confirm Password"
            type="password"
            autoComplete="new-password"
            error={errors.confirm?.message}
            {...register('confirm')}
          />

          {serverError && (
            <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {serverError}
            </p>
          )}

          <Button type="submit" disabled={loading} className="mt-1">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Sign Up'}
          </Button>
        </form>

        <p className="mt-6 text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
      </div>
    </div>
  )
}
