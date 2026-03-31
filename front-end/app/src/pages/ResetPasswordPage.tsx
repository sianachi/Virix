import { useState } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Logo from '../components/ui/Logo'
import Button from '../components/ui/Button'
import ChattyTextInput from '../components/ui/ChattyTextInput'
import { api, ApiError } from '../lib/api'
import { resetPasswordSchema, type ResetPasswordForm } from '../lib/validations'
import authHero from '../assets/auth-hero.png'

export default function ResetPasswordPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')

  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordForm>({ resolver: zodResolver(resetPasswordSchema) })

  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl font-bold text-foreground">Invalid link</h1>
          <p className="mt-2 text-muted-foreground">This reset link is missing or malformed.</p>
          <Link to="/login" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
            Back to login
          </Link>
        </div>
      </div>
    )
  }

  async function onSubmit(data: ResetPasswordForm) {
    setServerError('')
    setLoading(true)
    try {
      await api.post('/auth/reset-password', { token, new_password: data.password })
      setSuccess(true)
      setTimeout(() => navigate('/login'), 3000)
    } catch (err) {
      if (err instanceof ApiError) {
        const body = err.body as { detail?: string }
        setServerError(body.detail ?? 'Reset failed')
      } else {
        setServerError('Something went wrong')
      }
    } finally {
      setLoading(false)
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
          {success ? (
            <div className="flex flex-col items-start gap-3">
              <Logo size={48} />
              <h1 className="font-serif text-3xl font-bold text-foreground">Password reset!</h1>
              <p className="text-muted-foreground">
                Your password has been changed. Redirecting you to login...
              </p>
            </div>
          ) : (
            <>
              <div className="mb-10 flex flex-col items-start gap-3">
                <Logo size={48} />
                <h1 className="font-serif text-3xl font-bold text-foreground">Set a new password</h1>
                <p className="text-muted-foreground">
                  Choose a new password for your account.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
                <ChattyTextInput
                  id="password"
                  label="New Password"
                  type="password"
                  autoComplete="new-password"
                  autoFocus
                  error={errors.password?.message}
                  {...register('password')}
                />

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

                <Button type="submit" disabled={loading}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Reset Password'}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
