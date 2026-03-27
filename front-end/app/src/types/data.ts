export type StatusType = 'online' | 'idle' | 'dnd' | 'offline'

export interface Server {
  id: string
  label: string
  icon: string
  color: string
}

export interface VoiceUser {
  name: string
  emoji: string
  color: string
  muted?: boolean
}

export interface Room {
  id: string
  name: string
  type: 'text' | 'voice'
  unread?: boolean
  mentions?: number
  users?: VoiceUser[]
}

export interface Member {
  name: string
  emoji: string
  color: string
  status: StatusType
  activity?: string
  role?: string
}

export interface ReactionData {
  emoji: string
  count: number
  active: boolean
}

export interface MessageData {
  id: number
  author: string
  emoji: string
  color: string
  text: string
  timestamp: string
  showAuthor: boolean
  reactions?: ReactionData[]
}

export interface TypingUser {
  name: string
  emoji: string
  color: string
}
