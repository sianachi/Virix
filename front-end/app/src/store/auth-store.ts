import { create } from 'zustand'
import { api, ApiError } from '../lib/api'

interface User {
  id: number
  username: string
  email: string
  status: string
  emoji: string | null
  color: string | null
  activity: string | null
}

interface AuthState {
  user: User | null
  token: string | null
  loading: boolean
  initialized: boolean

  login: (username: string, password: string) => Promise<void>
  register: (username: string, email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  initialize: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('token'),
  loading: false,
  initialized: false,

  initialize: async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      set({ initialized: true, user: null, token: null })
      return
    }

    try {
      const user = await api.get<User>('/users/me')
      set({ user, token, initialized: true })
    } catch {
      localStorage.removeItem('token')
      set({ user: null, token: null, initialized: true })
    }
  },

  login: async (username, password) => {
    set({ loading: true })
    try {
      const res = await api.postForm<{ access_token: string }>('/auth/login', {
        username,
        password,
      })
      localStorage.setItem('token', res.access_token)
      set({ token: res.access_token })

      const user = await api.get<User>('/users/me')
      set({ user, loading: false })
    } catch (err) {
      set({ loading: false })
      if (err instanceof ApiError) {
        const body = err.body as { detail?: string }
        throw new Error(body.detail ?? 'Login failed')
      }
      throw err
    }
  },

  register: async (username, email, password) => {
    set({ loading: true })
    try {
      await api.post('/auth/register', { username, email, password })

      // Auto-login after registration
      const res = await api.postForm<{ access_token: string }>('/auth/login', {
        username,
        password,
      })
      localStorage.setItem('token', res.access_token)
      set({ token: res.access_token })

      const user = await api.get<User>('/users/me')
      set({ user, loading: false })
    } catch (err) {
      set({ loading: false })
      if (err instanceof ApiError) {
        const body = err.body as { detail?: string }
        throw new Error(body.detail ?? 'Registration failed')
      }
      throw err
    }
  },

  logout: async () => {
    try {
      await api.post('/auth/logout')
    } catch {
      // Logout even if the server call fails
    }
    localStorage.removeItem('token')
    set({ user: null, token: null })
  },
}))

export type { User }
