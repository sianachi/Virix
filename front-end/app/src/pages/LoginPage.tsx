import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Logo from '../components/ui/Logo'
import Button from '../components/ui/Button'
import ChattyTextInput from '../components/ui/ChattyTextInput'
import { useAuthStore } from '../store/auth-store'
import { loginSchema, type LoginForm } from '../lib/validations'
import authHero from '../assets/auth-hero.png'

export default function LoginPage() {
  const navigate = useNavigate()
  const login = useAuthStore((s) => s.login)
  const loading = useAuthStore((s) => s.loading)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) })

  async function onSubmit(data: LoginForm) {
    setServerError('')
    try {
      await login(data.username, data.password)
      navigate('/home')
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Login failed')
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
      <div className="flex w-full items-center justify-center px-6 md:w-1/2 md:px-12">
        <div className="w-full max-w-sm animate-fade-in-up">
          <div className="mb-10 flex flex-col items-start gap-3">
            <Logo size={48} />
            <h1 className="font-serif text-3xl font-bold text-foreground">
              Welcome to Chatty
            </h1>
            <p className="text-muted-foreground">
              Your rooms. Your people. Chat, call, and hang out with the communities you care about.
            </p>
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
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              error={errors.password?.message}
              {...register('password')}
            />

            <div className="flex justify-end -mt-5">
              <Link to="/forgot-password" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Forgot password?
              </Link>
            </div>

            {serverError && (
              <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {serverError}
              </p>
            )}

            <Button type="submit" disabled={loading} className="mt-1">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Log In'}
            </Button>
          </form>

          <p className="mt-6 text-sm text-muted-foreground">
            New here?{' '}
            <Link to="/register" className="font-medium text-primary hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
