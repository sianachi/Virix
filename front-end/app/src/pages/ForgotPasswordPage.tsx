import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Logo from '../components/ui/Logo'
import Button from '../components/ui/Button'
import ChattyTextInput from '../components/ui/ChattyTextInput'
import { api } from '../lib/api'
import { forgotPasswordSchema, type ForgotPasswordForm } from '../lib/validations'
import authHero from '../assets/auth-hero.png'

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({ resolver: zodResolver(forgotPasswordSchema) })

  async function onSubmit(data: ForgotPasswordForm) {
    setServerError('')
    setLoading(true)
    try {
      await api.post('/auth/forgot-password', { email: data.email })
      setSubmittedEmail(data.email)
      setSubmitted(true)
    } catch {
      setServerError('Something went wrong. Try again.')
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
          {submitted ? (
            <div className="flex flex-col items-start gap-3">
              <Logo size={48} />
              <h1 className="font-serif text-3xl font-bold text-foreground">Check your inbox</h1>
              <p className="text-muted-foreground">
                If <span className="font-medium text-foreground">{submittedEmail}</span> is registered, we sent a recovery link. It expires in 15 minutes.
              </p>
              <Link to="/login" className="mt-4 text-sm font-medium text-primary hover:underline">
                Back to login
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-10 flex flex-col items-start gap-3">
                <Logo size={48} />
                <h1 className="font-serif text-3xl font-bold text-foreground">Forgot your password?</h1>
                <p className="text-muted-foreground">
                  Enter your email and we'll send you a link to reset it.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
                <ChattyTextInput
                  id="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                  autoFocus
                  error={errors.email?.message}
                  {...register('email')}
                />

                {serverError && (
                  <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
                    {serverError}
                  </p>
                )}

                <Button type="submit" disabled={loading}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Send Recovery Link'}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
