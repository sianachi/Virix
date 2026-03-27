import type { Room } from '../types/data'

export const rooms: Room[] = [
  { id: 'welcome', name: 'welcome', type: 'text' },
  { id: 'rules', name: 'rules', type: 'text' },
  { id: 'general', name: 'general', type: 'text', unread: true, mentions: 4 },
  { id: 'memes', name: 'memes', type: 'text', unread: true },
  { id: 'off-topic', name: 'off-topic', type: 'text' },
  {
    id: 'hangout',
    name: 'Hangout',
    type: 'voice',
    users: [
      { name: 'Kai', emoji: '🐉', color: '#DC2626' },
      { name: 'Yuki', emoji: '🌸', color: '#EC4899', muted: true },
    ],
  },
  {
    id: 'music',
    name: 'Music',
    type: 'voice',
    users: [{ name: 'Leo', emoji: '🦁', color: '#EA580C' }],
  },
  { id: 'focus-room', name: 'Focus Room', type: 'voice' },
]
