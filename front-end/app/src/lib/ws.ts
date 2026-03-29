type EventHandler = (data: unknown) => void

const WS_URL = import.meta.env.VITE_WS_URL ?? 'ws://localhost:8000/ws'
const RECONNECT_DELAYS = [1000, 2000, 4000, 8000, 16000]

interface WSManager {
  connect: (token: string) => void
  disconnect: () => void
  subscribe: (event: string, handler: EventHandler) => () => void
  send: (event: string, data?: Record<string, unknown>) => void
  onStatusChange: (handler: (status: ConnectionStatus) => void) => () => void
}

type ConnectionStatus = 'connecting' | 'connected' | 'disconnected' | 'reconnecting'

export function createWSManager(): WSManager {
  let socket: WebSocket | null = null
  let currentToken: string | null = null
  let reconnectAttempt = 0
  let reconnectTimer: ReturnType<typeof setTimeout> | null = null
  let status: ConnectionStatus = 'disconnected'

  const listeners = new Map<string, Set<EventHandler>>()
  const statusListeners = new Set<(status: ConnectionStatus) => void>()

  function setStatus(newStatus: ConnectionStatus) {
    status = newStatus
    statusListeners.forEach((handler) => handler(status))
  }

  function connect(token: string) {
    currentToken = token
    if (socket?.readyState === WebSocket.OPEN) return

    setStatus('connecting')
    socket = new WebSocket(`${WS_URL}?token=${token}`)

    socket.onopen = () => {
      reconnectAttempt = 0
      setStatus('connected')
    }

    socket.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data)
        const { type, ...data } = message
        const handlers = listeners.get(type)
        if (handlers) {
          handlers.forEach((handler) => handler(data))
        }
      } catch {
        // Ignore malformed messages
      }
    }

    socket.onclose = () => {
      socket = null
      if (currentToken) {
        scheduleReconnect()
      } else {
        setStatus('disconnected')
      }
    }

    socket.onerror = () => {
      socket?.close()
    }
  }

  function scheduleReconnect() {
    if (reconnectTimer) return

    setStatus('reconnecting')
    const delay = RECONNECT_DELAYS[Math.min(reconnectAttempt, RECONNECT_DELAYS.length - 1)]!
    reconnectTimer = setTimeout(() => {
      reconnectTimer = null
      reconnectAttempt++
      if (currentToken) {
        connect(currentToken)
      }
    }, delay)
  }

  function disconnect() {
    currentToken = null
    if (reconnectTimer) {
      clearTimeout(reconnectTimer)
      reconnectTimer = null
    }
    socket?.close()
    socket = null
    setStatus('disconnected')
  }

  function subscribe(event: string, handler: EventHandler): () => void {
    if (!listeners.has(event)) {
      listeners.set(event, new Set())
    }
    listeners.get(event)!.add(handler)
    return () => {
      listeners.get(event)?.delete(handler)
    }
  }

  function send(event: string, data?: Record<string, unknown>) {
    if (socket?.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type: event, ...data }))
    }
  }

  function onStatusChange(handler: (status: ConnectionStatus) => void): () => void {
    statusListeners.add(handler)
    return () => {
      statusListeners.delete(handler)
    }
  }

  return { connect, disconnect, subscribe, send, onStatusChange }
}

export const ws = createWSManager()

export type { ConnectionStatus }
